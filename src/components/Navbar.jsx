
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();

        setOpen(false);

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            {/* LOGO */}
            <h2>Jabir.dev</h2>

            {/* DESKTOP NAVIGATION */}
            <div className="desktop-nav">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
                className="menu-trigger"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label="Toggle menu"
            >
                <span className="menu-trigger-label">
                    Menu
                </span>

                {open ? <FaTimes /> : <FaBars />}
            </button>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-dropdown"
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) =>
                                    handleLinkClick(e, link.href)
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;