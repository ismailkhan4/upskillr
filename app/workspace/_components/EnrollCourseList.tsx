"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import EnrollCourseCard from "./EnrolleCourseCard";
import { useUser } from "@clerk/nextjs";
import { CourseInfo } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function EnrollCourseList() {
  const [enrolledCourseList, setEnrolledCourseList] = useState<CourseInfo[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const GetEnrolledCourse = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await axios.get("/api/enroll-course");
      setEnrolledCourseList(result.data || []);
      setIsLoading(false);
    } catch (error) {
      toast.error(`Error: ${error}`);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    if (user) {
      GetEnrolledCourse();
    }
  }, [user, GetEnrolledCourse]);
  return enrolledCourseList.length ? (
    <div className="mt-3">
      <h2 className="font-bold text-xl">Continue Learning your courses</h2>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {[0, 1, 2].map((item, index) => (
            <Skeleton key={index} className="w-md h-[240px] bg-gray-400" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {enrolledCourseList.map((course, index) => (
            <EnrollCourseCard
              course={course?.courses}
              enrollCourse={course?.enrollCourse}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {[0, 1, 2].map((item, index) => (
        <Skeleton key={index} className="w-md h-[240px] bg-gray-400" />
      ))}
    </div>
  );
}
