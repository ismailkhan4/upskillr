"use client";

import { SelectedChapterIndexContext } from "@/context/SelectedChapterIndexContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);
  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      });
      setUserDetail(result.data);
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <SelectedChapterIndexContext.Provider
        value={{ selectedChapterIndex, setSelectedChapterIndex }}
      >
        <div>{children}</div>
      </SelectedChapterIndexContext.Provider>
    </UserDetailContext.Provider>
  );
}
