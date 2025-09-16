import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import Youtube from "react-youtube";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2Icon, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";

export default function ChapterContent({ courseInfo, refreshData }: any) {
  const { courseId } = useParams();
  const { course, enrollCourse } = courseInfo ?? "";
  const courseContent = courseInfo?.courses?.courseContent;

  const context = useContext(SelectedChapterIndexContext);

  if (!context) {
    throw new Error(
      "useContext must be used inside SelectedChapterIndexProvider"
    );
  }

  const { selectedChapterIndex, setSelectedChapterIndex } = context;
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;

  const [isLoading, setIsLoading] = useState(false);

  let completedChapter = enrollCourse?.completedChapter ?? [];

  const markChapterCompleted = async () => {
    setIsLoading(true);
    completedChapter.push(selectedChapterIndex);
    const result = await axios.put("/api/enroll-course", {
      courseId: courseId,
      completedChapter,
    });
    console.log(result);
    refreshData();
    setIsLoading(false);
    toast.success("Chapter Marked Completed!");
  };

  const markChapterIncompleted = async () => {
    setIsLoading(true);
    const completedChap = completedChapter.filter(
      (item: any) => item != selectedChapterIndex
    );
    const result = await axios.put("/api/enroll-course", {
      courseId: courseId,
      completedChapter: completedChap,
    });
    console.log(result);
    refreshData();
    setIsLoading(false);
    toast.success("Chapter Marked Incompleted!");
  };

  return (
    <div className="p-10 ml-80 mt-10">
      <div className="flex justify-between item-center">
        <h2 className="font-bold text-2xl">
          {selectedChapterIndex + 1}.{" "}
          {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}
        </h2>
        {!completedChapter.includes(selectedChapterIndex) ? (
          <Button onClick={() => markChapterCompleted()}>
            {isLoading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <CheckCircle />
            )}{" "}
            Mark as completed
          </Button>
        ) : (
          <Button variant={"outline"} onClick={markChapterIncompleted}>
            {isLoading ? <Loader2Icon className="animate-spin" /> : <X />} Mark
            Incomplete
          </Button>
        )}
      </div>
      <h2 className="my-2 font-bold text-lg">Related Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {videoData?.map(
          (video: any, index: number) =>
            index < 3 && (
              <div key={index}>
                <Youtube
                  videoId={video?.videoId}
                  opts={{
                    height: "250",
                    width: "400",
                  }}
                />
              </div>
            )
        )}
      </div>
      <div className="mt-10 p-5 bg-secondary rounded-2xl">
        {topics?.map((topic: any, index: number) => (
          <div>
            <h2 className="font-bold text-2xl text-primary">
              {index + 1}. {topic?.topic}
            </h2>
            {/* <p>{topic?.content}</p> */}
            <div
              dangerouslySetInnerHTML={{ __html: topic?.content }}
              style={{ lineHeight: "2.5" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
