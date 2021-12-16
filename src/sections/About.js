import React from 'react'
import {Link} from 'react-router-dom'

//in <span className="opacity-60">Blockchain</span>, <span className="opacity-60">FinTech</span>, and <span className="opacity-60">SaaS</span> technologies, 


const About = () => {
return (
<section className="bg-white h-full">

<div className="md:flex md:justify-center md:items-center w-11/12 md:w-11/12 mx-auto">
<div className="md:h-screen mx-auto flex flex-col justify-center w-full md:w-9/12 mt-11 md:mt-0 mb-11 md:mb-0">
   <div className="md:pb-2 pt-10 md:pt-0">
     <h4 className="mt-11 md:mt-0 text-dark text-xl sm:text-3xl md:text-5xl font-neue font-medium leading-normal sm:leading-snug md:leading-snug md:w-11/12">
       I'm keen on crafting delightful user experiences that translate to better business, through human-centered design and product thinking.
     </h4>
    </div>

    <div className="mt-8 md:mt-6 md:mb-11">
    <Link to="/about-me">
      <button className="bg-gray text-dark md:text-base text-sm py-3 px-7 md:py-4 md:px-10 font-neue font-medium rounded-lg hover:opacity-80 animation">
        Learn More
      </button>
    </Link>
   </div>

</div> 
</div> 
</section>
    )
}

export default About
