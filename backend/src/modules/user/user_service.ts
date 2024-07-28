import { db } from "../../db/db.js";
import { users } from "../../db/schema.js";
import { ApiError } from "../error/ApiError.js";
import { ChangeEmailDTO } from "./dto/request.js";
import { eq } from "drizzle-orm";


export async function changeEmail(dto: ChangeEmailDTO) {    
    const user = await db.select().from(users).where(eq(users.id, Number(dto.id)));
    if(user.length == 0) {
        throw ApiError.badRequest('User not found');
    } else {
        await db.update(users).set({email: dto.email}).where(eq(users.id, user[0].id))
    }

}