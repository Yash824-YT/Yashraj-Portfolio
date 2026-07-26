export default function Achievement() {
  return (
    <>
      <section className="achievement-section" id="achievement">
        <div className="container">
          <div className="text-center mb-5">
            <span className="achievement-title">Achievements</span>
            <h2 className="achievement-heading">My Achievements</h2>
            <p className="achievement-subtitle">
              Academic achievements, technical activities, and professional
              accomplishments that reflect my learning journey.
            </p>
          </div>
          <div className="row g-4">
            {/* Achievement 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="bi bi-award-fill" />
                </div>
                <h5>AI Projects</h5>
                <p>
                  Developed multiple Artificial Intelligence and Machine
                  Learning academic projects using modern technologies.
                </p>
              </div>
            </div>
            {/* Achievement 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="bi bi-people-fill" />
                </div>
                <h5>AISA Member</h5>
                <p>
                  Active member of the Artificial Intelligence Students'
                  Association (AISA), participating in technical activities.
                </p>
              </div>
            </div>
            {/* Achievement 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="bi bi-heart-fill" />
                </div>
                <h5>NSS Volunteer</h5>
                <p>
                  Contributed as an active volunteer in the National Service
                  Scheme (NSS) through social and community initiatives.
                </p>
              </div>
            </div>
            {/* Achievement 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="achievement-card">
                <div className="achievement-icon">
                  <i className="bi bi-lightbulb-fill" />
                </div>
                <h5>Technical Events</h5>
                <p>
                  Participated in technical workshops, innovation programs, and
                  college-level technical events to enhance practical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
