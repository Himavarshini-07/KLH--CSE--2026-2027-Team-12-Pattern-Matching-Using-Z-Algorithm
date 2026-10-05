function ZArray({ combined, zArray, patternLength }) {
  if (!zArray.length) {
    return null;
  }

  return (
    <section className="z-section">

      <div className="section-title">
        <span>📊</span>
        Z-Array Visualization
      </div>

      <div className="combined-string">

        {combined.split("").map((char, index) => {
          const isMatch =
            zArray[index] === patternLength &&
            index > patternLength;

          return (
            <div
              key={index}
              className={
                isMatch
                  ? "char-box match-box"
                  : "char-box"
              }
            >
              <span>{char === " " ? "·" : char}</span>
              <small>{index}</small>
            </div>
          );
        })}

      </div>

      <div className="z-label">
        Z VALUES
      </div>

      <div className="z-values">

        {zArray.map((value, index) => (
          <div
            key={index}
            className={
              value === patternLength
                ? "z-box z-match"
                : "z-box"
            }
          >
            {value}
          </div>
        ))}

      </div>

      <div className="z-info">
        <div>
          <span className="legend blue"></span>
          Combined String
        </div>

        <div>
          <span className="legend green"></span>
          Pattern Match
        </div>
      </div>

    </section>
  );
}

export default ZArray;