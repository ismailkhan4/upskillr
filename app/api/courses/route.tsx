import { db } from "@/config/db";
import { coursesTable } from "@/config/schema";
import axios from "axios";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId");

  const GetCourseInfo = async () => {
    const result = await axios.get(`/api/courses?courseId=${courseId}`);
    console.log("result.data", result.data);
  };

  if (!courseId) {
    return NextResponse.json(
      { error: "Course ID is required" },
      { status: 400 }
    );
  }

  const result = await db
    .select()
    .from(coursesTable)
    .where(eq(coursesTable.cid, courseId));
  console.log("result", result);

  return NextResponse.json(result[0]);
}
