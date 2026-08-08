
import { FaArrowUp } from "react-icons/fa";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">

            <div className="footer-content">

                <h3>Jabir.dev</h3>

                <p>
                    Odoo Developer | Python Developer | Full Stack Developer
                </p>

                <p className="footer-copyright">
                    © {new Date().getFullYear()} Muhammed Jabir M T.
                    All rights reserved.
                </p>

            </div>

            <button
                type="button"
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <FaArrowUp />
            </button>

        </footer>
    );
}

export default Footer;