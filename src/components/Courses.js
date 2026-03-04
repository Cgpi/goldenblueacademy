import "../styles/courses.css";
import bookImage from "../assets/Book.png";
import { Link } from "react-router-dom";

import {
  School,
  BookOpen,
  Library,
  AlarmClock,
  HelpCircle,
  Brain,
} from "lucide-react";

const courseData = [
  {
    title: "8th – 10th Coaching",
    icon: <School />,
    path: "/courses",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "11th – 12th Science",
    icon: <BookOpen />,
    path: "/courses",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "11th – 12th Commerce",
    icon: <Library />,
    path: "/courses",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "CET/JEE/NEET",
    icon: <Brain />,
    path: "/courses",
    mode: "Online & Offline",
    modeKey: "both",
  }
];

export default function Courses() {
  return (
    <section className="courses-section" id="OurCourses">
      <div className="courses-section-heading">
        <span className="line"></span>
        <h2>Our Courses</h2>
        <span className="line"></span>
      </div>

      <div className="courses-grid">
        {courseData.map((course, index) => (
          <Link
            key={index}
            to={course.path}
            className="book-card"
            style={{ backgroundImage: `url(${bookImage})` }}
          >
            <span className={`course-mode-badge ${course.modeKey}`}>
              {course.mode}
            </span>

            <div className="book-content">
              <div className="book-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <span className="read-more">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
