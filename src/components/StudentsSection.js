import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/studentssection.css";
import iconImg from "../assets/Icon.png";
import iconImg1 from "../assets/Icon1.png";
import gallery1 from "../assets/gallery.jpg";
import gallery2 from "../assets/gallery1.jpg";
import gallery3 from "../assets/gallery2.jpg";
import gallery4 from "../assets/gallery3.jpg";

const testimonials = [
  {
    text: "It is the best coaching class in Pune...",
    name: "Pranav Dhamal",
    img: iconImg,
  },
  {
    text: "Excellent teachers for students...",
    name: "Rashmi Kumari",
    img: iconImg1,
  },
  {
    text: "Golden Blue is the best and very useful class...",
    name: "Mayura Tushar Gadale",
    img: iconImg,
  },
  {
    text: "Very good teaching. Regular tests...",
    name: "Aditi Patil",
    img: iconImg1,
  },
  {
    text: "Excellent staff and they keep proper track...",
    name: "Prajakta Khabile",
    img: iconImg1,
  },
  {
    text: "Excellent way of teaching with very good personalized attention...",
    name: "Santosh Deshmukh",
    img: iconImg,
  },
];

export default function StudentsSection() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const images = [gallery1, gallery2, gallery3, gallery4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_n6r66hq",
        "template_0qwca87",
        formRef.current,
        "vBxo3DoMprsGO4Ad-",
      )
      .then(
        () => {
          setStatus("Enquiry sent successfully!");
          formRef.current.reset();
        },
        () => setStatus("Failed to send enquiry. Please try again."),
      );
  };

  return (
    <div className="students-wrapper">
      {/* LEFT SECTION */}
      <div className="left-section">
        <div className="section-heading small">
          <span className="line"></span>
          <h3 className="section-title">What Our Students Say</h3>
          <span className="line"></span>
        </div>

        <div className="testimonial-card">
          <img
            src={testimonials[current].img}
            alt="Student"
            className="student-img"
          />
          <div className="testimonial-content">
            <p className="testimonial-text">“{testimonials[current].text}”</p>
            <span className="student-name">{testimonials[current].name}</span>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`testimonial-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

        <div className="section-heading small">
          <span className="line"></span>
          <h3 className="section-title">Our Gallery</h3>
          <span className="line"></span>
        </div>

        <div className="gallery">
          {images.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt="Gallery" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION – EMAILJS FORM */}
      <div className="right-section">
        <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Mobile Number" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <select name="course" required>
            <option value="">Select Course</option>
            <option>8th to 10th Coaching</option>
            <option>11th to 12th Science</option>
            <option>11th to 12th Commerce</option>
            <option>CET/JEE/NEET</option>
          </select>
          <textarea
            name="message"
            placeholder="Student Message"
            rows="3"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && (
            <p style={{ fontSize: "13px", marginTop: "6px" }}>{status}</p>
          )}
        </form>
      </div>

      {/* =========================
          GALLERY MODAL
      ========================== */}
      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={() => setSelectedImg(null)}>
              &times;
            </span>
            <img src={selectedImg} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
}
