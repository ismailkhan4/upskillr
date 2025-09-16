import { db } from "@/config/db";
import { coursesTable, enrollCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { courseId } = await request.json();
  const user = await currentUser();

  const userEmail = user?.primaryEmailAddress?.emailAddress;
  if (!userEmail) return new Response("Unauthorized", { status: 401 });

  const enrollCourses = await db
    .select()
    .from(enrollCourseTable)
    .where(
      and(
        eq(
          enrollCourseTable.userEmail,
          user?.primaryEmailAddress?.emailAddress
        ),
        eq(enrollCourseTable.cid, courseId)
      )
    );

  if (enrollCourses.length === 0) {
    const result = await db
      .insert(enrollCourseTable)
      .values({
        cid: courseId,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      })
      .returning(enrollCourseTable as any);

    return NextResponse.json(result);
  }
  return NextResponse.json({ response: "Already Enrolled" });
}

export async function GET(request: Request) {
  const user = await currentUser();
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId");
  if (courseId) {
    const result = await db
      .select()
      .from(coursesTable)
      .innerJoin(enrollCourseTable, eq(coursesTable.cid, enrollCourseTable.cid))
      .where(
        and(
          eq(
            enrollCourseTable.userEmail,
            user?.primaryEmailAddress?.emailAddress!
          ),
          eq(enrollCourseTable?.cid, courseId)
        )
      );

    return NextResponse.json(result[0]);
  } else {
    const result = await db
      .select()
      .from(coursesTable)
      .innerJoin(enrollCourseTable, eq(coursesTable.cid, enrollCourseTable.cid))
      .where(
        eq(
          enrollCourseTable.userEmail,
          user?.primaryEmailAddress?.emailAddress!
        )
      )
      .orderBy(desc(enrollCourseTable.id));

    return NextResponse.json(result);
  }
}

export async function PUT(request: Request) {
  const { completedChapter, courseId } = await request.json();
  const user = await currentUser();

  const result = await db
    .update(enrollCourseTable)
    .set({
      completedChapters: completedChapter,
    })
    .where(
      and(
        eq(enrollCourseTable.cid, courseId),
        eq(
          enrollCourseTable.userEmail,
          user?.primaryEmailAddress?.emailAddress!
        )
      )
    )
    .returning(enrollCourseTable as any);

  return NextResponse.json(result);
}
