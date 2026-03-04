import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/course.css";

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="courses-page">
      <Helmet>
        <title>
          Golden Blue Academy Pune | 8th-12th Coaching | Science | Commerce |
          NEET | JEE
        </title>
        <meta
          name="description"
          content="Golden Blue Academy Bibwewadi Pune offers SSC, CBSE, ICSE, IGCSE board coaching from 8th to 12th along with Science, Commerce, PCMB, NEET, JEE & CET preparation."
        />
      </Helmet>

      <div className="course-grid">
        {/* CARD 1 */}
        <div className="course-card">
          <section className="course-section">
            <h1>8th to 10th Board Coaching</h1>
            <p> IGCSE | ICSE | CBSE | SSC </p>

            <p>
              At <strong>Golden Blue Academy, Bibwewadi – Pune</strong>, we
              provide expert coaching for classes 8th, 9th & 10th with strong
              focus on concept clarity, board preparation and scoring
              techniques.
            </p>

            <h3>Boards We Cover:</h3>
            <ul>
              <li>
                <strong>SSC (Maharashtra Board)</strong> – Maths, Science,
                English, Social Science, Hindi/Marathi, IT
              </li>
              <li>
                <strong>CBSE (NCERT Based)</strong> – Maths, Science, English,
                Social Science, IT
              </li>
              <li>
                <strong>ICSE</strong> – Maths, Science, English, History,
                Geography, Computer Applications
              </li>
              <li>
                <strong>IGCSE (Cambridge Curriculum)</strong> – Maths, Physics,
                Chemistry, Biology, English, Business Studies
              </li>
            </ul>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>Board-pattern teaching</li>
              <li>Regular tests & revisions</li>
              <li>Personal attention & doubt sessions</li>
              <li>Notes aligned with board textbooks</li>
            </ul>
          </section>
        </div>

        {/* CARD 2 */}
        <div className="course-card">
          <section className="course-section">
            <h1>11th & 12th Science Coaching</h1>
            <p> IGCSG | ISC | CBSE | HSC</p>

            <p>
              We offer result-oriented Science coaching strictly aligned with
              board syllabus and exam pattern for maximum scoring.
            </p>

            <h3>Science Subjects:</h3>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Mathematics</li>
              <li>Biology</li>
              <li>Computer Science / IT</li>
            </ul>

            <h3>Our Approach:</h3>
            <ul>
              <li>Board exam-focused preparation</li>
              <li>Numerical problem-solving practice</li>
              <li>Regular tests & revisions</li>
              <li>Strong conceptual clarity</li>
            </ul>
          </section>
        </div>

        {/* CARD 3 */}
        <div className="course-card">
          <section className="course-section">
            <h1>11th & 12th Commerce Coaching</h1>
            <p> ISC | HSC | CBSE </p>

            <h3>Subjects We Cover:</h3>
            <ul>
              <li>Accountancy</li>
              <li>Economics</li>
              <li>Business Studies</li>
              <li>Mathematics</li>
              <li>Statistics</li>
              <li>English & Information Technology</li>
            </ul>

            <h3>Why Choose Our Commerce Coaching?</h3>
            <ul>
              <li>Experienced & qualified faculty</li>
              <li>Board-wise teaching</li>
              <li>Concept-based + exam-focused learning</li>
              <li>Regular tests & revision batches</li>
              <li>Career guidance for CA, CS, CMA</li>
            </ul>

            <h3>Career Opportunities:</h3>
            <ul>
              <li>Chartered Accountant (CA)</li>
              <li>Company Secretary (CS)</li>
              <li>Cost & Management Accountant (CMA)</li>
              <li>B.Com | BBA | BMS | Banking & Finance</li>
            </ul>
          </section>
        </div>

        {/* CARD 4 */}
        <div className="course-card">
          <section className="course-section">
            <h1>PCMB | NEET | JEE | CET Coaching</h1>

            <h2>Crack NEET, JEE & CET with Expert Coaching</h2>

            <p>
              Integrated coaching for Class 11 & 12 Science students preparing
              for competitive entrance exams along with board exams.
            </p>

            <h3>Courses Offered:</h3>
            <ul>
              <li>
                <strong>PCMB Coaching</strong> – Physics, Chemistry, Maths &
                Biology foundation
              </li>
              <li>
                <strong>NEET Coaching</strong> – NCERT focused + daily MCQs
              </li>
              <li>
                <strong>JEE Coaching</strong> – Advanced problem-solving & mocks
              </li>
              <li>
                <strong>MHT-CET Coaching</strong> – Maharashtra board aligned
                preparation
              </li>
            </ul>

            <h3>Why Students Choose Us:</h3>
            <ul>
              <li>10+ Years Teaching Experience</li>
              <li>Small Batches & Personal Mentoring</li>
              <li>Regular Tests & Performance Reports</li>
              <li>Board + Entrance Integrated Strategy</li>
            </ul>
          </section>
        </div>
      </div>

      {/* CTA */}
      <section className="course-cta">
        <h2>Join Golden Blue Academy – Bibwewadi, Pune</h2>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/919850030794?text=Hello%20I%20want%20to%20enroll%20at%20Golden%20Blue%20Academy",
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
