import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import profileImg from "../assets/catnew.jpeg";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sideLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact" , href: "#contact"},
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/muhammed-jabir" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammed-jabir-mt/" },
  { label: "Email", href: "mailto:jabirmtmuhammed@gmail.com" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-text" aria-hidden="true">
        {"ODOO\nDEVELOPER"}
      </div>

      <motion.nav
        className="hero-side-nav"
        aria-label="Section links"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="hero-nav-label">Links / Menu</span>
        {sideLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </motion.nav>

      <motion.nav
        className="hero-connect-nav"
        aria-label="Social links"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="hero-nav-label">Connect / Social</span>
        {connectLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </motion.nav>

      <div className="hero-inner">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-content">
          <motion.span className="hero-tag" variants={item}>
            Available for freelance works
          </motion.span>
<motion.h1 variants={item}>
  Hi, I'm <span>Muhammed Jabir</span>
</motion.h1>

<motion.h2 variants={item}>
  Python Developer | Odoo ERP Developer | Full Stack Web Developer
</motion.h2>

<motion.p variants={item}>
  I build scalable ERP systems and modern web applications using Python,
  Odoo ERP, Django, React.js, PostgreSQL, JavaScript, REST APIs, XML/QWeb,
  HTML, and CSS. I specialize in Odoo customization, business process
  automation, API integration, and responsive full-stack development to
  deliver secure, high-performance software solutions.
</motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#contact" className="btn-outline">
              Let's Connect <FaArrowRight style={ { marginLeft : 6 }} />
             
            </a>

            <a href="#projects" className="btn-outline">
              View Work <FaArrowRight style={{ marginLeft: 6 }} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          aria-hidden="true"
        >
          <div className="hero-visual-grid" />
          <div className="hero-visual-ring" />
          <div className="hero-visual-core">
            <img src={profileImg} alt="Muhammed Jabir M T" className="hero-visual-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;