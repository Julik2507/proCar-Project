import { db } from "../../db/db.js"
import { brands, models } from "../../db/schema.js"
import { eq } from "drizzle-orm";

export async function createBrands(name: string): Promise<void> {
    await db.insert(brands).values({name});
}

export async function getBrand(brand: number): Promise<any> {
    const arrBrand = await db.select().from(models).where(eq(models.brand_id, brand));
    return arrBrand;
}