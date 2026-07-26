export default function Project() {
  return (
    <>
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="text-center mb-5">
            <span className="project-title">My Work</span>
            <h2 className="project-heading">Latest Projects</h2>
            <p className="project-subtitle">
              Here are some of my Full Stack, AI &amp; Machine Learning and Data
              Analytics projects that demonstrate my technical skills and
              practical experience.
            </p>
          </div>
          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card project-card">
                <img
                  src="https://res.cloudinary.com/di3qqikgt/image/upload/v1785047501/Project_DashBorad_q80ov9.png"
                  className="img-fluid"
                />
                <div className="project-body">
                  <h4>AI Alumni Student Portal</h4>
                  <p>
                    A MERN Stack web application that connects students and
                    alumni through job postings, notes sharing, events, resume
                    builder and AI chatbot.
                  </p>
                  <div>
                    <span className="tech-badge">React</span>
                    <span className="tech-badge">Node.js</span>
                    <span className="tech-badge">MongoDB</span>
                    <span className="tech-badge">Express</span>
                  </div>
                  <div className="project-btn">
                    <a
                      href="https://student-alumini-web-portal.vercel.app/"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      {" "}
                      Live Demo{" "}
                    </a>
                    <a
                      href="https://github.com/Yash824-YT/Student-Alumini-Web-Portal"
                      target="_blank"
                      className="btn btn-outline-primary ms-2"
                    >
                      {" "}
                      GitHub{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card project-card">
                <img
                  src="https://res.cloudinary.com/di3qqikgt/image/upload/v1785071693/ChatGPT_Image_Jul_26_2026_06_44_34_PM_mlivdc.png"
                  className="img-fluid"
                />
                <div className="project-body">
                  <h4>Face Recognition Attendance</h4>
                  <p>
                    Smart attendance system using Face Recognition, OpenCV and
                    Python with automatic attendance management and reporting.
                  </p>
                  <div>
                    <span className="tech-badge">Python</span>
                    <span className="tech-badge">OpenCV</span>
                    <span className="tech-badge">AI</span>
                    <span className="tech-badge">ML</span>
                  </div>
                  <div className="project-btn">
                    <a href="#" target="_blank" className="btn btn-primary">
                      {" "}
                      Live Demo{" "}
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="btn btn-outline-primary ms-2"
                    >
                      {" "}
                      GitHub{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card project-card">
                <img
                  src="https://res.cloudinary.com/di3qqikgt/image/upload/v1785047587/IPL_Analytics_Dashborad_jcmh99.png"
                  className="img-fluid w-100"
                />
                <div className="project-body">
                  <h4>Data Analytics Dashboard</h4>
                  <p>
                    Interactive Power BI dashboard for sales and business
                    insights with KPI reports, charts and data visualization.
                  </p>
                  <div>
                    <span className="tech-badge">Power BI</span>
                    <span className="tech-badge">Excel</span>
                    <span className="tech-badge">SQL</span>
                    <span className="tech-badge">Python</span>
                  </div>
                  <div className="project-btn">
                    <a href="#" target="_blank" className="btn btn-primary">
                      {" "}
                      Live Demo{" "}
                    </a>
                    <a
                      href="https://github.com/Yash824-YT/IPL-Analytics-Dashboard"
                      target="_blank"
                      className="btn btn-outline-primary ms-2"
                    >
                      {" "}
                      GitHub{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
