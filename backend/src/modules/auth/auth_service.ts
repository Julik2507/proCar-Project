import * as bcrypt from 'bcrypt';
import { db } from "../../db/db.js";
import { users, tokens } from "../../db/schema.js";
import { ApiError } from "../errorHandler/ApiError.js";
import { LoginDTO, RegisterDTO } from "./dto/dto_request.js";
import { eq } from "drizzle-orm";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export async function registerUser(dto: RegisterDTO): Promise<any> {

    const findUser = await db.select().from(users).where(eq(users.email, dto.email))

    if(findUser.length > 0) {
        throw ApiError.badRequest('User with this email already exists!')
    }

    dto.password = await bcrypt.hash(dto.password, 7);
    const createdUser = await db.insert(users).values(dto).returning();

    const token = jwt.sign({id: createdUser[0].id, email: dto.email, role: createdUser[0].role}, process.env.SECRET_KEY!, {expiresIn: process.env.EXPIRE_IN});
    await db.insert(tokens).values({token, user_id:createdUser[0].id});
    return {token};
}

export async function loginUser(dto: LoginDTO) {
    const findUser = await db.select().from(users).where(eq(users.email, dto.email));

    if(findUser.length < 1) {
        throw ApiError.badRequest("User with this login or password doesn't exist!");
    }

    if(!await bcrypt.compare(dto.password, findUser[0].password)) {
        throw ApiError.badRequest("User with this login or password doesn't exist!");
    }

    const token = jwt.sign({id: findUser[0].id, email: findUser[0].email, role: findUser[0].role}, process.env.SECRET_KEY!, {expiresIn: process.env.EXPIRE_IN});    
    await db.update(tokens).set({token}).where(eq(tokens.user_id, findUser[0].id));
    return {token};
}