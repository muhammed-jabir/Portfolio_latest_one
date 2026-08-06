import { motion } from "framer-motion";
import { FaGraduationCap, FaDownload } from "react-icons/fa";


function Education(){


return(

<section id="education">


<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

>


<h2 className="title">
Education
</h2>



<div className="education-card">


<div className="education-icon">

<FaGraduationCap/>

</div>


<div>


<h3>
Bachelor of Computer Applications (BCA)
</h3>


<p>
University of Calicut
</p>


<p>
Graduated: 2025
</p>


<p>
Computer Science | Software Development
</p>


</div>


</div>

</motion.div>


</section>


)

}


export default Education;