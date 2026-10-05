import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "home" && <Home />}

      {activePage === "visualizer" && (
        <div className="page-message">
          <div className="big-icon">📊</div>

          <h1>Z-Algorithm Visualizer</h1>

          <p>
            Enter a text and pattern from the Dashboard
            to visualize the Z-array and pattern matches.
          </p>

          <button onClick={() => setActivePage("home")}>
            Go to Dashboard
          </button>
        </div>
      )}

      {activePage === "performance" && (
        <div className="page-message">
          <div className="big-icon">⚡</div>

          <h1>Performance Comparison</h1>

          <p>
            Compare the Z-Algorithm with the Naïve
            String Matching Algorithm.
          </p>

          <button onClick={() => setActivePage("home")}>
            Start Analysis
          </button>
        </div>
      )}

      {activePage === "about" && (
        <div className="about-page">
          <div className="about-card">
            <div className="about-logo">Z</div>

            <h1>Z-Matcher</h1>

            <p>
              An interactive String Matching Application
              using the Z-Algorithm.
            </p>

            <div className="about-features">
              <div>
                <strong>O(n + m)</strong>
                <span>Z-Algorithm</span>
              </div>

              <div>
                <strong>O(n × m)</strong>
                <span>Naïve Algorithm</span>
              </div>
            </div>

            <h3>Project Features</h3>

            <ul>
              <li>Pattern searching</li>
              <li>Z-array visualization</li>
              <li>Match highlighting</li>
              <li>Naïve algorithm comparison</li>
              <li>Execution time comparison</li>
              <li>TXT file upload</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;