import React from 'react'
import "animate.css"
import { Link } from "react-scroll";

// import SelectedProjects from './SelectedProjects';

// import welcome from '../assets/images/cole-welcome.png'

// import List from '../components/List'

// import WithScrollReveal from '../components/WithScrollReveal'

// const RevealedList = WithScrollReveal(List)

//<p className="font-dmono text-xs text-dark pb-3 md:pb-4 font-light animate__animated animate__fadeInUp animate__fast">PRODUCT DESIGNER</p>

//   <div className="md:flex md:justify-center md:items-center w-11/12 md:w-10/12 mx-auto">


const Hero = () => {
    return (
    <section className="bg-white h-full">
    
    <div className="md:flex md:justify-center md:items-center w-11/12 md:w-11/12 lg:w-11/12 mx-auto">

    {/* Text */}
    <div className="md:h-screen lg:h-screen mx-auto flex flex-col justify-center w-full md:w-9/12 mt-11 md:mt-0 mb-11 md:mb-0">
       <div className="md:pb-2 pt-10 md:pt-0">
         <div className="font-neue font-medium bg-gray py-1 pl-3 md:pl-5 w-6/12 sm:w-3/12 md:w-3/12 rounded-full md:mb-4">
           <p className="md:text-base text-xs">&#127774; Hi, I'm Ijeoma Emeruwa</p>
         </div>
         <h2 className="mt-4 md:mt-0 text-dark text-3xl sm:text-5xl md:text-7xl font-neue font-medium leading-normal sm:leading-tight md:leading-tight md:tracking-tight md:w-11/12">
          Digital Product Designer, designing useful solutions and relevant experiences
         </h2>
       </div>

       <div className="md:w-7/12 font-neue mt-1 md:mt-4">
        <div className="flex items-center mt-6 md:mt-6 w-full">
        <a href="mailto:helloijeoma@gmail.com" 
           target="_blank"  rel="noopener noreferrer">
            <button className="bg-dark text-white md:text-base text-sm py-3 px-7 md:py-4 md:px-10 font-neue font-regular rounded-lg hover:opacity-80 animation">
             Get in Touch
            </button>
        </a>
       

    
      <Link 
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="md:ml-6 ml-2 text-sm py-3 px-7 md:py-4 md:px-8 md:text-base font-neue font-medium rounded-lg bg-gray hover:text-blue animation cursor-pointer"
          >
        View Recent Work
      </Link>
       
    </div>   
    </div>
    </div> 

  </div>
  </section>
    )
}

export default Hero
