import { db } from "../../db/db.js";
import { users } from "../../db/schema.js";
import { RegisterDTO } from "./dto/dto_request.js";

export async function registerUser(dto: RegisterDTO): Promise<any> {
    const result = await db.insert(users).values(dto).returning();
    return result;
}
