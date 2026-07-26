export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-xl fixed-top bg-primary-subtle w-100">
        <div className="container">
          <a className="navbar-brand text-primary" href="#">
            <span className="text-primary">&lt;</span>
            <span>Yashraj Portfolio</span>
            <span className="text-primary">&gt;</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto align-items-xl-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#skill">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#certificates">
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#achievement">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
