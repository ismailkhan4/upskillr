"use client";
import AppHeader from "@/app/workspace/_components/AppHeader";
import ChapterListSidebar from "../_components/ChapterListSidebar";
import ChapterContent from "../_components/ChapterContent";
import { useUser } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { CourseInfo } from "@/types/types";

export default function Course() {
  const { user } = useUser();
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [courseInfo, setCourseInfo] = useState<CourseInfo>();
  const GetEnrolledCourseById = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(`/api/enroll-course?courseId=${courseId}`);
      console.log(result.data);
      setCourseInfo(result.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(`Error: ${error}`);
      setIsLoading(false);
    }
  }, [courseId]);
  useEffect(() => {
    if (user) {
      GetEnrolledCourseById();
    } else return;
  }, [user, GetEnrolledCourseById]);
  return (
    <div>
      <AppHeader hideSidebar={true} />
      {isLoading ? (
        <div>
          <h2>Loading</h2>
        </div>
      ) : courseInfo ? (
        <div className="flex">
          <ChapterListSidebar courseInfo={courseInfo} />
          <ChapterContent
            courseInfo={courseInfo}
            refreshData={() => GetEnrolledCourseById()}
          />
        </div>
      ) : (
        <div>
          <h2>No course data found</h2>
        </div>
      )}
    </div>
  );
}
