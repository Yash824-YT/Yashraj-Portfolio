export default function Education() {
  return (
    <>
      <section className="education-section" id="education">
        <div className="container">
          <div className="text-center mb-5">
            <span className="education-title">Education</span>
            <h2 className="education-heading">Academic Qualification</h2>
            <p className="education-subtitle">
              My academic background has provided a strong foundation in
              Artificial Intelligence, Machine Learning, Software Development,
              and Data Analytics.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="education-card text-center">
                <div className="education-icon">
                  <i className="bi bi-mortarboard-fill" />
                </div>
                <h3>Bachelor of Engineering (B.E.)</h3>
                <h5>Artificial Intelligence &amp; Machine Learning</h5>
                <p>Navsahyadri Group of Institutes</p>
                <p>Savitribai Phule Pune University</p>
                <p>
                  Academic Year : <strong>2022 – 2026</strong>
                </p>
                <p>
                  CGPA : <strong>8.36 / 10</strong>
                </p>
                <span className="education-badge">Graduate - 2026</span>
              </div>
            </div>
          </div>
          <div className="row education-info g-4">
            <div className="col-lg-4 col-md-6">
              <div className="info-box">
                <i className="bi bi-award-fill" />
                <h5>Degree</h5>
                <p>Bachelor of Engineering</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-box">
                <i className="bi bi-cpu-fill" />
                <h5>Specialization</h5>
                <p>Artificial Intelligence &amp; Machine Learning</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info-box">
                <i className="bi bi-graph-up-arrow" />
                <h5>CGPA</h5>
                <p>8.36 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
