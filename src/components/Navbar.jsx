function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setActivePage("home")}
      >
        <span className="logo-icon">Z</span>
        <span>Z-Matcher</span>
      </div>

      <div className="nav-links">

        <button
          className={activePage === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("home")}
        >
          Dashboard
        </button>

        <button
          className={activePage === "visualizer" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("visualizer")}
        >
          Visualizer
        </button>

        <button
          className={activePage === "performance" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("performance")}
        >
          Performance
        </button>

        <button
          className={activePage === "about" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("about")}
        >
          About
        </button>

      </div>

    </nav>
  );
}

export default Navbar;