import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Software Developer</h4>
                <h5>Self-driven Projects & Academic Experience</h5>
              </div>
              <h3>2023 - NOW</h3>
            </div>
            <p>
              Built AI-based and full-stack applications using Python, Java, and web technologies.
              Worked with APIs like Gemini API for real-time intelligent systems.
              Developed practical solutions including a voice assistant and a travel recommendation system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
