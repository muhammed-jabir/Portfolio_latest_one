import { motion } from "framer-motion";

function About(){

return(

<section id="about">

<motion.div

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.5}}

>

<h2 className="title">
About Me
</h2>


<p className="about-text">

I'm a Junior Odoo Developer and Full Stack Developer
passionate about building scalable business applications
and modern web solutions.

<br/><br/>

Currently working with Odoo ERP, Python, PostgreSQL,
XML, JavaScript and developing customized business
modules.

<br/><br/>

I also have experience building full-stack applications
using Django, React.js and REST APIs.

</p>


<div className="info-cards">


<div className="card">

<h3>
🎓 Education
</h3>

<p>
BCA Graduate<br/>
University of Calicut
</p>

</div>



<div className="card">

<h3>
💼 Experience
</h3>

<p>
Junior Odoo Developer
</p>

</div>



<div className="card">

<h3>
🚀 Focus
</h3>

<p>
ERP Development & Web Applications
</p>

</div>


</div>


</motion.div>

</section>

)

}

export default About;