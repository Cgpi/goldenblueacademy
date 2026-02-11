import "../styles/results.css";

const stats = [
  { value: "95%", label: "Board Results", color: "orange" },
  { value: "100+", label: "German Certified Students", color: "yellow" },
  { value: "98%+", label: "Top Scorers", color: "orange" },
  { value: "500+", label: "Happy Students", color: "yellow" },
];

export default function Results() {
  return (
    <section className="results-section">
      <div className="section-heading results-heading">
        <span className="line"></span>
        <h2 className="results-title">Results & Achievements</h2>
        <span className="line"></span>
      </div>

      <div className="results-container">
        {stats.map((item, index) => (
          <div className="result-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
            <span className={`bottom-strip ${item.color}`}></span>
          </div>
        ))}
      </div>
    </section>
  );
}
