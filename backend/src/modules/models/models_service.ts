import { db } from "../../db/db.js";
import { models } from "../../db/schema.js";
import { CreateModelRequestDTO } from "./dto/dto_request.js";


export async function createModel(dto: CreateModelRequestDTO):Promise<void> {
    // console.log(dto);
    
    await db.insert(models).values({name: dto.name, brand_id: dto.brand_id});
}   

