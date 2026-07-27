

export default function About() {
  return (
    <>
      <section className="about-section rounded-3" id="about">
        <div className="container">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-lg-5 text-center mb-5 mb-lg-0 rounded">
              <img
                // src="https://res.cloudinary.com/di3qqikgt/image/upload/v1782148547/alumni/profiles/wo7fciilwoo2ajgksbtp.jpg"
                src="Yashraj_Photo.jpeg"
                className="about-img img-fluid"
                style={{ borderRadius: "50%" }}
                alt="Profile Image"
              />
            </div>
            {/* Content */}
            <div className="col-lg-7">
              <span className="section-title">About Me</span>
              <h2 className="about-heading">
                Passionate Full Stack Developer &amp; AI/ML Enthusiast
              </h2>
              <p className="about-text">
                Hello! I'm <strong>Yashraj Talekar</strong>, a Bachelor of
                Engineering graduate in Artificial Intelligence and Machine
                Learning from Savitribai Phule Pune University. I am passionate
                about developing modern web applications, intelligent AI
                solutions, and data analytics dashboards that solve real-world
                problems. I enjoy working with technologies like HTML, CSS,
                Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB,
                Python, and Machine Learning. My goal is to become a skilled
                Full Stack Developer while continuously learning new
                technologies and building innovative software solutions.
              </p>
              <div className="row about-info">
                <div className="col-md-6 mb-4">
                  <div className="card p-3">
                    <h6>Name</h6>
                    <p>Yashraj Talekar</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card p-3">
                    <h6>Qualification</h6>
                    <p>B.E. Artificial Intelligence &amp; Machine Learning</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card p-3">
                    <h6>Experience</h6>
                    <p>Fresher | Full Stack Developer</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card p-3">
                    <h6>Location</h6>
                    <p>Satara, Maharashtra, India</p>
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
