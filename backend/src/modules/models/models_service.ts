import { db } from "../../db/db.js";
import { models } from "../../db/schema.js";
import { CreateModelRequestDTO } from "./dto/dto_request.js";


export async function createModel(dto: any, fileName: string):Promise<void> {
    // console.log(dto);
    
    await db.insert(models).values({name: dto.name, img:fileName, brand_id: dto.brand_id, year: dto.year, mileage: dto.mileage, gearbox: dto.gearbox, fuel: dto.fuel, price: dto.price});
}   

