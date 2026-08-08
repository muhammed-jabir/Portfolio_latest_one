
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaCheck
} from "react-icons/fa";
import { useForm } from "@formspree/react";
import { useState, useEffect, useRef } from "react";

function Contact() {

    const [state, handleSubmit] = useForm("mnpajpyl");

    const [showSuccess, setShowSuccess] = useState(false);

    const formRef = useRef(null);


    /* =========================================================
       SHOW SUCCESS POPUP + CLEAR FORM
    ========================================================= */

    useEffect(() => {

        if (state.succeeded) {

            setShowSuccess(true);

            // Clear the form fields
            if (formRef.current) {
                formRef.current.reset();
            }
        }

    }, [state.succeeded]);


    return (
        <section id="contact">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >  
            <span className="eyebrow">Contact</span>

                <h2 className="title">
                    Get In Touch
                </h2>


                <div className="contact-container">


                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <div className="contact-info">

                        <h3>
                            Let's Build Something Together
                        </h3>


                        <p>
                            I'm open to opportunities as a Python Developer,
                            Odoo ERP Developer, and Full Stack Web Developer,
                            as well as freelance projects, software development
                            collaborations, and building scalable web applications
                            and enterprise solutions.
                        </p>


                        <div className="social-links">

                            <a href="mailto:jabirmtmuhammed@gmail.com">
                                <FaEnvelope />
                                Email
                            </a>


                            <a
                                href="https://www.linkedin.com/in/muhammed-jabir-mt/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                                LinkedIn
                            </a>


                            <a
                                href="https://github.com/muhammed-jabir"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                        </div>

                    </div>


                    {/* =================================================
                        CONTACT FORM
                    ================================================= */}

                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />


                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />


                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                        />


                        <button
                            type="submit"
                            disabled={state.submitting}
                        >
                            {state.submitting
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                    </form>

                </div>

            </motion.div>


            {/* =========================================================
                SUCCESS POPUP
            ========================================================= */}

            <AnimatePresence>

                {showSuccess && (

                    <motion.div
                        className="success-overlay"

                        initial={{ opacity: 0 }}

                        animate={{ opacity: 1 }}

                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            className="success-popup"

                            initial={{
                                opacity: 0,
                                scale: 0.8,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0
                            }}

                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                y: 30
                            }}

                            transition={{
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        >


                            {/* Close Button */}

                            <button
                                type="button"
                                className="success-close"
                                onClick={() =>
                                    setShowSuccess(false)
                                }
                                aria-label="Close"
                            >
                                ×
                            </button>


                            {/* Success Icon */}

                            <div className="success-icon">
                                <FaCheck />
                            </div>


                            <h3>
                                Message Sent!
                            </h3>


                            <p>
                                Thank you for reaching out.
                                Your message has been successfully
                                sent. I'll get back to you as soon
                                as possible.
                            </p>


                            <button
                                type="button"
                                className="success-button"
                                onClick={() =>
                                    setShowSuccess(false)
                                }
                            >
                                Done
                            </button>


                        </motion.div>

                    </motion.div>

                )}

            </AnimatePresence>

        </section>
    );
}

export default Contact;