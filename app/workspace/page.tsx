import CourseList from "./_components/CourseList";
import EnrollCourseList from "./_components/EnrollCourseList";
import WelcomeBanner from "./_components/WelcomeBanner";

export default function Workspace() {
  return (
    <div>
      <WelcomeBanner />
      <EnrollCourseList />
      <CourseList />
    </div>
  );
}
