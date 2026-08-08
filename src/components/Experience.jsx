import { motion } from "framer-motion";

const experience = [
    {
        year: "2026 - Present",
        role: "Junior Odoo Developer",
        company: "Emdot Mincetech",
        points: [
            "Develop and customize Odoo ERP modules",
            "Create models, views, menus and business workflows",
            "Work with Python, PostgreSQL and XML",
            "Customize reports and improve ERP functionality",
            "Debug and maintain Odoo applications",
        ],
    },
    {
        year: "2025",
        role: "Full Stack Developer Intern",
        company: "InfoCampus",
        points: [
            "Developed web applications using Django and React",
            "Built REST API based applications",
            "Worked with database design and frontend integration",
            "Improved debugging and problem-solving skills",
        ],
    },
];

function Experience() {
    return (
        <section id="experience">

            <h2 className="title">Experience</h2>

            <div className="timeline">

                {experience.map((item, index) => (
                    <motion.div
                        className="experience-card"
                        key={item.role}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                        }}
                    >
                        <div className="year">
                            {item.year}
                        </div>

                        <h3>{item.role}</h3>

                        <h4>{item.company}</h4>

                        <ul>
                            {item.points.map((point) => (
                                <li key={point}>
                                    {point}
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}

export default Experience;