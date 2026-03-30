import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";


  const projects = [
  {
    title: "Ankit Escapes – Travel Portfolio",
    category: "Full-Stack Travel Website",
    tools: "Next.js, Tailwind CSS, Cloudinary, EmailJS",
    image: "/images/travel.png",
    link: "https://ankit-escapes.vercel.app",
  },
  {
    title: "AI-Powered Code Review Assistant",
    category: "AI/ML Application",
    tools: "Python, LangChain, Gemini AI, HuggingFace, Gradio, AST",
    image: "/images/review.png",
    link: "https://huggingface.co/spaces/bhadauria/review",
  },
  {
    title: "Underwater Image Enhancement System",
    category: "Computer Vision Project",
    tools: "Python, OpenCV, PCA, Image Processing",
    image: "/images/underwater.jpg",
    link: "https://github.com/bhadauriaankit/medical-image-segmentation",
  },
  {
    title: "Suicide Detection System",
    category: "NLP & Machine Learning",
    tools: "Python, NLTK, Machine Learning",
    image: "/images/suicide.png",
    link: "https://github.com/bhadauriaankit/Suicide-detection-using-ml",
  },
  {
    title: "Hand Gesture Controlled Robot Car",
    category: "IoT & Robotics",
    tools: "Arduino, Sensors, Python, Wireless Control",
    image: "/images/robot.JPG",
    link: "https://github.com/bhadauriaankit/robot-car",
  },
  {
    title: "Movie Recommender System",
    category: "Recommendation System",
    tools: "Python, Pandas, Scikit-Learn, Flask",
    image: "/images/movie.png",
    link: "https://github.com/bhadauriaankit/movie-recommender-system",
  },
  {
    title: "Pneumonia Detection System",
    category: "Deep Learning / Healthcare AI",
    tools: "Python, TensorFlow, Keras, CNN",
    image: "/images/pneumonia.png",
    link: "https://github.com/bhadauriaankit/medical-image-segmentation",
  },
  
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
