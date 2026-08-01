import {motion} from "framer-motion";

import {
FaPython,
FaReact,
FaGitAlt,
FaHtml5,
FaCss3Alt
} from "react-icons/fa";


import {
SiDjango,
SiPostgresql,
SiOdoo,
SiJavascript
} from "react-icons/si";



const skills=[

{
name:"Python",
icon:<FaPython/>
},

{
name:"Odoo ERP",
icon:<SiOdoo/>
},

{
name:"Django",
icon:<SiDjango/>
},

{
name:"React",
icon:<FaReact/>
},

{
name:"JavaScript",
icon:<SiJavascript/>
},

{
name:"PostgreSQL",
icon:<SiPostgresql/>
},

{
name:"HTML",
icon:<FaHtml5/>
},

{
name:"CSS",
icon:<FaCss3Alt/>
},

{
name:"Git",
icon:<FaGitAlt/>
}


];



function Skills(){


return(

<section id="skills">


<h2 className="title">
Skills
</h2>


<div className="skills-container">


{

skills.map((skill,index)=>(


<motion.div

className="skill-card"

key={index}

whileHover={{scale:1.1}}

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{
delay:index*0.05
}}

>


<div className="skill-icon">

{skill.icon}

</div>


<h3>
{skill.name}
</h3>


</motion.div>


))

}


</div>


</section>


)

}


export default Skills;