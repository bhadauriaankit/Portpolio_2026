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
                <h4>Junior CCM Engineer</h4>
                <h5>DBP Offshore</h5>
              </div>
              <h3>2025–Present</h3>
            </div>
            <p>
              Working as a Quadient Inspire Developer, building and maintaining
              high-volume, data-driven customer communication systems. Focused
              on automation workflows, document composition, and integration
              with enterprise systems to ensure scalable and reliable solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on AI-powered workflows and integrated machine learning
              models for medical image analysis. Focused on improving diagnostic
              accuracy and reducing operational errors using computer vision
              techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projects & Development</h4>
                <h5>Self-Initiated</h5>
              </div>
              <h3>2021–2025</h3>
            </div>
            <p>
              Built multiple projects including an Underwater Image Enhancement
              System using Python and OpenCV, and a full-stack portfolio
              platform using Next.js, Tailwind, Cloudinary, and EmailJS. Focused
              on real-world problem solving, performance optimization, and
              scalable architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
