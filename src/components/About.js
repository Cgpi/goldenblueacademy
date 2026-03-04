import "../styles/about.css";
import img from "../assets/Achievements4.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text">
          <div className="about-heading">
            <span className="line"></span>
            <h2>About Our Academy</h2>
            <span className="line"></span>
          </div>

          <h4>Building Bright Futures One Student at a Time</h4>

          <p className="about-description">
            Our academy is built on a strong foundation of academic excellence
            discipline and personal mentorship For years we have been guiding
            students from school to competitive exams with a focus on clarity
            confidence and consistent performance
          </p>

          <ul className="about-points">
            <li>✔ Concept-Based & Exam-Oriented Teaching</li>
            <li>✔ Experienced and Passionate Faculty</li>
            <li>✔ Small Batch Sizes for Individual Focus</li>
            <li>✔ Regular Tests</li>
            <li>✔ Online & Offline Learning Support</li>
          </ul>

          <p className="about-highlight">
            We believe that success is not achieved by shortcuts but by strong
            fundamentals smart strategy and continuous guidance
          </p>

          <button className="about-btn" onClick={() => navigate("/about-us")}>
            Know More →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img src={img} alt="Students learning" />
        </div>
      </div>
    </section>
  );
}
