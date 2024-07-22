import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
});

export const testiki = pgTable("testiki", {
  name: text("name"),
});