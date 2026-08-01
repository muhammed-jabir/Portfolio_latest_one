import { motion } from "framer-motion";


const experience = [

{
year:"2026 - Present",
role:"Junior Odoo Developer",
company:"Your Company Name",

points:[
"Develop and customize Odoo ERP modules",
"Create models, views, menus and business workflows",
"Work with Python, PostgreSQL and XML",
"Customize reports and improve ERP functionality",
"Debug and maintain Odoo applications"
]

},


{
year:"2025",
role:"Full Stack Developer Intern",
company:"InfoCampus",

points:[
"Developed web applications using Django and React",
"Built REST API based applications",
"Worked with database design and frontend integration",
"Improved debugging and problem-solving skills"
]

}

];



function Experience(){


return(

<section id="experience">


<h2 className="title">
Experience
</h2>



<div className="timeline">


{

experience.map((item,index)=>(


<motion.div

className="experience-card"

key={index}

initial={{
opacity:0,
x:index%2===0?-50:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.5
}}

>


<div className="year">

{item.year}

</div>


<h3>

{item.role}

</h3>


<h4>

{item.company}

</h4>


<ul>

{

item.points.map((point,i)=>(

<li key={i}>
{point}
</li>

))

}

</ul>



</motion.div>


))

}


</div>


</section>


)

}


export default Experience;