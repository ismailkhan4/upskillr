"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourseInfo from "../_components/CourseInfo";
import ChapterTopicList from "../_components/ChapterTopicList";

export default function EditCourse() {
  const { courseId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState();

  useEffect(() => {
    GetCourseInfo();
  }, []);

  const GetCourseInfo = async () => {
    setIsLoading(true);
    const result = await axios.get(`/api/courses?courseId=${courseId}`);
    console.log("result.data", result.data);
    setIsLoading(false);
    setCourse(result.data);
  };

  return (
    <div>
      <CourseInfo course={course} />
      <ChapterTopicList course={course} />
    </div>
  );
}
