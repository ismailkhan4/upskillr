import { Button } from "@/components/ui/button";
import { Course } from "@/types/types";
import axios from "axios";
import { Book, Clock, PlayCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface CourseInfoProps {
  course: Course;
  viewCourse?: boolean;
}

export default function CourseInfo({ course, viewCourse }: CourseInfoProps) {
  const courseLayout = course?.courseJson?.course;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const generateCourseContent = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/generate-course-content", {
        courseJson: courseLayout,
        courseTitle: course?.name,
        courseId: course?.cid,
      });
      setIsLoading(false);
      console.log("course content: ", result.data);
      router.replace("/workspace");
      toast.success("Course Generated successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error(`Error: ${error}`);
    }
  };

  return (
    <div className="md:flex flex gap-5 justify-between p-5 rounded-2xl shadow">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">{courseLayout?.name}</h2>
        <p className="line-clamp-2 text-gray-500">
          {courseLayout?.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Clock className="text-blue-500" />
            <section>
              <h2 className="font-bold">Duration</h2>
              <h2>{2} Hours</h2>
            </section>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <Book className="text-green-500" />
            <section>
              <h2 className="font-bold">Chapters</h2>
              <h2>{2} Hours</h2>
            </section>
          </div>
          <div className="flex gap-5 items-center p-3 rounded-lg shadow">
            <TrendingUp className="text-red-500" />
            <section>
              <h2 className="font-bold">Difficulty Level</h2>
              <h2>{courseLayout?.level}</h2>
            </section>
          </div>
        </div>
        {!viewCourse ? (
          <Button
            className="max-w-lg"
            onClick={generateCourseContent}
            disabled={isLoading}
          >
            Generate Content
          </Button>
        ) : (
          <Link href={`/course/${course?.cid}`}>
            <Button
              className="max-w-lg"
              onClick={generateCourseContent}
              disabled={isLoading}
            >
              <PlayCircle /> Continue Learning
            </Button>
          </Link>
        )}
      </div>
      <Image
        src={course?.bannerImageUrl}
        alt={courseLayout?.name || ""}
        width={400}
        height={400}
        className="w-full mt-5 md:mt-0 h-[240px] object-cover aspect-auto rounded-2xl"
      />
    </div>
  );
}
