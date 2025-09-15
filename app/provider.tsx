"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      });
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };
  return <div>{children}</div>;
}
