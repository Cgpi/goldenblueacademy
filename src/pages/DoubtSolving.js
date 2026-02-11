import { Helmet } from "react-helmet";
import "../styles/doubtsolving.css";

export default function DoubtSolving() {
  return (
    <>
      <Helmet>
        <title>
          Doubt Solving Sessions | Personal Academic Support for 11th & 12th
        </title>

        <meta
          name="description"
          content="Join expert doubt solving sessions for 11th & 12th students. One-to-one and small group support for board exams, NEET, JEE & CET preparation."
        />

        <meta
          name="keywords"
          content="doubt solving classes, concept clearing sessions, NEET doubt solving, JEE doubt solving, 11th 12th support classes, academic mentoring"
        />

        <meta name="author" content="Coaching Academy" />

        <meta
          property="og:title"
          content="Expert Doubt Solving Sessions for Students"
        />
        <meta
          property="og:description"
          content="Clear your concepts with personal attention, small batches, and expert faculty support."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/doubt-solving" />
      </Helmet>

      <div className="doubt-page">
        {/* HERO */}
        <section className="doubt-hero">
          <h1>Doubt Solving Sessions</h1>
          <p>
            Clear Your Concepts • Boost Confidence <br />
            Personal Attention for Every Student
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                window.open(
                  "https://wa.me/9850030794?text=Hello%20I%20want%20to%20join%20doubt%20solving%20sessions",
                  "_blank",
                )
              }
            >
              Book Session
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <section className="doubt-about">
          <h2>Why Doubt Solving Matters</h2>
          <p>
            Many students struggle due to unresolved doubts. Our doubt solving
            sessions ensure complete clarity and strengthen weak areas.
          </p>

          <ul>
            <li>✔ One-to-one & small group sessions</li>
            <li>✔ Subject-wise expert teachers</li>
            <li>✔ Concept clarity guaranteed</li>
            <li>✔ Board & competitive focus</li>
          </ul>
        </section>

        {/* FORMAT */}
        <section className="doubt-format">
          <h2>Session Formats</h2>

          <div className="doubt-grid">
            <div className="doubt-card">Daily Doubt Sessions</div>
            <div className="doubt-card">Weekly Concept Clearing</div>
            <div className="doubt-card">Pre-Exam Doubt Marathon</div>
            <div className="doubt-card">Online & Offline Support</div>
          </div>
        </section>

        {/* CTA */}
        <section className="doubt-cta">
          <h2>No Doubts. Just Confidence.</h2>
          <p>Ask freely • Learn deeply • Perform better</p>
        </section>
      </div>
    </>
  );
}
