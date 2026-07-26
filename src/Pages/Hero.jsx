export default function Hero() {
  return (
    <>
      <section className="hero-section rounded-2">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-7">
              <h5 className="text-primary">Hello, I'm</h5>
              <h1 className="hero-title">Yashraj Talekar</h1>
              <h3 className="hero-role">
                AI &amp; ML Engineer | MERN Stack Developer | Data Analyst
              </h3>
              <p className="hero-text">
                I am passionate about developing modern web applications,
                machine learning models, and data analytics dashboards. I enjoy
                solving real-world problems using innovative technologies and
                continuously improving my technical skills.
              </p>
              <div className="mt-4">
                <a
                  href="https://drive.google.com/drive/folders/1vDc3I_md_KqEb7_lQaC2WrJSF2S21jPy"
                  target="_blank"
                  className="btn btn-primary btn-lg btn-custom"
                >
                  <i className="bi bi-download" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-primary btn-lg btn-custom"
                >
                  <i className="bi bi-person-fill" />
                  Contact Me
                </a>
              </div>
              <div className="social-icons mt-5">
                <a
                  href="https://github.com/Yash824-YT"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashraj-talekar-191915346/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="mailto:yashtalekar824@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill" />
                </a>
                <a
                  href="https://www.instagram.com/dharkari_yashraj_talekar?igsh=MTFoMWd5emhscWdvYg=="
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </div>
            {/* Right Side */}
            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <div className="hero-img-wrap d-inline-block position-relative">
                <img
                  src="https://res.cloudinary.com/di3qqikgt/image/upload/v1782148547/alumni/profiles/wo7fciilwoo2ajgksbtp.jpg"
                  className="img-fluid profile-img rounded-5"
                  alt="Yashraj Talekar profile photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
