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

        <p>Academic Coaching | German Language | Certification</p>
      </div>
    </section>
  );
}
