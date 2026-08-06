import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.span className="hero-tag" variants={item}>
          Available for freelance works
        </motion.span>

        <motion.h1 variants={item}>
          Hi, I'm <span>Muhammed Jabir M T</span>
        </motion.h1>

        <motion.h2 variants={item}>Odoo Developer & Web Developer</motion.h2>

        <motion.p variants={item}>
         I design and develop scalable ERP solutions and modern web applications, delivering custom Odoo modules, business process automation, and responsive full-stack web solutions using Python, Odoo, Django, React.js, PostgreSQL, and JavaScript.

        </motion.p>

        <motion.div className="hero-actions" variants={item}>
 <a href="#projects">
  <button>
    Explore My Work
    <FaArrowRight style={{ marginLeft: 8 }} />
  </button>
</a>

<a href="#contact" className="btn-outline">
  Let's Connect
</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;