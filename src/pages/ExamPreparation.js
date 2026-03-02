import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/examPreparation.css";

export default function ExamPreparation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="prep-page">
      {/* HELMET META TAGS */}
      <Helmet>
        <title>Exam Preparation Program | Golden Blue Academy</title>
        <meta
          name="description"
          content="Join our exam preparation program for board exams, competitive exams, and scholarship tests. Structured preparation, mock tests, and expert guidance for guaranteed results."
        />
        <meta
          name="keywords"
          content="Exam Preparation, Board Exams, Competitive Exams, Scholarship Tests, SSC, CBSE, ICSE, JEE, NEET, NTSE, Olympiads"
        />
        <meta name="author" content="Golden Blue Academy" />
      </Helmet>

      {/* HERO */}
      <section className="prep-hero">
        <h1>Exam Preparation Program</h1>
        <p>
          Board Exams • Competitive Exams • Scholarship Tests <br />
          Structured Preparation for Guaranteed Results
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20enquire%20about%20exam%20preparation",
                "_blank",
              )
            }
          >
            Book Free Demo
          </button>

          <button
            className="btn-outline"
            onClick={() =>
              document
                .getElementById("programs")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Programs
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="prep-about">
        <h2>About Our Exam Preparation</h2>
        <p>
          Our exam preparation program is designed to help students manage
          syllabus, revisions, and tests effectively. We focus on accuracy, time
          management, and exam confidence.
        </p>

        <ul>
          <li>✔ Complete syllabus coverage</li>
          <li>✔ Regular mock tests & analysis</li>
          <li>✔ Time management techniques</li>
          <li>✔ Exam-oriented teaching</li>
        </ul>
      </section>

      {/* PROGRAMS */}
      <section className="prep-programs" id="programs">
        <h2>Exams We Prepare You For</h2>

        <div className="prep-grid">
          <div className="prep-card">
            <h3>Board Exams</h3>
            <p>SSC, CBSE, ICSE, ISC, HSC</p>
          </div>

          <div className="prep-card">
            <h3>Competitive Exams</h3>
            <p>NEET, JEE, CET, Foundation Courses</p>
          </div>

          <div className="prep-card">
            <h3>Scholarship Exams</h3>
            <p>NTSE, Olympiads, State-level exams</p>
          </div>

          <div className="prep-card">
            <h3>Revision Batches</h3>
            <p>Crash courses before exams</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="prep-stats">
        <div>
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>300+</h3>
          <p>Top Scores</p>
        </div>
        <div>
          <h3>1000+</h3>
          <p>Students Trained</p>
        </div>
      </section>

      {/* CTA */}
      <section className="prep-cta">
        <h2>Prepare Smart. Perform Better.</h2>
        <p>Free demo • Expert guidance • Proven strategies</p>
      </section>
    </div>
  );
}
