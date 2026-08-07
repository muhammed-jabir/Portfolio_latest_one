import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaArrowRight, FaBolt } from "react-icons/fa";

const projects = [
  {
    tag: "ERP / HEALTHCARE",
    title: "Hospital Management System",
    shortDescription:
      "Custom Odoo ERP Hospital Management System with appointment scheduling, patient management, role-based access control, reporting, and workflow automation.",

    tags: ["Odoo 16", "Python", "PostgreSQL", "XML/QWeb"],

    fullDescription:
      "Developed a custom Hospital Management System using Odoo 16 to digitize hospital operations. Built modules for patient registration, doctor management, appointment scheduling, department management, reporting, and automated notifications. Implemented role-based access control, custom business workflows, ORM models, XML/QWeb views, and email automation to improve operational efficiency.",

    techStack: [
      "Odoo 16",
      "Python",
      "PostgreSQL",
      "XML/QWeb",
      "JavaScript",
      "REST API",
    ],

    highlights: [
      "Developed custom Odoo ERP modules using Python and the Odoo ORM",
      "Implemented role-based access control (RBAC) for Admin, Doctor, Department Manager, and Patient",
      "Built appointment scheduling, workflow automation, and email notifications",
      "Created custom XML/QWeb views, reports, dashboards, and business workflows",
      "Integrated REST APIs and optimized PostgreSQL database performance",
    ],

    github: "https://github.com/muhammed-jabir/hospital_management_odoo",
  },

  {
    tag: "FULL STACK / E-COMMERCE",
    title: "Furniture E-Commerce Platform",

    shortDescription:
      "Full-stack e-commerce platform with secure authentication, shopping cart, online payments, and inventory management.",

    tags: ["Django", "React", "DRF", "JWT"],

    fullDescription:
      "Built a scalable full-stack e-commerce application using Django REST Framework and React.js. Features include JWT authentication, product management, shopping cart, order processing, Stripe payment integration, REST APIs, and an admin dashboard for inventory and order management.",

    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "PostgreSQL",
      "JWT",
      "Stripe",
      "REST API",
    ],

    highlights: [
      "Developed secure REST APIs using Django REST Framework",
      "Implemented JWT authentication and protected user routes",
      "Integrated Stripe payment gateway for secure online payments",
      "Built responsive React.js frontend with API integration",
      "Designed database models for products, orders, users, and inventory",
    ],

    github: "https://github.com/muhammed-jabir/Furniture_Shop",
  },

  {
    tag: "COMPUTER VISION / AUGMENTED REALITY",
    title: "AR Plant Implementation",

    shortDescription:
      "Augmented Reality web application for interactive plant visualization using React, AR.js, Python, and OpenCV.",

    tags: ["React", "Python", "OpenCV", "AR.js"],

    fullDescription:
      "Developed an Augmented Reality application that enables users to visualize plants in real-world environments before purchase. Combined React.js, AR.js, Python, and OpenCV to deliver marker-based AR experiences, image processing, and interactive 3D visualization.",

    techStack: [
      "React.js",
      "Python",
      "OpenCV",
      "AR.js",
      "JavaScript",
    ],

    highlights: [
      "Built marker-based Augmented Reality experiences using AR.js",
      "Integrated Python and OpenCV for image processing",
      "Implemented responsive React.js user interface",
      "Created interactive 3D visualization for better user engagement",
    ],

    github: "#",
  },

  {
    tag: "FRONTEND / REST API",
    title: "Weather Dashboard",

    shortDescription:
      "Responsive weather application with real-time forecasts, REST API integration, and location-based search.",

    tags: ["React", "REST API", "JavaScript"],

    fullDescription:
      "Developed a responsive weather dashboard using React.js and REST APIs to display real-time weather information, multi-day forecasts, location search, temperature unit conversion, and dynamic weather updates with an intuitive user interface.",

    techStack: [
      "React.js",
      "JavaScript",
      "REST API",
      "HTML5",
      "CSS3",
    ],

    highlights: [
      "Integrated public REST APIs for live weather information",
      "Implemented location search and dynamic weather updates",
      "Built responsive UI compatible with desktop and mobile devices",
      "Handled API errors, loading states, and user-friendly interactions",
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