// Imports
import "./Nav.css";

export default function Nav() {
  return (
    // bootstrap responsive navbar. collapses into burger menu on mobile
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark  ">
      <div className="container-fluid px-5">
        {/* Logo */}
        <img id="navLogo" src="./images/logo-text-light.png" alt="email-icon" />

        {/* burger menu button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pr ">
            {/* home nav item */}
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#homeSection">
                Home
              </a>
            </li>

            {/* skills nav item */}
            <li className="nav-item">
              <a className="nav-link" href="#skillsSection">
                Skills
              </a>
            </li>

            {/* portfolio nav item */}
            <li className="nav-item">
              <a className="nav-link" href="#portfolioSection">
                Portfolio
              </a>
            </li>

            {/* history nav item */}
            <li className="nav-item">
              <a className="nav-link" href="#historySection">
                History
              </a>
            </li>

            {/* contact nav item */}
            <li className="nav-item">
              <a className="nav-link" href="#contactSection">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
