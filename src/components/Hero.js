import React from "react";
import "../styles/hero.css";
import heroBg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroBg} alt="Students studying" className="hero-bg" />

      {/* Gradient overlay */}
      <div className="hero-overlay"></div>

      {/* Content on image */}
      <div className="hero-content">
        <h1>
          Coaching Excellence <br />
          for 8<sup>th</sup> to 12<sup>th</sup> – All Boards
        </h1>

        <p>Academic Coaching | German Language | Global Certification</p>

        <div className="hero-buttons">
          <button
            className="btn primary"
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
            className="btn secondary"
            onClick={() =>
              document.getElementById("OurCourses")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Courses
          </button>
        </div>
      </div>
    </section>
  );
}
