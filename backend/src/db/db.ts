import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema.js';

const connect:any = 'postgres://julian:yulian20@176.109.107.106:5432/proCars';
export const db = drizzle(connect, { schema });
