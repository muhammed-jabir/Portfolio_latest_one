import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

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

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const dockRef = useRef(null);
  const itemRefs = useRef([]);

  /* =========================================================
     THEME
  ========================================================= */

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY + window.innerHeight / 2;

      for (const item of items) {
        const el = document.getElementById(item.id);

        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     GSAP DOCK MAGNIFICATION
  ========================================================= */

 useEffect(() => {
  const dock = dockRef.current;

  if (!dock) return;

  // Disable dock magnification on mobile
  if (window.innerWidth <= 768) {
    return;
  }

  const icons = itemRefs.current.filter(Boolean);

  const min = 44;
  const max = 72;
  const bound = min * Math.PI;

  const handleMouseMove = (event) => {
    const dockRect = dock.getBoundingClientRect();

    const pointer = event.clientX - dockRect.left;

    icons.forEach((icon) => {
      const iconCenter =
        icon.offsetLeft + icon.offsetWidth / 2;

      const distance = iconCenter - pointer;

      let x = 0;
      let scale = 1;

      if (-bound < distance && distance < bound) {
        const rad = (distance / min) * 0.5;

        scale =
          1 +
          (max / min - 1) *
            Math.cos(rad);

        x =
          2 *
          (max - min) *
          Math.sin(rad);
      } else {
        x =
          distance > 0
            ? 2 * (max - min)
            : -2 * (max - min);
      }

      gsap.to(icon, {
        duration: 0.25,
        scale,
        x,
        ease: "power3.out",
        overwrite: true,
      });
    });
  };

  const handleMouseLeave = () => {
    gsap.to(icons, {
      duration: 0.3,
      scale: 1,
      x: 0,
      ease: "power3.out",
      overwrite: true,
    });
  };

  dock.addEventListener("mousemove", handleMouseMove);
  dock.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    dock.removeEventListener("mousemove", handleMouseMove);
    dock.removeEventListener("mouseleave", handleMouseLeave);

    gsap.killTweensOf(icons);
  };
}, []);
  /* =========================================================
     THEME TOGGLE
  ========================================================= */

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const handleLinkClick = (e, id) => {
  e.preventDefault();

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="dock-wrapper">
      <motion.div
  ref={dockRef}
  className="dock-nav"
  initial={
    window.innerWidth <= 768
      ? false
      : { y: 100, opacity: 0 }
  }
  animate={
    window.innerWidth <= 768
      ? false
      : { y: 0, opacity: 1 }
  }
  transition={
    window.innerWidth <= 768
      ? undefined
      : {
          duration: 0.5,
          delay: 0.4,
        }
  }
>

        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(a) => handleLinkClick(a,item.id)}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`dock-item ${
              active === item.id
                ? "active"
                : ""
            }`}
          >
            {item.icon}

            <span className="dock-tooltip">
              {item.label}
            </span>
          </a>
        ))}

        <span className="dock-divider" />

        <button
          ref={(el) => {
            itemRefs.current[items.length] = el;
          }}
          className="dock-item dock-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}

          <span className="dock-tooltip">
            {theme === "dark"
              ? "Light mode"
              : "Dark mode"}
          </span>
        </button>

      </motion.div>
    </div>
  );
}

export default DockNav;