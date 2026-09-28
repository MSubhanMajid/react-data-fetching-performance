import { Link } from "react-router-dom";

const courses = [
  { id: "react-basics", title: "React Basics" },
  { id: "advanced-hooks", title: "Advanced Hooks" },
  { id: "router-mastery", title: "Router Mastery" },
];

function Courses() {
  return (
    <>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Courses;
export { courses };
