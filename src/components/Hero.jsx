import {motion} from "framer-motion";


function Hero(){

return(

<section className="hero">


<motion.div

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

>

<h1>

Hi, I'm <span>Muhammed Jabir M T</span>

</h1>


<h2>
Junior Odoo Developer
</h2>


<p>

I build ERP solutions and modern web applications
using Python, Odoo, React and Django.

</p>


<br/>


<button>
Download Resume
</button>


</motion.div>


</section>

)

}

export default Hero;