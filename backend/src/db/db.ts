import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema.js';
import pkg from 'pg';
import 'dotenv/config';


const pool = new pkg.Pool({
    connectionString: process.env.DATABASE
});

pool.on("connect", () => {
    console.log("gooood");
    
})

pool.on("error", (err) => {
    console.log("err", err);
    
})

export const db = drizzle(pool, { schema });