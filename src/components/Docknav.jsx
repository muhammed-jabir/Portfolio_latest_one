import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const items = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaLaptopCode />, label: "Projects" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

function DockNav() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="dock-wrapper">
      <motion.div
        className="dock-nav"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`dock-item ${active === item.id ? "active" : ""}`}
          >
            {item.icon}
            <span className="dock-tooltip">{item.label}</span>
          </a>
        ))}

        <span className="dock-divider" />

        <button
          className="dock-item dock-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          <span className="dock-tooltip">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default DockNav;