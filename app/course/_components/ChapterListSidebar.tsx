import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import { useContext } from "react";

export default function ChapterListSidebar({ courseInfo }: any) {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = courseInfo?.courses?.courseContent;

  const context = useContext(SelectedChapterIndexContext);

  if (!context) {
    throw new Error(
      "useContext must be used inside SelectedChapterIndexProvider"
    );
  }

  const { setSelectedChapterIndex } = context;
  let completedChapter = enrollCourse?.completedChapter ?? [];

  return (
    <div className="w-80 bg-secondary h-screen p-5 fixed">
      <h2 className="my-3 font-bold text-xl">
        Chapters ({courseContent?.length})
      </h2>
      <Accordion type="single" collapsible>
        {courseContent?.map((chapter: any, index: number) => (
          <AccordionItem
            value={chapter?.courseData?.chapterName}
            key={index}
            onClick={() => setSelectedChapterIndex(index)}
          >
            <AccordionTrigger
              className={`text-lg font-medium ${
                completedChapter?.includes(index)
                  ? "bg-green-100 text-green-800"
                  : "bg-white"
              }`}
            >
              {index + 1}. {chapter?.courseData?.chapterName}
            </AccordionTrigger>
            <AccordionContent asChild>
              <div>
                {chapter?.courseData?.topics?.map(
                  (topic: any, index: number) => (
                    <h2
                      key={index}
                      className={`p-3 my-1 rounded-lg ${
                        completedChapter?.includes(index)
                          ? "bg-green-100 text-green-800"
                          : "bg-white"
                      }`}
                    >
                      {topic?.topic}
                    </h2>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
