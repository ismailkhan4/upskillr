"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Upskillr Logo" width={32} height={32} />
        <span className="font-semibold text-xl">Upskillr</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
        <a href="#learn" className="hover:text-gray-900">
          My Learning
        </a>
        <a href="#explore" className="hover:text-gray-900">
          Explore
        </a>
        <a href="#create" className="hover:text-gray-900">
          Create
        </a>
        <a href="#profile" className="hover:text-gray-900">
          Profile
        </a>
        <a href="#security" className="hover:text-gray-900">
          Security
        </a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link href={"/sign-in"}>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </header>
  );
}
