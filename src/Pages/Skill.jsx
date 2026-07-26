export default function Skill() {
  return (
    <>
      <section className="skills-section" id="skill">
        <div className="container">
          <div className="text-center mb-5">
            <span className="skills-title">My Skills</span>
            <h2 className="skills-heading">Technical Skills</h2>
            <p className="skills-text">
              I enjoy working with modern technologies to build responsive
              websites, full-stack applications, AI models, and data analytics
              projects.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-code-slash" />
                <h5>Frontend</h5>
                <p>
                  HTML5
                  <br />
                  CSS3
                  <br />
                  Bootstrap 5<br />
                  JavaScript
                  <br />
                  React.js
                  <br />
                  Tailwind CSS
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-server" />
                <h5>Backend</h5>
                <p>
                  Node.js
                  <br />
                  Express.js
                  <br />
                  REST API
                  <br />
                  Authentication
                  <br />
                  Postman
                  <br />
                  Hoppscotch
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-database" />
                <h5>Database</h5>
                <p>
                  MongoDB
                  <br />
                  MySQL
                  <br />
                  SQL Queries
                  <br />
                  Database Design
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-cpu" />
                <h5>AI &amp; ML</h5>
                <p>
                  Python
                  <br />
                  Machine Learning
                  <br />
                  TensorFlow
                  <br />
                  Scikit-learn
                  <br />
                  Deep Learning
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-bar-chart-line" />
                <h5>Data Analytics</h5>
                <p>
                  Pandas
                  <br />
                  NumPy
                  <br />
                  Matplotlib
                  <br />
                  Seaborn
                  <br />
                  Power BI
                  <br />
                  Tableau <br />
                  Excel
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-git" />
                <h5>Tools</h5>
                <p>
                  Git
                  <br />
                  GitHub
                  <br />
                  VS Code
                  <br />
                  Jupyter Notebook
                  <br />
                  Google Colab
                  <br />
                  TexStudio
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-lightbulb" />
                <h5>Soft Skills</h5>
                <p>
                  Problem Solving
                  <br />
                  Communication
                  <br />
                  Leadership
                  <br />
                  Teamwork
                  <br />
                  Time Management
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="skill-card">
                <i className="bi bi-person-workspace" />
                <h5>Other Skills</h5>
                <p>
                  Responsive Design
                  <br />
                  API Integration
                  <br />
                  Debugging
                  <br />
                  Version Control
                  <br />
                  Project Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
