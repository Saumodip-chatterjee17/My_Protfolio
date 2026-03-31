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
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>Brainware University</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Pursuing my degree while focusing on software development and creative problem solving. Continuously working on improving my development skills and gaining hands-on experience through academic and personal projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Interactive Car Design Platform Developer</h4>
                <h5>Carz Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing an interactive car design platform featuring a pricing simulator and a performance simulator. Exploring different configurations to understand design impacts on price and performance to strengthen my logical problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
