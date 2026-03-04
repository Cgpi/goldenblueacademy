import React from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "../styles/aboutus.css";

import img1 from "../assets/Achievements1.jpg";
import img2 from "../assets/Achievements2.jpg";
import img3 from "../assets/Achievements3.jpg";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutus-page">
      {/* SEO */}
      <Helmet>
        <title>About Us | Golden Blue Academy | Academic Excellence</title>

        <meta
          name="description"
          content="Learn about Golden Blue Academy – dedicated to academic excellence for SSC, CBSE, ICSE & ISC students. Experienced faculty, concept-based learning, and consistent board results."
        />

        <meta
          name="keywords"
          content="About coaching academy, Golden Blue Academy, SSC coaching, CBSE coaching, ICSE coaching, best coaching classes, academic excellence institute"
        />

        <meta name="author" content="Golden Blue Academy" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="About Golden Blue Academy | Academic Excellence"
        />
        <meta
          property="og:description"
          content="Empowering students with strong fundamentals, expert mentorship, and consistent board success."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-content">
          <h1>About Our Academy</h1>
          <p>
            Empowering students from all Boards to achieve
            <strong> Academic Excellence</strong>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="aboutus-intro">
        <p>
          An academy dedicated to nurturing young minds with strong academic
          foundations disciplined learning habits and the confidence required
          to succeed in school and competitive examinations
        </p>
      </section>

      {/* STORY */}
      <section className="aboutus-story">
        <div className="story-text">
          <h2>Our Philosophy</h2>
          <p>
            We strongly believe that every student has the potential to excel
            when guided correctly Education for us goes beyond marks and
            ranks—it is about developing clarity of concepts confidence in
            problem-solving and a disciplined approach to learning
          </p>
          <p>
            Over the years our academy has focused on building not just
            toppers but responsible confident and motivated learners who are
            prepared for future academic challenges
          </p>
        </div>

        <div className="story-image">
          <img src={img1} alt="Students learning at Golden Blue Academy" />
        </div>
      </section>

      {/* MISSION */}
      <section className="aboutus-mission">
        <div className="mission-image">
          <img src={img2} alt="Classroom environment at academy" />
        </div>

        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a structured supportive and motivating
            learning environment where students feel encouraged to ask
            questions overcome weaknesses and build academic strength
          </p>
          <p>
            Through expert teaching regular assessments and continuous
            mentoring we help students stay focused consistent and confident
            throughout their academic journey
          </p>
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="aboutus-approach">
        <h2>Our Teaching Approach</h2>

        <div className="approach-grid">
          <div className="approach-card">
            <h3>Strong Fundamentals</h3>
            <p>
              Every topic is taught from the basics ensuring students develop
              clear understanding before moving to advanced concepts
            </p>
          </div>

          <div className="approach-card">
            <h3>Regular Evaluation</h3>
            <p>
              Weekly tests practice assignments and performance analysis help
              students track progress and improve continuously
            </p>
          </div>

          <div className="approach-card">
            <h3>Personal Mentorship</h3>
            <p>
              Individual guidance ensures that no student is left behind and
              every doubt is addressed with care
            </p>
          </div>

          <div className="approach-card">
            <h3>Exam Readiness</h3>
            <p>
              Teaching aligned with board patterns competitive exams and
              time-management strategies
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="aboutus-values">
        <h2>What Sets Us Apart</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Concept-Based Learning</h3>
            <p>We focus on deep understanding rather than rote memorization</p>
          </div>

          <div className="value-card">
            <h3>Individual Attention</h3>
            <p>
              Small batch sizes ensure personal focus and better interaction
            </p>
          </div>

          <div className="value-card">
            <h3>Experienced Faculty</h3>
            <p>
              Dedicated teachers with years of academic and exam-prep
              experience
            </p>
          </div>

          <div className="value-card">
            <h3>Positive Learning Culture</h3>
            <p>
              A disciplined yet encouraging environment that builds confidence
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="aboutus-stats">
        <div>
          <h3>10+</h3>
          <p>Years of Academic Excellence</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Successful Students</p>
        </div>
        <div>
          <h3>95%</h3>
          <p>Consistent Board Results</p>
        </div>
        <div>
          <h3>All Boards</h3>
          <p>SSC | CBSE | ICSE | ISC</p>
        </div>
      </section> */}

      {/* FOUNDER MESSAGE */}
      <section className="aboutus-founder">
        <h2>Message from the Director</h2>
        <p>
          “Our goal has always been to create an academy where students feel
          confident supported and motivated Success is not achieved
          overnight it is built through discipline guidance and belief We
          are proud to walk this journey with every student who trusts us”
        </p>
      </section>

      {/* CLOSING */}
      <section className="aboutus-closing">
        <img src={img3} alt="Golden Blue Academy campus environment" />
        <div className="closing-text">
          <h2>Guiding Students Towards Their Academic Dreams</h2>
          <p>
            At our academy teaching goes beyond classrooms We prepare students
            not just for exams but for confidence clarity and lifelong
            success
          </p>
        </div>
      </section>
    </div>
  );
}
