import "../styles/infostrip.css";

export default function InfoStrip() {
  return (
    <section className="info-strip">
      <div className="info-container">

        <div className="info-item">
          <span className="info-icon">🎓</span>
          <p>All Boards Covered</p>
        </div>

        <div className="info-item">
          <span className="info-icon">👨‍🏫</span>
          <p>Expert Faculty</p>
        </div>

        <div className="info-item">
          <span className="info-icon">🇩🇪</span>
          <p>German Certification</p>
        </div>

        <div className="info-item">
          <span className="info-icon">⭐</span>
          <p>Proven Results</p>
        </div>

      </div>
    </section>
  );
}
