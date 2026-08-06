import { useEffect, useState } from "react";
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
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
  },
  {
    id: "about",
    icon: <FaUser />,
    label: "About",
  },
  {
    id: "skills",
    icon: <FaCode />,
    label: "Skills",
  },
  {
    id: "experience",
    icon: <FaBriefcase />,
    label: "Experience",
  },
  {
    id: "projects",
    icon: <FaLaptopCode />,
    label: "Projects",
  },
  {
    id: "contact",
    icon: <FaEnvelope />,
    label: "Contact",
  },
];

function DockNav() {
  const [active, setActive] = useState("home");
  const [lightMode, setLightMode] = useState(false);

  /* =====================================================
     ACTIVE SECTION
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.45;

      let currentSection = "home";

      items.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     THEME
  ===================================================== */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light-theme");
      setLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("light-theme")) {
      html.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
      setLightMode(false);
    } else {
      html.classList.add("light-theme");
      localStorage.setItem("theme", "light");
      setLightMode(true);
    }
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="dock-positioner">
      <motion.div
        className="dock-nav"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        }}
      >

        {/* NAVIGATION ITEMS */}

        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`dock-item ${
              active === item.id ? "active" : ""
            }`}
            aria-label={item.label}
          >
            {item.icon}

            <span className="dock-tooltip">
              {item.label}
            </span>
          </a>
        ))}

        {/* THEME BUTTON */}

        <button
          type="button"
          className="dock-item theme-toggle"
          onClick={toggleTheme}
          aria-label={
            lightMode
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
        >
          {lightMode ? <FaMoon /> : <FaSun />}

          <span className="dock-tooltip">
            {lightMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>

      </motion.div>
    </div>
  );
}

export default DockNav;