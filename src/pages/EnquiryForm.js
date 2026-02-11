import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import "../styles/enquiryform.css";

const EnquiryForm = ({ onClose }) => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

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
        () => {
          setStatus("Failed to send enquiry. Please try again.");
        },
      );
  };

  return (
    <div className="gba-enquiry-card">
      {/* HELMET META TAGS */}
      <Helmet>
        <title>Enquiry Form | Golden Blue Academy</title>
        <meta
          name="description"
          content="Get in touch with Golden Blue Academy. Fill the enquiry form for coaching, exam preparation, and German language programs. Book your free demo today."
        />
        <meta
          name="keywords"
          content="Golden Blue Academy, Enquiry Form, Coaching, Exam Preparation, German Language, Free Demo"
        />
        <meta name="author" content="Golden Blue Academy" />
      </Helmet>

      {/* HEADER */}
      <div className="gba-enquiry-header">
        <h2>Enquiry Form</h2>
        <button className="gba-close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <p className="gba-subtitle">Get in touch with Golden Blue Academy</p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="gba-form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="gba-form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            required
          />
        </div>

        <div className="gba-form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="gba-form-group">
          <label>Interested Course</label>
          <select name="course" required>
            <option value="">Select Course</option>
            <option>8th to 10th Coaching</option>
            <option>11th to 12th Science</option>
            <option>11th to 12th Commerce</option>
            <option>CET/JEE/NEET</option>
            <option>German Language</option>
          </select>
        </div>

        <div className="gba-form-group">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Write your message" />
        </div>

        <button type="submit" className="gba-submit-btn">
          Book Free Demo
        </button>

        {status && <p className="gba-status">{status}</p>}
      </form>
    </div>
  );
};

export default EnquiryForm;
