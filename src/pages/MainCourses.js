import React from "react";
import { Helmet } from "react-helmet";
import "../styles/maincourses.css";
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
    icon: <School size={58} />,
    path: "/eighth-to-tenth-coaching",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "11th – 12th Science",
    icon: <BookOpen size={58} />,
    path: "/twelfth-coaching",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "11th – 12th Commerce",
    icon: <Library size={58} />,
    path: "/commerce-coaching",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "CEET/JEE/ NEET",
    icon: <Brain size={58} />,
    path: "/pcmb-jee-neet",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "Exam Preparation",
    icon: <AlarmClock size={58} />,
    path: "/exam-preparation",
    mode: "Online & Offline",
    modeKey: "both",
  },
  {
    title: "Doubt Solving Sessions",
    icon: <HelpCircle size={58} />,
    path: "/doubt-solving",
    mode: "Online & Offline",
    modeKey: "both",
  },
];

export default function MainCourses() {
  return (
    <section className="main-courses">
      {/* HELMET META TAGS */}
      <Helmet>
        <title>All Courses | Golden Blue Academy</title>
        <meta
          name="description"
          content="Explore all courses offered by Golden Blue Academy: 8th-10th Coaching, 11th-12th Science & Commerce, JEE/NEET, Exam Preparation, German Language, and Doubt Solving Sessions."
        />
        <meta
          name="keywords"
          content="Golden Blue Academy, Courses, 8th to 10th Coaching, 11th-12th Science, 11th-12th Commerce, JEE, NEET, Exam Preparation, Doubt Solving, German Language"
        />
        <meta name="author" content="Golden Blue Academy" />
      </Helmet>

      <p className="count-text">Showing 1–6 of 6 items.</p>

      <div className="course-grid">
        {courseData.map((course, index) => (
          <Link to={course.path} key={index} className="course-card">
            <div className="course-image">
              <span className="course-icon">{course.icon}</span>
              <span className={`mode-badge ${course.modeKey}`}>
                {course.mode}
              </span>
            </div>

            <div className="course-body">
              <h3>{course.title}</h3>
              <span className="read-btn">Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
