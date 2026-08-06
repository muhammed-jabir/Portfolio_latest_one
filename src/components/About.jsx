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
    text: "Junior Odoo Developer",
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
          I'm a Junior Odoo Developer and Full Stack Developer passionate
          about building scalable business applications and modern web
          solutions.
          <br />
          <br />
          Currently working with Odoo ERP, Python, PostgreSQL, XML,
          JavaScript and developing customized business modules.
          <br />
          <br />
          I also have experience building full-stack applications using
          Django, React.js and REST APIs.
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