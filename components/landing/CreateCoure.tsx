import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateCourse() {
  return (
    <section
      id="create"
      className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12"
    >
      <div>
        <h3 className="text-2xl font-semibold">Create with AI</h3>
        <p className="mt-3 text-gray-600">
          Enter a topic and Upskillr will generate a complete course with
          syllabus, video scripts, and quizzes.
        </p>

        <form className="mt-6 space-y-3">
          <input
            className="w-full p-3 rounded-md border border-gray-200"
            placeholder="e.g., Building with Next.js + AI"
          />
          <div className="flex gap-3">
            <Button>Generate</Button>
            <Button variant="outline">Use Template</Button>
          </div>
        </form>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Draft Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Module 1 — Foundations</li>
            <li>Module 2 — Hands-on Projects</li>
            <li>Module 3 — Final Assessment</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
