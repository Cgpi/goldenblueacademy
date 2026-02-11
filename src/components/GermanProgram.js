import { useNavigate } from "react-router-dom";
import "../styles/germanprogram.css";
import germanImg from "../assets/German.png";

export default function GermanProgram() {
   const navigate = useNavigate(); 

   
  const handleJoinClick = () => {
    navigate("/german-language"); // route you want to navigate to
  };

  return (
    <section className="german-section">
      <div className="german-card">
        {/* CONTENT */}
        <div className="german-text">
          <h2>German Language Program</h2>

          <ul>
            <li>A1 | A2 | B1 Levels & Certification</li>
            <li>Study in Germany</li>
            <li>Career Opportunities</li>
          </ul>

          <button className="german-btn" onClick={handleJoinClick}>Join German Course</button>
        </div>

        {/* IMAGE */}
        <div className="german-image">
          <img src={germanImg} alt="German Language Program" />
        </div>
      </div>
    </section>
  );
}
