import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ExploreCourses from "@/components/landing/ExploreCourses";
import ProfileSecurity from "@/components/landing/ProfileSecurity";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <ExploreCourses />
        <ProfileSecurity />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
