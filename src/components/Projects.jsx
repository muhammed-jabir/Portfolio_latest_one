import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaArrowRight, FaBolt } from "react-icons/fa";

const projects = [
  {
    tag: "ERP / HEALTHCARE",
    title: "Hospital Management System",
    shortDescription:
      "Custom Odoo ERP hospital solution with appointment booking, doctor management and reporting.",
    tags: ["Odoo 16", "Python", "PostgreSQL", "XML"],
    fullDescription:
      "A custom Odoo ERP module built for hospital operations — covering patient registration, doctor scheduling, appointment booking and department-wise reporting. Implements role-based access for admins, doctors and receptionists, custom views and workflows on top of Odoo's ORM, and automated email notifications for appointment confirmations.",
    techStack: ["Odoo 16", "Python", "PostgreSQL", "XML", "QWeb"],
    highlights: [
      "Role-based access control across admin, doctor and reception roles",
      "Custom appointment workflow with automated status transitions",
      "Department and doctor-wise reporting dashboards",
      "Email integration for booking confirmations and reminders",
    ],
    github: "https://github.com/muhammed-jabir/hospital_management_odoo",
  },
  {
    tag: "FULL STACK / E-COMMERCE",
    title: "Furniture E-Commerce Platform",
    shortDescription:
      "Full-stack ecommerce application with authentication, cart, orders and online payments.",
    tags: ["Django", "React", "JWT", "Stripe"],
    fullDescription:
      "A full-stack ecommerce platform for a furniture catalog, with a Django REST backend and a React frontend. Handles user authentication with JWT, product browsing and filtering, a persistent cart, order lifecycle management and Stripe-based checkout, with an admin panel for inventory control.",
    techStack: ["Django", "Django REST Framework", "React", "JWT", "Stripe"],
    highlights: [
      "JWT-based authentication with protected routes",
      "Cart and order lifecycle with backend validation",
      "Stripe integration for online payments",
      "Admin panel for product and inventory management",
    ],
    github: "https://github.com/muhammed-jabir/Furniture_Shop",
  },
  {
    tag: "COMPUTER VISION / AR",
    title: "AR Plant Implementation",
    shortDescription:
      "Augmented Reality gardening app for interactive plant visualization.",
    tags: ["React", "Python", "OpenCV", "AR.js"],
    fullDescription:
      "An Augmented Reality gardening application that lets users visualize plants in their own space before placing an order. Combines a React frontend with AR.js for marker-based rendering, and a Python/OpenCV service for image processing and plant recognition.",
    techStack: ["React", "AR.js", "Python", "OpenCV"],
    highlights: [
      "Marker-based AR rendering for real-time plant visualization",
      "Python/OpenCV service for image processing",
      "Interactive 3D placement in the user's physical space",
    ],
    github: "#",
  },
  {
    tag: "FRONTEND / API",
    title: "Weather Dashboard",
    shortDescription:
      "Responsive weather application displaying real-time weather information.",
    tags: ["React", "API", "JavaScript"],
    fullDescription:
      "A responsive weather dashboard that fetches real-time conditions and forecasts from a public weather API, with location search, unit toggling and a clean data visualization of upcoming days.",
    techStack: ["React", "JavaScript", "REST API"],
    highlights: [
      "Live weather data via public API integration",
      "Location search with error handling for invalid queries",
      "Fully responsive layout across breakpoints",
    ],
    github: "#",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id="projects">
      <span className="eyebrow">Selected Work</span>
      <h2 className="title">Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-row"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setActiveProject(project)}
          >
            <span className="project-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="project-tag">{project.tag}</span>

            <h3>{project.title}</h3>

            <p>{project.shortDescription}</p>

            <div className="project-tech-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <span className="view-case">
              View Case Study <FaArrowRight />
            </span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>

              <h3>{activeProject.title}</h3>
              <p className="modal-description">{activeProject.fullDescription}</p>

              <div className="modal-grid">
                <div>
                  <h4 className="modal-section-title">Tech Stack</h4>
                  <div className="tech-pills">
                    {activeProject.techStack.map((tech) => (
                      <span className="tech-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="modal-section-title">Key Highlights</h4>
                  <ul className="highlight-list">
                    {activeProject.highlights.map((point) => (
                      <li key={point}>
                        <FaBolt className="highlight-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
                className="source-btn"
              >
                <FaGithub /> Source Code
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;