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
    <section className="hero">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.span className="hero-tag" variants={item}>
          Available for opportunities
        </motion.span>

        <motion.h1 variants={item}>
          Hi, I'm <span>Muhammed Jabir M T</span>
        </motion.h1>

        <motion.h2 variants={item}>Junior Odoo Developer</motion.h2>

        <motion.p variants={item}>
          I build ERP solutions and modern web applications using Python,
          Odoo, React and Django.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href="/resume.pdf" download>
            <button>
              <FaDownload style={{ marginRight: 8 }} />
              Download Resume
            </button>
          </a>

          <a href="#projects" className="btn-outline">
            View Work <FaArrowRight style={{ marginLeft: 6 }} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;