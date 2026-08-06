import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Get In Touch</span>
        <h2 className="title">Contact</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Build Something Together</h3>

            <p>
              I'm open to software development opportunities, collaboration
              and interesting projects.
            </p>

            <div className="social-links">
              <a href="mailto:yourmail@gmail.com">
                <FaEnvelope /> Email
              </a>

              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>

              <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;