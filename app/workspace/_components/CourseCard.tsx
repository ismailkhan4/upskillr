import { Button } from "@/components/ui/button";
import { Course } from "@/types/types";
import axios from "axios";
import { Book, LoaderCircle, PlayCircle, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function CourseCard({ course }: { course: Course }) {
  const courseJson = course?.courseJson?.course;
  const [isLoading, setIsLoading] = useState(false);
  const onEnrollCourse = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/enroll-course", {
        courseId: course?.cid,
      });
      if (result.data.response) {
        toast.warning("Already Enrolled!");
        setIsLoading(false);
        return;
      }
      toast.success("Enrolled");
      setIsLoading(false);
    } catch (error) {
      toast.error(`Error: ${error}`);
      setIsLoading(false);
    }
  };
  return (
    <div className="shadow rounded-xl">
      <Image
        src={course?.bannerImageUrl}
        alt={course?.name || ""}
        width={"400"}
        height={300}
        className="w-full aspect-video rounded-t-xl object-cover"
      />
      <div className="p-3 flex flex-col gap-3">
        <h2 className="font-bold text-lg">{courseJson?.name}</h2>
        <p className="line-clamp-2 text-gray-400 text-sm">
          {courseJson?.description}
        </p>
        <div className="flex justify-between items-center">
          <h2 className="flex items-center text-sm gap-2">
            <Book className="text-primary h-5 w-5" /> {courseJson?.noOfChapters}{" "}
            Chapters
          </h2>
          {course?.courseContent?.length ? (
            <Button disabled={isLoading} size={"sm"} onClick={onEnrollCourse}>
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <PlayCircle />
              )}{" "}
              Start Learning
            </Button>
          ) : (
            <Link href={`/workspace/edit-course/${course?.cid}`}>
              <Button size={"sm"} variant={"outline"}>
                <Settings /> Generate Course
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
