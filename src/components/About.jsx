import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: (
      <>
        BCA Graduate
        <br />
        University of Calicut
      </>
    ),
  },
  {
    icon: <FaBriefcase />,
    title: "Experience",
    text: "Junior Odoo Developer & Full Stack Developer",
  },

  {
    icon: <FaRocket />,
    title: "Focus",
    text: "ERP Development & Web Applications",
  },
];

function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Introduction</span>
        <h2 className="title">About Me</h2>
<p className="about-text">
  I'm a <strong>Python Developer</strong>, <strong>Odoo ERP Developer</strong>, and <strong>Full Stack Web Developer</strong> specializing in building scalable ERP solutions, business applications, and modern web applications that improve efficiency and user experience.
  <br />
  <br />
  My expertise includes developing, customizing, and integrating <strong>Odoo ERP</strong> modules using <strong>Python, PostgreSQL, XML/QWeb, JavaScript, REST APIs, and the Odoo Framework</strong>. I create secure, maintainable, and enterprise-ready solutions that automate workflows and support business growth.
  <br />
  <br />
  I also develop responsive and high-performance web applications using <strong>Django, React.js, JavaScript, HTML5, CSS3, PostgreSQL, Git, and REST APIs</strong>, focusing on clean architecture, intuitive user interfaces, API integration, and scalable backend development.
  <br />
  <br />
  Passionate about continuous learning, I enjoy solving real-world business challenges through modern software development, ERP customization, and full stack web technologies while following industry best practices and writing clean, maintainable code.
</p>


        <div className="info-cards">
          {cards.map((card, index) => (
            <motion.div
              className="card"
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;