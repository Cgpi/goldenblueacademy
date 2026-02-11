import React from "react";
import { Helmet } from "react-helmet";
import "../styles/12thCoaching.css";

export default function TwelfthCoaching() {
  return (
    <div className="twelfth-page">
      {/* SEO */}
      <Helmet>
        <title>
          12th Coaching Classes | HSC, CBSE, ISC | Science & Commerce | Golden
          Blue Academy
        </title>

        <meta
          name="description"
          content="Best 12th coaching classes for HSC, CBSE & ISC boards. Science & Commerce streams with expert faculty, regular tests, and proven board results."
        />

        <meta
          name="keywords"
          content="12th coaching classes, HSC coaching, CBSE 12th coaching, ISC coaching, 12th science coaching, 12th commerce coaching, board exam classes"
        />

        <meta name="author" content="Golden Blue Academy" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="12th Coaching Classes | Science & Commerce | Golden Blue Academy"
        />
        <meta
          property="og:description"
          content="Expert 12th board coaching for HSC, CBSE & ISC students. Book your free demo class today!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="twelfth-hero">
        <h1>12th Coaching – Science & Commerce</h1>
        <p>HSC • CBSE • ISC Board Exam Excellence</p>

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

      {/* ABOUT */}
      <section className="twelfth-about">
        <h2>About Our 12th Coaching Program</h2>
        <p>
          We provide focused and result-oriented coaching for 12th Science and
          Commerce students across all major boards. Our teaching methodology
          ensures concept clarity, exam confidence, and top board performance.
        </p>

        <ul>
          <li>✔ Board-specific preparation</li>
          <li>✔ Regular tests & revisions</li>
          <li>✔ Personal mentoring</li>
          <li>✔ Experienced faculty</li>
        </ul>
      </section>

      {/* BOARDS */}
      <section className="twelfth-boards" id="boards">
        <h2>Boards & Curriculum</h2>

        {/* HSC */}
        <div className="board-card">
          <h2>12th HSC (Maharashtra Board)</h2>

          <div className="stream-grid">
            <div>
              <h3>Science</h3>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Biology</li>
                <li>IT / CS</li>
              </ul>
            </div>

            <div>
              <h3>Commerce</h3>
              <ul>
                <li>Accountancy</li>
                <li>Economics</li>
                <li>Business Studies</li>
                <li>Mathematics</li>
                <li>Statistics</li>
              </ul>
            </div>
          </div>

          <ul className="features">
            <li>HSC syllabus-based teaching</li>
            <li>Weekly tests & analysis</li>
            <li>Board-oriented notes</li>
          </ul>
        </div>

        {/* CBSE */}
        <div className="board-card">
          <h2>12th CBSE (NCERT Based)</h2>

          <div className="stream-grid">
            <div>
              <h3>Science</h3>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Biology</li>
                <li>CS / IP</li>
              </ul>
            </div>

            <div>
              <h3>Commerce</h3>
              <ul>
                <li>Accountancy</li>
                <li>Economics</li>
                <li>Business Studies</li>
                <li>Mathematics</li>
              </ul>
            </div>
          </div>

          <ul className="features">
            <li>100% NCERT focused</li>
            <li>Mock tests & doubt sessions</li>
            <li>Board + entrance prep</li>
          </ul>
        </div>

        {/* ISC */}
        <div className="board-card">
          <h2>12th ISC (ICSE Board)</h2>

          <div className="stream-grid">
            <div>
              <h3>Science</h3>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Biology</li>
                <li>Computer Science</li>
              </ul>
            </div>

            <div>
              <h3>Commerce</h3>
              <ul>
                <li>Accountancy</li>
                <li>Economics</li>
                <li>Business Studies</li>
                <li>Mathematics</li>
              </ul>
            </div>
          </div>

          <ul className="features">
            <li>Concept-based teaching</li>
            <li>Answer-writing skills</li>
            <li>Experienced ISC faculty</li>
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className="twelfth-stats">
        <div>
          <h3>95%</h3>
          <p>Board Results</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>300+</h3>
          <p>12th Toppers</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Successful Students</p>
        </div>
      </section>

      {/* CTA */}
      <section className="twelfth-cta">
        <h2>Score High in Your 12th Board Exams</h2>
        <p>Free demo • Expert faculty • Proven results</p>

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
