import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaServer,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiOdoo,
  SiJavascript,
  SiBootstrap,
} from "react-icons/si";

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
  { name: "REST API", icon: <FaServer/> },
  { name: "XML / QWeb", icon: <FaCode/> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
];

function Skills() {
  const stageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const cards = cardsRef.current.filter(Boolean);

    const radius = 180;
    const maxScale = 2;
    const duration = 0.35;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const distance = Math.hypot(
          mouseX - cardCenterX,
          mouseY - cardCenterY
        );

        /*
         * 0 = far away
         * 1 = cursor directly over the skill
         */
        const proximity = gsap.utils.clamp(
          0,
          1,
          gsap.utils.mapRange(
            0,
            radius,
            1,
            0,
            distance
          )
        );

        const scale =
          1 + (maxScale - 1) * proximity;

        gsap.to(card, {
          scale,
          duration,
          overwrite: true,
          ease: "power2.out",
        });
      });
    };

    const handleMouseLeave = () => {
      cards.forEach((card) => {
        gsap.to(card, {
          scale: 1,
          duration: duration * 2,
          overwrite: true,
          ease: "power2.out",
        });
      });
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);

      cards.forEach((card) => {
        gsap.killTweensOf(card);
      });
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <span className="eyebrow">
          Tech Stack
        </span>

        <h2>Skills</h2>

       <p>
  Technologies, frameworks, and tools I use to develop scalable web applications, ERP solutions, and responsive user interfaces using Python, Odoo, React, Django, JavaScript, PostgreSQL, REST APIs, and modern web technologies.
</p>
      </div>

      <div
        className="skills-stage"
        ref={stageRef}
      >
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="skill-card"
              style={{
                "--x": `${skillPositions[index].x}%`,
                "--y": `${skillPositions[index].y}%`,
                "--r": `${skillPositions[index].rotate}deg`,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

const skillPositions = [
    { x: 10, y: 18, rotate: -2 },
    { x: 30, y: 12, rotate: 2 },
    { x: 51, y: 18, rotate: -2 },
    { x: 73, y: 12, rotate: 2 },

    { x: 19, y: 46, rotate: 2 },
    { x: 40, y: 40, rotate: -2 },
    { x: 62, y: 47, rotate: 2 },
    { x: 83, y: 40, rotate: -2 },

    { x: 10, y: 75, rotate: -2 },
    { x: 31, y: 81, rotate: 2 },
    { x: 53, y: 75, rotate: -2 },
    { x: 75, y: 81, rotate: 2 },
];

export default Skills;