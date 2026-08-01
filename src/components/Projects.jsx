import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [

{
title:"Hospital Management System",
tech:"Odoo 16 | Python | PostgreSQL | XML",

description:
"Custom Odoo ERP hospital solution with appointment booking, doctor management, role-based access control, email integration and reporting.",

github:"#",

demo:"#"

},


{
title:"Furniture E-Commerce Platform",

tech:"Django | React | JWT | Stripe",

description:
"Full-stack ecommerce application with authentication, product management, cart system, order processing and online payment integration.",

github:"#",

demo:"#"

},


{
title:"AR Plant Implementation",

tech:"React | Python | OpenCV | AR.js",

description:
"Augmented Reality based gardening application that provides interactive plant visualization using AR technology.",

github:"#",

demo:"#"

},


{
title:"Weather Dashboard",

tech:"React | API | JavaScript",

description:
"Responsive weather application displaying real-time weather information using API integration.",

github:"#",

demo:"#"

}


];



function Projects(){


return(

<section id="projects">


<h2 className="title">
Projects
</h2>



<div className="projects-container">


{

projects.map((project,index)=>(


<motion.div

className="project-card"

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.1
}}

>


<h3>
{project.title}
</h3>


<span>
{project.tech}
</span>


<p>
{project.description}
</p>



<div className="project-buttons">


<a href={project.github}>
<FaGithub/> Github
</a>



<a href={project.demo}>
<FaExternalLinkAlt/> Demo
</a>


</div>



</motion.div>


))

}


</div>



</section>

)

}


export default Projects;