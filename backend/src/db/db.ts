import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema.js';
import pkg from 'pg';
import 'dotenv/config';


const pool = new pkg.Pool({
    connectionString: process.env.DATABASE
});

export const db = drizzle(pool, { schema });