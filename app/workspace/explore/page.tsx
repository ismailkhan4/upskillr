"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Search } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Explore() {
  const [courseList, setCourseList] = useState([]);

  const { user } = useUser();

  const GetCourseList = useCallback(async () => {
    const result = await axios.get("/api/courses?courseId=0");
    setCourseList(result.data);
  }, []);
  useEffect(() => {
    if (user) {
      GetCourseList();
    } else return;
  }, [user, GetCourseList]);
  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">Explore More Coures</h2>
      <div className="flex gap-5 max-w-md my-5">
        <Input placeholder="Search" />
        <Button>
          <Search />
          Search
        </Button>
      </div>
      {courseList?.length == 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {[0, 1, 2].map((item, index) => (
            <Skeleton key={index} className="w-md h-[240px] bg-gray-400" />
          ))}
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
