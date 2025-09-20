import { Search, PlusCircle, UserCircle2 } from "lucide-react";

const features = [
  {
    icon: <Search className="w-6 h-6 text-indigo-600" />,
    title: "Explore Courses",
    description:
      "Discover curated courses across design, development, AI, and business.",
  },
  {
    icon: <PlusCircle className="w-6 h-6 text-indigo-600" />,
    title: "Create with AI",
    description:
      "Generate complete courses including outlines, video scripts, and quizzes in minutes.",
  },
  {
    icon: <UserCircle2 className="w-6 h-6 text-indigo-600" />,
    title: "Personalized Profiles",
    description:
      "Customize learning paths, track progress, and manage team branding.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
