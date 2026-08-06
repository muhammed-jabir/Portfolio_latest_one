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
  I'm an <strong>Odoo Developer</strong> and <strong>Full Stack Web Developer</strong> passionate about creating efficient business solutions and modern, high-performance web applications.
  <br />
  <br />
  I specialize in developing and customizing <strong>Odoo ERP</strong> modules using Python, PostgreSQL, XML, JavaScript, and the Odoo framework to streamline business processes and deliver scalable enterprise solutions.
  <br />
  <br />
  Beyond ERP development, I build responsive, user-focused web applications with <strong>Django, React.js, REST APIs, HTML, CSS, and JavaScript</strong>, combining clean design with robust backend architecture to create seamless digital experiences.
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