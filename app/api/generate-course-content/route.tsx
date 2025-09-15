import { NextResponse } from "next/server";
import { ai } from "../generate-course-layout/route";

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
    return responseJson;
  });

  const CourseContent = await Promise.all(promises);

  return NextResponse.json({
    courseName: courseTitle,
    CourseContent,
  });
}
