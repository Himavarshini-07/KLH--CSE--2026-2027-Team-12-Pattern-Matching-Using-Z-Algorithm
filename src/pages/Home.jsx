import { useState } from "react";

import {
  zAlgorithm,
  naiveSearch
} from "../algorithms/stringMatching";

import ZArray from "../components/ZArray";
import MatchVisualization from "../components/MatchVisualization";
import Performance from "../components/Performance";

function Home() {

  const [text, setText] = useState(
    "ABABDABACDABABCABAB"
  );

  const [pattern, setPattern] = useState("ABAB");

  const [zResult, setZResult] = useState(null);
  const [naiveResult, setNaiveResult] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleSearch = () => {

    if (!text.trim() || !pattern.trim()) {
      alert("Please enter both text and pattern.");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const z = zAlgorithm(text, pattern);
      const naive = naiveSearch(text, pattern);

      setZResult(z);
      setNaiveResult(naive);

      setLoading(false);

    }, 100);
  };


  const handleClear = () => {
    setText("");
    setPattern("");
    setZResult(null);
    setNaiveResult(null);
  };


  const handleFileUpload = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      setText(e.target.result);
      setZResult(null);
      setNaiveResult(null);
    };

    reader.readAsText(file);
  };


  return (
    <main className="main-container">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            ⚡ LINEAR TIME PATTERN SEARCHING
          </div>

          <h1>
            Z-Algorithm
            <span>String Matcher</span>
          </h1>

          <p>
            An interactive application for
            efficient pattern searching,
            Z-array visualization and
            algorithm performance analysis.
          </p>

        </div>

        <div className="hero-symbol">
          Z
        </div>

      </section>


      {/* INPUT */}

      <section className="input-card">

        <div className="card-heading">

          <div>
            <h2>String Matching</h2>

            <p>
              Enter text and a pattern to
              find all occurrences.
            </p>
          </div>

          <div className="complexity">

            <span>Time Complexity</span>

            <strong>
              O(n + m)
            </strong>

          </div>

        </div>


        <div className="input-grid">

          <div className="input-group">

            <label>TEXT</label>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text..."
            />

            <small>
              {text.length} characters
            </small>

          </div>


          <div className="input-group">

            <label>PATTERN</label>

            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="Enter pattern..."
            />

            <small>
              {pattern.length} characters
            </small>

          </div>

        </div>


        <div className="action-row">

          <label className="upload-button">

            📁 Upload .TXT File

            <input
              type="file"
              accept=".txt"
              hidden
              onChange={handleFileUpload}
            />

          </label>


          <div className="action-buttons">

            <button
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>

            <button
              className="search-button"
              onClick={handleSearch}
            >
              {loading
                ? "Searching..."
                : "🔍 Search Pattern"
              }
            </button>

          </div>

        </div>

      </section>


      {/* STATISTICS */}

      {zResult && (

        <section className="stats-grid">

          <div className="stat-card">

            <span className="stat-icon">
              🔎
            </span>

            <div>
              <small>OCCURRENCES</small>
              <strong>
                {zResult.occurrences.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              📄
            </span>

            <div>
              <small>TEXT LENGTH</small>
              <strong>
                {text.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              ⚡
            </span>

            <div>
              <small>Z COMPARISONS</small>
              <strong>
                {zResult.comparisons}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              🎯
            </span>

            <div>
              <small>STATUS</small>

              <strong>
                {zResult.occurrences.length > 0
                  ? "FOUND"
                  : "NOT FOUND"
                }
              </strong>

            </div>

          </div>

        </section>

      )}


      {/* MATCHES */}

      {zResult && (
        <MatchVisualization
          text={text}
          pattern={pattern}
          occurrences={zResult.occurrences}
        />
      )}


      {/* Z ARRAY */}

      {zResult && (
        <ZArray
          combined={zResult.combined}
          zArray={zResult.zArray}
          patternLength={pattern.length}
        />
      )}


      {/* PERFORMANCE */}

      {zResult && naiveResult && (
        <Performance
          zResult={zResult}
          naiveResult={naiveResult}
        />
      )}


      {/* ALGORITHM STEPS */}

      <section className="info-section">

        <div className="info-card">

          <div className="info-number">
            01
          </div>

          <h3>Combine</h3>

          <p>
            The pattern, separator and text
            are combined into one string.
          </p>

        </div>


        <div className="info-card">

          <div className="info-number">
            02
          </div>

          <h3>Build Z-Array</h3>

          <p>
            Calculate the longest substring
            matching the prefix at every
            position.
          </p>

        </div>


        <div className="info-card">

          <div className="info-number">
            03
          </div>

          <h3>Find Matches</h3>

          <p>
            When Z[i] equals the pattern
            length, an occurrence is found.
          </p>

        </div>


        <div className="info-card">

          <div className="info-number">
            04
          </div>

          <h3>Compare</h3>

          <p>
            Compare the Z-Algorithm with
            traditional naïve searching.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;