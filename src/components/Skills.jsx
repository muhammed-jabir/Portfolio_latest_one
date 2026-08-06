import { motion } from "framer-motion";

import { FaPython, FaReact, FaGitAlt, FaHtml5, FaCss3Alt,FaCode } from "react-icons/fa";

import { SiDjango, SiPostgresql, SiOdoo, SiJavascript,SiBootstrap } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Odoo ERP", icon: <SiOdoo /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  {name:"REST API",icon:<FaCode/>},
{ name: "XML / QWeb", icon: <FaCode /> },
 { name: "Bootstrap", icon: <SiBootstrap /> },


];

function Skills() {
  return (
    <section id="skills">
      <span className="eyebrow">Tech Stack</span>
      <h2 className="title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            whileHover={{ scale: 1.06, y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;