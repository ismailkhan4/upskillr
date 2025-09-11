"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  console.log("user", user);

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  const CreateNewUser = async () => {
    console.log("Creating new user");

    try {
      const result = await axios.post("/api/user", {
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
      });
      console.log("result.data", result);
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  };
  return <div>{children}</div>;
}
