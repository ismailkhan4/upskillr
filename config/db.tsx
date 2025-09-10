import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const pg = neon(
  "postgresql://neondb_owner:npg_wa0yvBdsnZ2J@ep-rough-band-ada3ngoc-pooler.c-2.us-east-1.aws.neon.tech/upSkillr?sslmode=require&channel_binding=require"
);
export const db = drizzle({ client: pg });
