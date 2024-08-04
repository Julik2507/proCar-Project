import { serial, text, pgTable, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").default("User")
});

export const tokens = pgTable("tokens", {
  id: serial("id").primaryKey(),
  token: text("token"),
  user_id: integer("user_id").references(() => users.id)
});