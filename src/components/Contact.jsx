import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact(){


return(

<section id="contact">


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
Contact
</h2>



<div className="contact-container">



<div className="contact-info">


<h3>
Let's Build Something Together
</h3>


<p>

I'm open to software development opportunities,
collaboration and interesting projects.

</p>



<div className="social-links">


<a href="mailto:yourmail@gmail.com">

<FaEnvelope/>

Email

</a>



<a 
href="https://linkedin.com/in/your-linkedin"
target="_blank"
>

<FaLinkedin/>

LinkedIn

</a>



<a 
href="https://github.com/your-github"
target="_blank"
>

<FaGithub/>

GitHub

</a>


</div>


</div>




<form className="contact-form">


<input

type="text"

placeholder="Your Name"

/>


<input

type="email"

placeholder="Your Email"

/>



<textarea

rows="5"

placeholder="Your Message"

/>



<button>

Send Message

</button>


</form>



</div>


</motion.div>


</section>


)

}


export default Contact;