import { db } from "../../db/db.js";
import { users } from "../../db/schema.js";
import { ApiError } from "../errorHandler/ApiError.js";
import { ChangeEmailDTO, JwtTokenDTO } from "./dto/request.js";
import { eq } from "drizzle-orm";


export async function changeEmail(dto: JwtTokenDTO, newEmail: string) {    
    const user = await db.select().from(users).where(eq(users.id, dto.id));
    if(user.length == 0) {
        throw ApiError.badRequest('User not found');
    } else {
        await db.update(users).set({email: newEmail}).where(eq(users.id, user[0].id));
    }

}

export async function getUsers() {
    return await db.select().from(users);
}