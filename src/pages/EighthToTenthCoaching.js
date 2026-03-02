import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/8to10coaching.css";

export default function EighthToTenthCoaching() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="coaching-page">
      {/* HELMET TAG FOR SEO */}
      <Helmet>
        <title>8th to 12th Board Coaching | Golden Blue Academy</title>
        <meta
          name="description"
          content="Golden Blue Academy provides expert coaching for SSC, CBSE, ICSE, and IGCSE students from 8th to 12th standard with concept clarity, exam-focused preparation, and personal mentoring."
        />
        <meta
          name="keywords"
          content="8th coaching classes, 9th coaching, 10th board coaching, 11th 12th coaching, SSC coaching, CBSE coaching, ICSE coaching, IGCSE coaching"
        />
        <meta name="author" content="Golden Blue Academy" />

        {/* Open Graph (for WhatsApp/Facebook preview) */}
        <meta
          property="og:title"
          content="8th to 12th Board Coaching | Golden Blue Academy"
        />
        <meta
          property="og:description"
          content="Expert board coaching for SSC, CBSE, ICSE, IGCSE students. Book your free demo class today!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="coaching-hero">
        <h1>8th to 12th Board Coaching</h1>
        <p>
          SSC • CBSE • ICSE • IGCSE <br />
          Expert Coaching Under One Roof
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20book%20a%20free%20demo%20class",
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
                .getElementById("boards")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Syllabus
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="coaching-about">
        <h2>About Our Board Coaching</h2>
        <p>
          At <strong>Golden Blue Academy</strong>, we focus on concept clarity,
          exam-oriented preparation, and individual attention to help students
          achieve consistent academic success from 8th to 12th standard.
        </p>

        <ul>
          <li>✔ Concept-based teaching</li>
          <li>✔ Regular tests & revisions</li>
          <li>✔ Experienced subject experts</li>
          <li>✔ Personal mentoring</li>
        </ul>
      </section>

      {/* BOARDS SECTION */}
      <section className="coaching-boards" id="boards">
        <h2>Boards & Curriculum</h2>

        <div className="board-grid">
          <div className="board-card">
            <h3>SSC Board</h3>
            <ul>
              <li>Maths, Science, English</li>
              <li>History, Civics, Geography</li>
              <li>Board pattern preparation</li>
            </ul>
          </div>

          <div className="board-card">
            <h3>CBSE Board</h3>
            <ul>
              <li>NCERT focused learning</li>
              <li>Concept + application</li>
              <li>Competitive foundation</li>
            </ul>
          </div>

          <div className="board-card">
            <h3>ICSE / ISC</h3>
            <ul>
              <li>In-depth subject clarity</li>
              <li>Strong language skills</li>
              <li>Theory + practical balance</li>
            </ul>
          </div>

          <div className="board-card">
            <h3>IGCSE</h3>
            <ul>
              <li>Cambridge curriculum</li>
              <li>Application-based learning</li>
              <li>Past paper practice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="coaching-stats">
        <div>
          <h3>95%</h3>
          <p>Pass Rate</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Top Scorers</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Happy Students</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="coaching-cta">
        <h2>Start Your Academic Success Journey Today</h2>
        <p>Free demo • Expert faculty • Result oriented coaching</p>

        <button
          className="btn-primary"
          onClick={() =>
            window.open(
              "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20book%20a%20free%20demo%20class",
              "_blank",
            )
          }
        >
          Enroll Now
        </button>
      </section>
    </div>
  );
}
