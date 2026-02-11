import React from "react";
import { Helmet } from "react-helmet";
import "../styles/commercecoaching.css";

export default function CommerceCoaching() {
  return (
    <div className="commerce-page">
      {/* SEO */}
      <Helmet>
        <title>
          11th & 12th Commerce Coaching | HSC, CBSE, ISC | Golden Blue Academy
        </title>

        <meta
          name="description"
          content="Best 11th & 12th Commerce coaching classes for HSC, CBSE & ISC boards. Expert teaching in Accountancy, Economics, Business Studies, Mathematics & Statistics with career guidance for CA, CS & CMA."
        />

        <meta
          name="keywords"
          content="11th commerce coaching, 12th commerce classes, HSC commerce coaching, CBSE commerce coaching, Accountancy classes, Economics coaching, CA foundation coaching"
        />

        <meta name="author" content="Golden Blue Academy" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="11th & 12th Commerce Coaching | Golden Blue Academy"
        />
        <meta
          property="og:description"
          content="Expert Commerce coaching for 11th & 12th students. Book your free demo class today!"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="commerce-hero">
        <h1>11th & 12th Commerce Coaching</h1>
        <p>HSC • CBSE • ISC Boards</p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() =>
              window.open(
                "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Commerce%20Coaching",
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
                .getElementById("commerce-subjects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View Subjects
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="commerce-about">
        <h2>About Our Commerce Program</h2>
        <p>
          Our commerce coaching is designed to build strong fundamentals,
          improve exam performance, and guide students towards professional
          careers like CA, CS, CMA, and management studies.
        </p>

        <ul>
          <li>✔ Board-oriented teaching</li>
          <li>✔ Concept clarity + exam strategy</li>
          <li>✔ Personal mentoring & doubt solving</li>
          <li>✔ Regular tests & revisions</li>
        </ul>
      </section>

      {/* SUBJECTS */}
      <section className="commerce-subjects" id="commerce-subjects">
        <h2>Subjects We Cover</h2>

        <div className="subject-grid">
          <div className="subject-card">
            <h3>11th Commerce</h3>
            <ul>
              <li>Accountancy</li>
              <li>Economics</li>
              <li>Business Studies</li>
              <li>Mathematics</li>
              <li>Statistics</li>
              <li>IT & English</li>
            </ul>
          </div>

          <div className="subject-card">
            <h3>12th Commerce</h3>
            <ul>
              <li>Advanced Accountancy</li>
              <li>Economics</li>
              <li>Business Studies</li>
              <li>Mathematics</li>
              <li>Statistics</li>
              <li>IT & English</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="commerce-careers">
        <h2>Career Opportunities After Commerce</h2>

        <div className="career-grid">
          <div className="career-card">Chartered Accountant (CA)</div>
          <div className="career-card">Company Secretary (CS)</div>
          <div className="career-card">Cost & Management Accountant (CMA)</div>
          <div className="career-card">B.Com / BBA / BMS</div>
          <div className="career-card">Banking & Finance</div>
          <div className="career-card">Management Studies</div>
        </div>
      </section>

      {/* STATS */}
      <section className="commerce-stats">
        <div>
          <h3>95%</h3>
          <p>Board Results</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Commerce Students</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Top College Admissions</p>
        </div>
      </section>

      {/* CTA */}
      <section className="commerce-cta">
        <h2>Build a Strong Commerce Foundation</h2>
        <p>Free demo • Expert faculty • Career guidance</p>

        <button
          className="btn-primary"
          onClick={() =>
            window.open(
              "https://wa.me/9850030794?text=Hello%20I%20would%20like%20to%20book%20a%20free%20demo%20for%20Commerce%20Coaching",
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
