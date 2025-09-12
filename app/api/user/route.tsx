import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { retryDbOperation } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    // Add retry logic for database operations
    const users = await retryDbOperation(async () => {
      return await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, email));
    });

    if (users?.length == 0) {
      const result = await retryDbOperation(async () => {
        return await db.insert(usersTable).values({
          name,
          email,
        });
      });

      console.log("result", result);
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

// Retry utility function
