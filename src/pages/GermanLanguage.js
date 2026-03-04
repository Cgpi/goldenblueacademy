import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/germanlanguage.css";

export default function GermanLanguage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="german-language-page">
      {/* HELMET META TAGS */}
      <Helmet>
        <title>German Language Program | Golden Blue Academy</title>
        <meta
          name="description"
          content="Learn German with our CEFR-based German Language Program (A1 to C1). Prepare for international certification, study in Germany, Ausbildung, jobs, and PR with expert trainers."
        />
        <meta
          name="keywords"
          content="German Language, Learn German, Goethe Institut, TELC, OSD, CEFR, A1, A2, B1, B2, C1, Certification, Study in Germany, Ausbildung, Jobs, PR"
        />
        <meta name="author" content="Golden Blue Academy" />
      </Helmet>

      {/* HERO */}
      <section className="gl-hero">
        <div className="gl-container gl-hero-content">
          <h1>German Language Program</h1>
          <h2>A1 | A2 | B1 | B2 | C1 (CEFR Based)</h2>
          <p>
            Learn German
            {/* <strong>
              {" "}
              International Certification, Study in Germany, Ausbildung, Jobs,
              and PR
            </strong> */}
            . Suitable for school students, college students, and working
            professionals.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="gl-section light">
        <div className="gl-container">
          <h3 className="gl-section-title">About Our German Language Course</h3>
          <p className="gl-text">
            Our German Language Program follows the
            <strong> Common European Framework of Reference (CEFR)</strong>. The
            course focuses on all four language skills with strong grammar and
            real-life communication practice.
          </p>

          <ul className="gl-check-list">
            <li>Concept-based learning with daily speaking practice</li>
            <li>Small batch size for individual attention</li>
            <li>Certified & experienced German trainers</li>
            <li>Exam-oriented teaching with mock tests</li>
          </ul>
        </div>
      </section>

      {/* LEVELS */}
      <section className="gl-section" id="german-curriculum">
        <div className="gl-container">
          <h3 className="gl-section-title">Course Levels & Syllabus</h3>

          <div className="gl-cards">
            <div className="gl-card">
              <h4>A1 – Beginner</h4>
              <p>Foundation level for absolute beginners</p>
              <ul>
                <li>German alphabets & pronunciation</li>
                <li>Basic grammar</li>
                <li>Self-introduction</li>
                <li>Numbers & directions</li>
              </ul>
            </div>

            <div className="gl-card">
              <h4>A2 – Elementary</h4>
              <p>Basic communication level</p>
              <ul>
                <li>Sentence construction</li>
                <li>Past & future tense</li>
                <li>Travel & work topics</li>
                <li>Listening skills</li>
              </ul>
            </div>

            <div className="gl-card">
              <h4>B1 – Intermediate</h4>
              <p>Required for Germany opportunities</p>
              <ul>
                <li>Advanced grammar</li>
                <li>Discussion skills</li>
                <li>Formal emails</li>
                <li>Exam preparation</li>
              </ul>
            </div>

            <div className="gl-card">
              <h4>B2 / C1 – Advanced</h4>
              <p>Professional & academic German</p>
              <ul>
                <li>Fluent speaking</li>
                <li>Technical vocabulary</li>
                <li>University readiness</li>
                <li>Advanced writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="gl-section blue">
        <div className="gl-container">
          <h3 className="gl-section-title light-text">
            German Language Certification
          </h3>

          <p className="gl-text light-text center">
            We prepare students for globally accepted certifications.
          </p>

          <div className="gl-cert-grid">
            <div className="gl-cert-box">
              <h4>Goethe-Institut</h4>
              <p>Most recognized certification worldwide</p>
            </div>
            <div className="gl-cert-box">
              <h4>TELC</h4>
              <p>Accepted for Ausbildung & jobs</p>
            </div>
            <div className="gl-cert-box">
              <h4>ÖSD</h4>
              <p>Official Austrian certification</p>
            </div>
          </div>

          <ul className="gl-check-list light">
            <li>Study in Germany</li>
            <li>Ausbildung Programs</li>
            <li>Work Visa & PR</li>
            <li>MNC Job Opportunities</li>
          </ul>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="gl-section light">
        <div className="gl-container gl-stats">
          <div>
            <strong>95%</strong>
            <span>Exam Pass Rate</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Certified Students</span>
          </div>
          <div>
            <strong>98%+</strong>
            <span>Top Scores</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Happy Learners</span>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="gl-cta">
        <h3>Start Your German Learning Journey Today</h3>
        <p>Free demo | Expert trainers | Certification support</p>
      </section>
    </div>
  );
}
