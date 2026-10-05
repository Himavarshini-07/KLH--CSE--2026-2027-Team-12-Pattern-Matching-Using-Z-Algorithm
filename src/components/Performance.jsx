function Performance({ zResult, naiveResult }) {
  if (!zResult || !naiveResult) {
    return null;
  }

  const zTime = zResult.time.toFixed(4);
  const naiveTime = naiveResult.time.toFixed(4);

  const maxTime = Math.max(
    zResult.time,
    naiveResult.time,
    0.001
  );

  const zWidth = Math.max(
    (zResult.time / maxTime) * 100,
    5
  );

  const naiveWidth = Math.max(
    (naiveResult.time / maxTime) * 100,
    5
  );

  return (
    <section className="performance-section">

      <div className="section-title">
        <span>⚡</span>
        Performance Comparison
      </div>

      <div className="performance-grid">

        <div className="algorithm-card">

          <div className="algorithm-header">

            <span className="algorithm-icon">
              Z
            </span>

            <div>
              <h3>Z-Algorithm</h3>
              <p>Linear Time — O(n + m)</p>
            </div>

          </div>

          <div className="metric">
            <span>Execution Time</span>
            <strong>{zTime} ms</strong>
          </div>

          <div className="metric">
            <span>Comparisons</span>
            <strong>{zResult.comparisons}</strong>
          </div>

          <div className="metric">
            <span>Occurrences</span>
            <strong>{zResult.occurrences.length}</strong>
          </div>

        </div>


        <div className="algorithm-card">

          <div className="algorithm-header">

            <span className="algorithm-icon naive">
              N
            </span>

            <div>
              <h3>Naïve Algorithm</h3>
              <p>Worst Case — O(n × m)</p>
            </div>

          </div>

          <div className="metric">
            <span>Execution Time</span>
            <strong>{naiveTime} ms</strong>
          </div>

          <div className="metric">
            <span>Comparisons</span>
            <strong>{naiveResult.comparisons}</strong>
          </div>

          <div className="metric">
            <span>Occurrences</span>
            <strong>{naiveResult.occurrences.length}</strong>
          </div>

        </div>

      </div>


      <div className="chart">

        <h3>Execution Time</h3>

        <div className="bar-row">

          <span>Z-Algorithm</span>

          <div className="bar-container">

            <div
              className="bar z-bar"
              style={{ width: `${zWidth}%` }}
            >
              {zTime} ms
            </div>

          </div>

        </div>


        <div className="bar-row">

          <span>Naïve</span>

          <div className="bar-container">

            <div
              className="bar naive-bar"
              style={{ width: `${naiveWidth}%` }}
            >
              {naiveTime} ms
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Performance;