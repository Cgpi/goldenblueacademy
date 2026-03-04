import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "../styles/pcmbjee.css";

export default function PCMBJeeNeet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          PCMB, NEET, JEE & CET Coaching | Expert Classes for 11th & 12th
        </title>

        <meta
          name="description"
          content="Top PCMB Coaching Academy for NEET, JEE & CET. Expert faculty, small batches, personal mentoring, and proven results for Class 11 & 12 students."
        />

        <meta
          name="keywords"
          content="PCMB coaching, NEET coaching, JEE coaching, CET classes, 11th 12th coaching, NEET classes near me, JEE classes near me"
        />

        <meta name="author" content="PCMB Coaching Academy" />

        <meta
          property="og:title"
          content="PCMB • NEET • JEE Coaching Academy"
        />
        <meta
          property="og:description"
          content="Crack NEET, JEE & CET with expert coaching, limited seats and personal mentoring."
        />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://yourdomain.com/pcmb-jee-neet" />
      </Helmet>

      <div className="pcmb-jee-neet">
        {/* HERO */}
        <section className="pcmb-hero">
          <div className="pcmb-hero-inner">
            <h1>PCMB | CET | NEET | JEE Coaching Academy</h1>
            <h2>Crack NEET, JEE & CET with Expert Coaching</h2>
            <p>
              <strong>
                PCMB Coaching for Class 11<sup>th</sup> & 12<sup>th</sup> | Results-Driven | Limited Seats
              </strong>
            </p>

            <div className="pcmb-hero-cta">
              <button
                className="pcmb-btn"
                onClick={() =>
                  window.open(
                    "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20PCMB%20NEET%20JEE%20Coaching",
                    "_blank",
                  )
                }
              >
                Free Demo Lecture
              </button>

              <button
                className="pcmb-btn outline"
                onClick={() =>
                  document
                    .getElementById("pcmb-courses")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Syllabus
              </button>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="pcmb-trust">
          <div>⭐ 10+ Years of Teaching Experience</div>
          <div>⭐ Proven Results in NEET, JEE & CET</div>
          <div>⭐ Small Batches | Personal Mentoring</div>
          <div>⭐ Board + Competitive Exam Focus</div>
        </section>

        {/* PROBLEM */}
        <section className="pcmb-problem">
          <h2>Feeling Confused or Overwhelmed?</h2>
          <ul>
            <li>Struggling with Physics, Chemistry, Maths, or Biology?</li>
            <li>Confused between NEET vs JEE?</li>
            <li>Worried about board exams + entrance exams together?</li>
          </ul>
          <p className="pcmb-highlight">
            You’re not alone — and you’re in the right place.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="pcmb-solution">
          <h2>One Academy. One Strategy. Guaranteed Clarity.</h2>
          <p>
            We offer <strong>integrated PCMB, CET, NEET & JEE coaching</strong>{" "}
            that helps students score high in board exams while cracking
            entrance tests confidently.
          </p>
        </section>

        {/* COURSES */}
        <section className="pcmb-courses" id="pcmb-courses">
          <h2>Courses Offered</h2>

          <div className="pcmb-course-grid">
            <div className="pcmb-course-card">
              <h3>🧪 PCMB Coaching (11<sup>th</sup> & 12<sup>th</sup>)</h3>
              <p>
                Ideal for students keeping engineering & medical options open.
              </p>
            </div>

            <div className="pcmb-course-card">
              <h3>🧠 NEET Coaching</h3>
              <p>NCERT-focused teaching with daily MCQs & PYQs.</p>
            </div>

            <div className="pcmb-course-card">
              <h3>⚙️ JEE Coaching</h3>
              <p>Advanced problem solving for JEE Main & Advanced.</p>
            </div>

            <div className="pcmb-course-card">
              <h3>🎓 CET Coaching</h3>
              <p>Board-aligned syllabus for MHT-CET.</p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="pcmb-why">
          <h2>Why Students Choose Us</h2>
          <ul>
            <li>Experienced & Subject-Expert Faculty</li>
            <li>Small Batch Sizes & Personal Attention</li>
            <li>Regular Tests & Performance Reports</li>
            <li>Doubt Solving & Revision Sessions</li>
            <li>Parent-Teacher Feedback System</li>
          </ul>
        </section>

        {/* LEAD */}
        <section className="pcmb-lead">
          <h2>Book Your FREE Demo Class Now</h2>

          <button
            type="button"
            className="pcmb-btn"
            onClick={() =>
              window.open(
                "https://wa.me/9850030794?text=Hello%20I%20want%20to%20book%20a%20FREE%20demo%20class%20for%20PCMB%20NEET%20JEE",
                "_blank",
              )
            }
          >
            Book Free Demo
          </button>
        </section>

        {/* FINAL CTA */}
        <section className="pcmb-final">
          <h2>🚀 Start Your Success Journey Today</h2>
          <button
            className="pcmb-btn"
            onClick={() => (window.location.href = "tel:+919850030794")}
          >
            Call Now
          </button>
        </section>
      </div>
    </>
  );
}
