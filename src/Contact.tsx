import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT ME</h2>
        <p className="contact-text">Always happy to connect ! :D</p>
        <div className="contact-links">
          <a href="mailto:peckieyeokie@email.com" className="contact-link">
            <HiOutlineMail /> Email
          </a>
          <a href="https://www.linkedin.com/in/leepeckyeok/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href="https://github.com/peckyeoklee" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub /> GitHub
          </a>
        </div>
        <p className="contact-copyright">© 2026 Peck Yeok. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;

