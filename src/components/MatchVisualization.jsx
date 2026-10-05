function MatchVisualization({
  text,
  pattern,
  occurrences
}) {
  const isMatchPosition = (index) => {
    return occurrences.some(
      start =>
        index >= start &&
        index < start + pattern.length
    );
  };

  return (
    <section className="match-section">

      <div className="section-title">
        <span>🔎</span>
        Pattern Matches
      </div>

      <div className="text-display">

        {text.split("").map((char, index) => (
          <span
            key={index}
            className={
              isMatchPosition(index)
                ? "text-char highlighted"
                : "text-char"
            }
          >
            {char === " " ? "·" : char}
          </span>
        ))}

      </div>

      {occurrences.length > 0 ? (
        <div className="occurrence-list">

          <h4>Pattern found at positions</h4>

          <div className="position-container">

            {occurrences.map((position, index) => (
              <div
                className="position-card"
                key={index}
              >
                <span>Match {index + 1}</span>
                <strong>Index {position}</strong>
              </div>
            ))}

          </div>

        </div>
      ) : (
        <div className="not-found">
          Pattern not found in the text.
        </div>
      )}

    </section>
  );
}

export default MatchVisualization;