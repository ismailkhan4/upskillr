"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import CourseInfo from "../_components/CourseInfo";
import ChapterTopicList from "../_components/ChapterTopicList";
import { Course } from "@/types/types";

export default function EditCourse({ viewCourse = false }) {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState<Course | null>();

  const GetCourseInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(`/api/courses?courseId=${courseId}`);
      setIsLoading(false);
      setCourse(result.data);
    } catch (error) {
      console.error("Error fetching course info:", error);
    }
  }, [courseId]);
  useEffect(() => {
    if (!courseId) return;
    GetCourseInfo();
  }, [courseId, GetCourseInfo]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : course ? (
        <>
          <CourseInfo course={course} viewCourse={viewCourse} />
          <ChapterTopicList course={course} />
        </>
      ) : (
        <div>No course data found</div>
      )}
    </div>
  );
}
