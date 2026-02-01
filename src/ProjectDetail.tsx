import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from './projectsData';

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = slug ? getProjectBySlug(slug) : undefined;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-error">
        <p>Project not found</p>
        <button onClick={() => navigate('/')}>← Back to projects</button>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Top Navigation */}
      <nav className="project-detail-nav">
        <button 
          className="back-to-projects-button"
          onClick={() => navigate('/#works')}
        >
          ← Back to projects
        </button>
      </nav>

      {/* Hero Banner */}
      <div className="project-banner">
        <img 
          src={project.bannerImage} 
          alt={project.title}
          className="project-banner-image"
        />
      </div>

      {/* Project Content */}
      <div className="project-detail-content">
        {/* Title Row */}
        <div className="project-title-row">
          <h1 className="project-detail-title">{project.title}</h1>
          {project.externalLink && (
            <a 
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-external-link"
              aria-label="Visit external website"
            >
              ↗
            </a>
          )}
        </div>

        {/* Metadata Row */}
        <div className="project-metadata">
          <span className="project-year">{project.year}</span>
        </div>

        {/* Tags Row */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Subtitle */}
        <p className="project-subtitle">{project.subtitle}</p>

        {/* Overview Section */}
        <section className="project-section">
          <h2 className="project-section-title">Overview</h2>
          <p className="project-section-text">{project.overview}</p>
        </section>

        {/* Video Embed Section */}
        {project.videoUrl && (
          <section className="project-section">
            <h2 className="project-section-title">Project Video{Array.isArray(project.videoUrl) && project.videoUrl.length > 1 ? 's' : ''}</h2>
            <div className="project-videos-container">
              {(Array.isArray(project.videoUrl) ? project.videoUrl : [project.videoUrl]).map((videoSrc, index) => (
                <div key={index} className="project-video-container">
                  <video 
                    controls 
                    className="project-video"
                    poster={project.bannerImage}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Documentation Images Section */}
        {project.processImages && project.processImages.length > 0 && (
          <section className="project-section">
            <h2 className="project-section-title">Process Documentation</h2>
            <div className="process-images-gallery">
              {project.processImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Process documentation page ${index + 1}`}
                  className="process-image"
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}

        {/* Contributions Section */}
        {project.contributions.length > 0 && (
          <section className="project-section">
            <h2 className="project-section-title">Contributions</h2>
            <ul className="project-bullet-list">
              {project.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Features Section */}
        {project.keyFeatures.length > 0 && (
          <section className="project-section">
            <h2 className="project-section-title">Key Features</h2>
            <ol className="project-numbered-list">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}</strong> {feature.description}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Implementation Section */}
        {project.implementation.length > 0 && (
          <section className="project-section">
            <h2 className="project-section-title">Implementation</h2>
            <ul className="project-bullet-list">
              {project.implementation.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Useful Links Section */}
        {project.links.length > 0 && (
          <section className="project-section">
            <h2 className="project-section-title">Useful Links</h2>
            <ul className="project-links-list">
              {project.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="project-detail-footer">
        <div className="footer-content">
          <p className="footer-copyright">© 2026 Peck Yeok</p>
          <div className="footer-social-links">
            <a href="mailto:your.email@example.com" aria-label="Email" className="footer-icon-link">
              ✉
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-link">
              in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetail;
