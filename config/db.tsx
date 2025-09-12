import "dotenv/config"; // Needed for Bun or non-Next.js runtime
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

const pg = neon(
  process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_wa0yvBdsnZ2J@ep-rough-band-ada3ngoc-pooler.c-2.us-east-1.aws.neon.tech/upSkillr?sslmode=require&channel_binding=require"
);
export const db = drizzle(pg);
