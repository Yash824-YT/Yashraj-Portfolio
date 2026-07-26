export default function Resume() {
  return (
    <>
      <section className="resume-section" id="resume">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="resume-title"> My Resume </span>
              <h2 className="resume-heading">Download My Resume</h2>
              <p className="resume-text">
                I am a passionate Full Stack Developer, AI &amp; Machine
                Learning Engineer, and Data Analytics Enthusiast. My resume
                includes my education, technical skills, internship experience,
                projects, certifications, and achievements. Click the button
                below to download my latest resume.
              </p>
              <div className="resume-btn">
                <a
                  href="https://drive.google.com/drive/folders/1vDc3I_md_KqEb7_lQaC2WrJSF2S21jPy?usp=sharing"
                  target="_blank"
                  className="btn btn-warning btn-lg"
                  download=""
                >
                  <i className="bi bi-download" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="resume-card">
                <h4>Resume Highlights</h4>
                <ul className="resume-list">
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Bachelor of Engineering (Artificial Intelligence &amp;
                    Machine Learning)
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Full Stack (MERN) Development
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Python &amp; Machine Learning
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Data Analytics &amp; Power BI
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Industrial Internship Experience
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    AI, ML &amp; Web Development Projects
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Oracle Cloud Generative AI Certified
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill" />
                    Problem Solving &amp; Team Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
