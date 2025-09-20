import CourseList from "./_components/CourseList";
import EnrollCourseList from "./_components/EnrollCourseList";
import WelcomeBanner from "./_components/WelcomeBanner";

export default function Workspace() {
  return (
    <div>
      <WelcomeBanner />
      <div className="my-5">
        <EnrollCourseList />
      </div>
      <CourseList />
    </div>
  );
}
