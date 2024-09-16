import { serial, text, pgTable, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").default("User").notNull()
});

export const tokens = pgTable("tokens", {
  id: serial("id").primaryKey(),
  token: text("token"),
  user_id: integer("user_id").references(() => users.id)
});

export const email_links = pgTable("email_links", {
  id: serial("id").primaryKey().notNull(),
  link: text('link'),
  isActive: boolean("isActive").default(false).notNull(),
  user_id: integer("user_id").references(() => users.id).notNull()
})