import React from 'react'
import Footer from '../sections/Footer'
import {Link} from 'react-router-dom'



const About = () => {
   return (
   <section className="h-full">
   <div className="md:flex flex-col md:items-center w-11/12 md:w-full mx-auto">


   <div className="md:h-screen mx-auto flex flex-col justify-center w-full md:w-9/12 pt-11 md:pt-0 pb-11 sm:pb-11 md:pb-0">
      <div className="font-neue font-medium bg-gray py-1 px-1 md:px-2 sm:pl-3 w-5/12 sm:w-3/12 md:w-2/12 rounded-full mb-1">
         <p className="md:text-base text-sm">&#127774; Hi, it's me again</p>
      </div>
     <h4 className="mt-2 md:mt-0 text-dark text-lg sm:text-2xl md:text-4xl font-neue font-medium leading-normal sm:leading-normal md:leading-normal md:w-full">
      I'm Ijeoma Emeruwa, a Digital Product/UX Designer based in Abuja, Nigeria.
      Over the past year, I have focused on designing for growth and impact by simplifying complex ideas to create end-to-end holistic
      user experiences that improve user engagement and ensure business viability.
     </h4>
   </div>

   



    <div className="my-11 mx-auto flex flex-col justify-center w-full md:w-9/12 md:pt-0 pb-11 sm:pb-11 md:pb-0">
      <div className="font-neue font-medium bg-gray py-1 pl-4 sm:pl-7 md:px-2 w-3/12 sm:w-2/12 md:w-1/12 rounded-full mb-1 md:mt-11">
        <p className="text-sm md:text-base">&#9889; Work</p>
      </div>
     <h4 className="mt-2 md:mt-0 text-dark text-lg sm:text-2xl md:text-4xl font-neue font-medium leading-normal sm:leading-normal md:leading-normal md:w-11/12">
       My experience includes solving UX problems in several industries such as <span className="opacity-50">FinTech</span>, <span className="opacity-50">Enterprise SaaS</span>, 
       <span className="opacity-50"> B2B</span>, 
       and emerging technologies such as <span className="opacity-50">Blockchain</span>, <span className="opacity-50">AI</span>, and <span className="opacity-50">Game Design</span>. 
       I also design <span className="opacity-50">PitchDecks</span> for startups.
     </h4>
     <div className="mt-6 md:mt-10 md:mb-11">
    <Link to="/">
      <button className="bg-dark text-white md:text-base text-sm py-3 px-5 md:py-4 md:px-10 font-neue font-regular rounded-lg tracking-tight hover:opacity-80 animation">
        View My Projects
      </button>
    </Link>
   </div>
  </div>





    <div className="my-11 mx-auto flex flex-col justify-center w-full md:w-9/12 md:pt-0 pb-11 sm:pb-11 md:pb-0">
      <div className="font-neue font-medium bg-gray py-1 pl-3 w-5/12 sm:w-3/12 md:w-2/12 rounded-full mb-1 md:mt-11">
         <p className="text-sm md:text-base">&#127992; Solving problems</p>
      </div>
    <h4 className="mt-2 md:mt-0 text-dark text-lg sm:text-2xl md:text-4xl font-neue font-medium leading-normal sm:leading-normal md:leading-normal">
       My process involves understanding users and stakeholders needs and working with a cross-functional team to take an
       idea from conception to launch, make decisons that align the needs of users, business, and development team, and iteratively
       improve solutions from data and feedback.
     </h4> 
    </div>





    <div className="md:h-screen mx-auto flex flex-col justify-center w-full md:w-9/12 md:pt-0 pb-11 sm:pb-11 md:pb-0">
      <div className="font-neue font-medium bg-gray py-1 px-1 md:pl-4 pr-0 w-4/12 sm:w-3/12 md:w-2/12 rounded-full mb-1 md:mt-11">
         <p className="text-sm md:text-base">&#129361; Goals & Vision</p>
      </div>
    <h4 className="mt-2 md:mt-0 text-dark text-lg sm:text-2xl md:text-4xl font-neue font-medium leading-normal sm:leading-normal md:leading-normal md:w-full">
       My goals revolve around continuous learning and progression. This is why I love working with companies and people who 
       take a design-first approach to solving meaningful problems, create solutions that
       make a difference, and encourage a culture for effective collaboration and continuous development.
     </h4> 
    </div>  
</div> 

<Footer />
</section>
)
}


export default About
