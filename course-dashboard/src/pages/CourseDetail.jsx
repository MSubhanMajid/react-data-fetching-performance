import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./Courses";

function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <>
        <p>Course Not Found</p>
        <button onClick={() => navigate("/courses")}>Back To Courses</button>
      </>
    );
  }

  return (
    <>
      <h1>{course.title}</h1>
      <p>This is the Detail Page For {course.title}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default CourseDetail;
