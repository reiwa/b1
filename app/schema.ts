import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const postsTable = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  uuid: text("uuid", { length: 256 }).notNull().unique(),
  title: text("title", { length: 128 }).notNull(),
  text: text("text", { length: 2048 }).notNull(),
})
