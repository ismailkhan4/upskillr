import { NextResponse } from "next/server";
import { ai } from "../generate-course-layout/route";
import axios from "axios";
import { coursesTable } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";

const PROMPT = `Depends on Chapter name and Topic Generate content for each topic in HTML 

and give response in JSON format. 

Schema:{

chapterName:<>,

{

topic:<>,

content:<>

}

}

: User Input:

`;
export async function POST(request: Request) {
  const { courseJson, courseTitle, courseId } = await request.json();

  const promises = courseJson?.chapters?.map(async (chapter: any) => {
    const config = {
      responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: PROMPT + JSON.stringify(chapter),
          },
        ],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    const rawResponse = response.candidates?.[0]?.content?.parts?.[0]?.text;
    const rawJson = rawResponse?.replace("```json", "").replace("```", "");
    const responseJson = JSON.parse(rawJson || "{}");
    const youtubeData = await GetYoutubeVideo(chapter?.chapterName);
    return {
      youtubeVideo: youtubeData,
      courseData: responseJson,
    };
  });

  const CourseContent: any = await Promise.all(promises);

  const dbResponse = await db
    .update(coursesTable)
    .set({
      courseContent: CourseContent,
    })
    .where(eq(coursesTable?.cid, courseId));

  return NextResponse.json({
    courseName: courseTitle,
    courseContent: CourseContent,
  });
}

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const GetYoutubeVideo = async (topic: string) => {
  const params = {
    part: "snippet",
    q: topic,
    maxResult: 4,
    type: "video",
    key: process.env.YOUTUBE_API_KEY,
  };

  const response = await axios.get(YOUTUBE_BASE_URL, { params });
  const youtubeVideoListResp = response.data.items;
  const youtubeVideoList: any = [];
  youtubeVideoListResp.forEach((item: any) => {
    const data = {
      videoId: item?.id?.videoId,
      title: item?.snippet?.title,
    };
    youtubeVideoList.push(data);
  });
  return youtubeVideoList;
};
