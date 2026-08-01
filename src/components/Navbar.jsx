import {motion} from "framer-motion";


function Navbar(){

return(

<motion.nav
className="navbar"
initial={{y:-100}}
animate={{y:0}}
>

<h2>
Jabir.dev
</h2>


<div>

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

<a href="#education">Education</a>


</div>


</motion.nav>

)

}

export default Navbar;