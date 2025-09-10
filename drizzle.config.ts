import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./config/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_wa0yvBdsnZ2J@ep-rough-band-ada3ngoc-pooler.c-2.us-east-1.aws.neon.tech/upSkillr?sslmode=require&channel_binding=require",
  },
});
