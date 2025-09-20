import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: "1",
    title: "Next.js + AI",
    desc: "Build SaaS using Next.js & AI",
    instructor: "Upskillr",
    length: "3.5h",
  },
  {
    id: "2",
    title: "Prompt Engineering",
    desc: "Master prompt design",
    instructor: "Upskillr",
    length: "1.2h",
  },
  {
    id: "3",
    title: "Drizzle ORM Basics",
    desc: "Type-safe DB modeling",
    instructor: "Upskillr",
    length: "1.7h",
  },
];

export default function ExploreCourses() {
  return (
    <section id="explore" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Explore Courses</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{course.desc}</p>
              <div className="mt-4 text-xs text-gray-500 flex justify-between">
                <span>{course.instructor}</span>
                <span>{course.length}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
