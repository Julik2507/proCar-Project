import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { db } from "../../db/db.js";
import { users, tokens, email_links } from "../../db/schema.js";
import { ApiError } from "../errorHandler/ApiError.js";
import { LoginDTO, RegisterDTO } from "./dto/dto_request.js";
import { eq } from "drizzle-orm";
import 'dotenv/config'
import { createTokens, saveToken } from './utils/auth_utils.js';
import { RegisterResponseDTO } from './dto/dto_response.js';
import { sendLinkToEmail } from '../email/email.service.js';
import { UserModel } from './models/user_model.js';
import { CreateTokensResponseDTO } from './dto/dto_response.js';

export async function registerUser(dto: RegisterDTO): Promise<RegisterResponseDTO> {

    const findUser = await db.select().from(users).where(eq(users.email, dto.email));

    if(findUser.length > 0) {
        throw ApiError.badRequest('User with this email already exists!');
    }
    
    dto.password = await bcrypt.hash(dto.password, 7);
    const createdUser = await db.insert(users).values(dto).returning();
    
    const tokens = await createTokens(createdUser[0]);

    // const saveEmailLink = await db.insert(email_links).values({
    //     link: dto.password,
    //     user_id: createdUser[0].id
    // });
    
    // const sendEmailtoAprrove = await sendLinkToEmail({
    //     email: createdUser[0].email,
    //     link: dto.password
    // })
        
    await saveToken({
        id: createdUser[0].id,
        token: tokens.refreshToken
    });


    
    return tokens;


    
}

export async function loginUser(dto: LoginDTO) {
    const findUser = await db.select().from(users).where(eq(users.email, dto.email));

    if(findUser.length < 1) {
        throw ApiError.badRequest("User with this login or password doesn't exist!");
    }

    if(!await bcrypt.compare(dto.password, findUser[0].password)) {
        throw ApiError.badRequest("User with this login or password doesn't exist!");
    }

    const tokens = await createTokens(findUser[0]);

    await saveToken({
        id: findUser[0].id,
        token: tokens.refreshToken
    });

    return tokens;
}

export async function logoutUser(dto: any) {
    const deletedRefreshToken = await db.delete(tokens).where(eq(tokens.token, dto.refreshToken)).returning();
    return deletedRefreshToken;
}

export async function updTokensByRefreshToken(dto:any): Promise<CreateTokensResponseDTO>  {
    if(dto.refreshToken==undefined) {
        throw ApiError.unauthorized("You didn't authorize! Please, pass authorization!");
    }

    const decodedToken = jwt.verify(dto.refreshToken, process.env.SECRET_KEY_REFRESH!);
    const payload = new UserModel(decodedToken);
    const existInDB = await db.select().from(tokens).where(eq(tokens.token, dto.refreshToken));

    if(decodedToken && existInDB.length > 0) {
        const tokens = await createTokens(payload);
        const save = await saveToken({
            id: payload.id,
            token: tokens.refreshToken
        })
        return tokens;
    } else {
        throw ApiError.unauthorized("You didn't authorize! Please, pass authorization!");
    }
}