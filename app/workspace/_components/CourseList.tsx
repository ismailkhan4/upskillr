"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import AddNewCourseDialog from "./AddNewCourseDialog";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const [courseList, setCourseList] = useState([]);

  const { user } = useUser();

  const GetCourseList = useCallback(async () => {
    const result = await axios.get("/api/courses");
    setCourseList(result.data);
  }, []);
  useEffect(() => {
    if (user) {
      GetCourseList();
    } else return;
  }, [user, GetCourseList]);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">Course List</h2>
      {courseList?.length == 0 ? (
        <div className="flex p-7 items-center justify-center flex-col border rounded-xl mt-2 bg-secondary">
          <Image
            src={"/online-education.png"}
            alt="Education"
            width={80}
            height={80}
          />
          <h2 className="my-2 text-xl font-bold">
            Look like you haven&apos;t created any courses yet
          </h2>
          <AddNewCourseDialog>
            <Button>+ Create your first course</Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {courseList?.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
