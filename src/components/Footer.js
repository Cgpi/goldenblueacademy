import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3>Coaching Institute</h3>
          <p>
            Empowering students from 8<sup>th</sup> to 12<sup>th</sup> with expert coaching and German
            language certification.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/german-language">German Language</Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Our Courses</h3>
          <ul>
            <li>
              <Link to="/courses">8<sup>th</sup> – 10<sup>th</sup> Coaching</Link>
            </li>
            <li>
              <Link to="/courses">11<sup>th</sup> – 12<sup>th</sup> Science</Link>
            </li>
            <li>
              <Link to="/courses">11<sup>th</sup> – 12<sup>th</sup> Commerce</Link>
            </li>
            <li>
              <Link to="/courses">CET | JEE | NEET</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT + MAP */}
        <div className="footer-box">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              &nbsp; Renuka Building 687/2 Aniket Society, Bibvewadi, Pune –
              411037
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              &nbsp; 9850030794 | 9011014455
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              &nbsp; goldenblueacademy@gmail.com
            </li>
          </ul>

          <div className="footer-map">
            <iframe
              title="Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.067048612826!2d73.8610279!3d18.4806219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa11906d603%3A0x8452843e8311b1bc!2sGOLDEN%20BLUE%20ACADEMY!5e0!3m2!1sen!2sin!4v1770361127249!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>Designed by CGPI Software Pvt Ltd</div>
        <div>© 2026 Golden Blue Academy. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
