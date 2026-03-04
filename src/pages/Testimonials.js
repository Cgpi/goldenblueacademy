import React from "react";
import "../styles/Testimonials.css";

// Import Images
import review1 from "../assets/testimonials/Testimonials.jpeg";
import review2 from "../assets/testimonials/Testimonials1.jpeg";
import review3 from "../assets/testimonials/Testimonials2.jpeg";
import review4 from "../assets/testimonials/Testimonials3.jpeg";
import review5 from "../assets/testimonials/Testimonials4.jpeg";
import review6 from "../assets/testimonials/Testimonials5.jpeg";

// Import Videos
import video1 from "../assets/testimonials/Testimonials-video8.mp4";
import video2 from "../assets/testimonials/Testimonials-video1.mp4";
import video3 from "../assets/testimonials/Testimonials-video2.mp4";
import video4 from "../assets/testimonials/Testimonials-video3.mp4";
import video5 from "../assets/testimonials/Testimonials-video4.mp4";
import video6 from "../assets/testimonials/Testimonials-video5.mp4";
import video7 from "../assets/testimonials/Testimonials-video6.mp4";
import video8 from "../assets/testimonials/Testimonials-video7.mp4";

const reviewImages = [review1, review2, review3, review4, review5, review6];
const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

function Testimonials() {
  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>OUR STUDENTS REVIEW</h1>
        <p>Golden Blue Academy – Bibwewadi, Pune 411043</p>
      </div>

      {/* Review Images Section */}
      <div className="section">
        <h2>Google Reviews</h2>

        <div className="review-grid">
          {reviewImages.map((img, index) => (
            <div className="review-card" key={index}>
              <img src={img} alt={`review-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="section">
        <h2>Student Bite Videos</h2>

        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={index}>
              <video controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
