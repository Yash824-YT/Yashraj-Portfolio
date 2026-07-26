export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="text-center mb-5">
            <span className="contact-title"> Contact Me </span>
            <h2 className="contact-heading">Let's Work Together</h2>
            <p className="contact-subtitle">
              Feel free to contact me for internships, job opportunities,
              freelance work, or collaboration on exciting projects.
            </p>
          </div>
          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="contact-info">
                <h4>Get In Touch</h4>
                <div className="info-item">
                  <i className="bi bi-person-fill" />
                  <div>
                    <h6>Name</h6>
                    <p>Yashraj Talekar</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope-fill" />
                  <div>
                    <h6>Email</h6>
                    <p>yashtalekar824@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-telephone-fill" />
                  <div>
                    <h6>Phone</h6>
                    <p>+91 8485071819</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="bi bi-geo-alt-fill" />
                  <div>
                    <h6>Location</h6>
                    <p>Satara, Maharashtra, India</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/Yash824-YT" target="_blank">
                    <i className="bi bi-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashraj-talekar-191915346/"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="mailto:yashtalekar824@gmail.com">
                    <i className="bi bi-envelope-fill" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required=""
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required=""
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required=""
                  />
                  <textarea
                    className="form-control"
                    placeholder="Write Your Message..."
                    required=""
                    defaultValue={""}
                  />
                  <button className="btn btn-primary btn-contact">
                    <i className="bi bi-send-fill" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
