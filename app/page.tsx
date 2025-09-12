"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      Hello {user?.fullName || "User"}
      <Button>
        <Link href={"/workspace"}>Go to Workspace</Link>
      </Button>
      {/* <UserButton /> */}
    </div>
  );
}
