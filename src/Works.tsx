import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectsByCategory } from "./projectsData";

function Works() {
  const [selectedCategory, setSelectedCategory] = useState<
    "data" | "web-dev" | "design"
  >("data");
  const navigate = useNavigate();

  const categories = [
    {
      id: "data" as const,
      label: "DATA",
      image: "/images/bear-2.png",
      color: "#C67B6B", // warm red/brown
      pathId: "data-curve",
    },
    {
      id: "web-dev" as const,
      label: "WEB DEV",
      image: "/images/bear-3.png",
      color: "#A8C9A0", // green
      pathId: "webdev-curve",
    },
    {
      id: "design" as const,
      label: "DESIGN",
      image: "/images/bear-1.png",
      color: "#8FA8CE", // blue
      pathId: "design-curve",
    },
  ];

  const categorySummaries = {
    "data": "Building high-performance ML pipelines and NLP models to extract predictive insights from complex datasets.",
    "web-dev": "Developing scalable web solutions that bridge the gap between advanced data processing and intuitive user interaction.",
    "design": "From digital interfaces to physical packaging: designing intentional experiences that elevate brand image and usability."
  };

  // Get projects for the selected category
  const currentProjects = getProjectsByCategory(selectedCategory);

  // ✅ NEW: Navigate to project detail page
  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="works" className="works-section">
      <div className="works-header">
        <h2 className="works-title">WORKS</h2>
        <p className="works-subtitle">click on the different sides of me!</p>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-circle-button ${selectedCategory === category.id ? "active" : ""}`}
            style={{ backgroundColor: category.color }}
            aria-label={`View ${category.label} projects`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {/* White outline border */}
            <div className="circle-outline"></div>

            {/* Bear image clipped to circle */}
            <div className="bear-container">
              <img src={category.image} alt="" className="bear-badge-image" />
            </div>

            {/* Curved text using SVG */}
            <svg className="curved-text-svg" viewBox="0 0 120 120">
              <defs>
                <path
                  id={category.pathId}
                  d="M 20,60 A 40,40 0 0,1 100,60"
                  fill="transparent"
                />
              </defs>
              <text className="curved-label">
                <textPath
                  href={`#${category.pathId}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {category.label}
                </textPath>
              </text>
            </svg>
          </button>
        ))}
      </div>

      {/* Content Area with Category Summary and Project Cards */}
      <div className="works-content-area">
        {/* Category Summary Box */}
        <div className="category-summary-box">
          <h3 className="category-summary-title">
            {selectedCategory === "web-dev" ? "WEB DEVELOPMENT" : selectedCategory.toUpperCase()}
          </h3>
          <p className="category-summary-text">
            {categorySummaries[selectedCategory]}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <button
              key={project.id}
              className="project-card-polaroid"
              aria-label={`View ${project.title}`}
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="polaroid-frame">
                <div className="polaroid-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <p className="project-title">{project.title}</p>

                {/* Project Tags */}
                <div className="polaroid-tags">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="polaroid-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
