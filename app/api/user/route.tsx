import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    const users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (users?.length == 0) {
      const result = await db.insert(usersTable).values({
        name,
        email,
      });

      return NextResponse.json(result);
    }

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}
