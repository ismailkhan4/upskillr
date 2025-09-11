import "dotenv/config"; // Needed for Bun or non-Next.js runtime
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

const pg = neon(process.env.DATABASE_URL);
export const db = drizzle(pg);
