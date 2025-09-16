"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import EnrollCourseCard from "./EnrolleCourseCard";
import { useUser } from "@clerk/nextjs";

export default function EnrollCourseList() {
  const [enrolledCourseList, setEnrolledCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    user && GetEnrolledCourse();
  }, [user]);
  const GetEnrolledCourse = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get("/api/enroll-course");
      console.log(result.data);
      setEnrolledCourseList(result.data);
      setIsLoading(false);
    } catch (error) {
      toast.error("Server error");
      setIsLoading(false);
    }
  };
  return enrolledCourseList.length ? (
    <div className="mt-3">
      <h2 className="font-bold text-xl">Continue Learning your courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {enrolledCourseList.map((course: any, index) => (
          <EnrollCourseCard
            course={course?.courses}
            enrollCourse={course?.enrollCourse}
            key={index}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h2>Loading</h2>
    </div>
  );
}
