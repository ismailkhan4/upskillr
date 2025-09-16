"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseInfo from "../_components/CourseInfo";
import ChapterTopicList from "../_components/ChapterTopicList";

export default function EditCourse({ viewCourse = false }) {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState();

  useEffect(() => {
    if (!courseId) return;
    GetCourseInfo();
  }, [courseId]);

  useEffect(() => {
    GetCourseInfo();
  }, []);

  const GetCourseInfo = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(`/api/courses?courseId=${courseId}`);
      console.log("result.data", result);
      setIsLoading(false);
      setCourse(result.data);
    } catch (error) {
      console.error("Error fetching course info:", error);
    }
  };

  return (
    <div>
      <CourseInfo course={course} viewCourse={viewCourse} />
      <ChapterTopicList course={course} />
    </div>
  );
}
