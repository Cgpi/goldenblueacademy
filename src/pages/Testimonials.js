import React, { useState, useRef, useEffect } from "react";
import "../styles/Testimonials.css";

// Images
import review1 from "../assets/testimonials/Testimonials.jpeg";
import review2 from "../assets/testimonials/Testimonials1.jpeg";
import review3 from "../assets/testimonials/Testimonials2.jpeg";
import review4 from "../assets/testimonials/Testimonials3.jpeg";
import review5 from "../assets/testimonials/Testimonials4.jpeg";
import review6 from "../assets/testimonials/Testimonials5.jpeg";

// Videos
import video1 from "../assets/testimonials/Testimonials-video1.mp4";
import video2 from "../assets/testimonials/Testimonials-video2.mp4";
import video3 from "../assets/testimonials/Testimonials-video3.mp4";
import video4 from "../assets/testimonials/Testimonials-video4.mp4";
import video5 from "../assets/testimonials/Testimonials-video5.mp4";
import video6 from "../assets/testimonials/Testimonials-video6.mp4";
import video7 from "../assets/testimonials/Testimonials-video7.mp4";
import video8 from "../assets/testimonials/Testimonials-video8.mp4";

const reviewImages = [review1, review2, review3, review4, review5, review6];
const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    };
  }, [selectedVideo]);

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="ts-page">
      <div className="ts-hero">
        <h1>OUR STUDENTS REVIEW</h1>
      </div>

      <div className="ts-layout">
        {/* LEFT SLIDER */}
        <div className="ts-side">
          <div className="ts-track">
            {[...videos.slice(0, 4), ...videos.slice(0, 4)].map((video, i) => (
              <video
                key={i}
                src={video}
                muted
                playsInline
                preload="metadata"
                className="ts-thumb-video"
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </div>

        {/* CENTER */}
        <div className="ts-center">
          {reviewImages.map((img, i) => (
            <div className="ts-card" key={i}>
              <img src={img} alt="review" />
            </div>
          ))}
        </div>

        {/* RIGHT SLIDER */}
        <div className="ts-side">
          <div className="ts-track ts-reverse">
            {[...videos.slice(4, 8), ...videos.slice(4, 8)].map((video, i) => (
              <video
                key={i}
                src={video}
                muted
                playsInline
                preload="metadata"
                className="ts-thumb-video"
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedVideo && (
        <div className="ts-modal" onClick={closeModal}>
          <div className="ts-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="ts-close" onClick={closeModal}>
              ×
            </button>

            <div className="ts-video-box">
              <video
                ref={videoRef}
                src={selectedVideo}
                className="ts-main-video"
              />

              {!isPlaying && (
                <div className="ts-play" onClick={togglePlay}>
                  ▶
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
