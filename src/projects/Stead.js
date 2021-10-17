import React from 'react'
import stead from '../assets/images/steadafrica.png'
import steadPersona1 from '../assets/images/stead-persona-1.png'
import steadPersona2 from '../assets/images/stead-persona-2.png'
import userflow from '../assets/images/staed-userflow.png'

const Stead = () => {
    return (
    <>
         {/* Header */}
    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <div className="pb-6 md:mt-11">
      <p className="font-dmono pb-10 text-sm md:text-base text-purple">UX CASE STUDY</p>
      <h2 className="text-dark text-3xl md:text-6xl font-poppins font-extrabold md:leading-tight tracking-tighter md:w-10/12 animate__animated animate__fadeInUp animate__fast">
       Simplifying the process of renting accommodation
      </h2>
    </div>
 </div>

 {/* Image */}
  <div>
   <img src={stead} alt="stead-africa"/> 
  </div>
 

 <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">

 {/* Intro */}
 <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-7/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-dmono font-semibold pb-4 text-base md:text-lg text-purple">What I Did</h4>
       <ul className="font-poppins opacity-70 text-xl leading-loose">
         <li>UX Strategy</li>
         <li>UX Design</li>
         <li>Visual Design</li>
         <li>Interacation Design</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-dmono font-semibold pb-4 text-base md:text-lg text-purple">Platforms</h4>
       <ul className="font-poppins opacity-70 text-xl leading-loose">
         <li>Web</li>
         <li>Mobile (iOS)</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-dmono font-semibold pb-4 text-base md:text-lg text-purple">Duration</h4>
       <ul className="font-poppins opacity-70 text-xl">
         <li>5 Weeks</li>
       </ul>
     </div>
 </div>


    {/* Overview */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">OVERVIEW</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      Accommodation in Nigeria has become a growing cause for concern and according to 
      the Center for Affordable Housing in Africa, the main challenges faced by Nigerians 
      that need accommodation include increased unemployment, housing demand, and cost. 
      </p>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed">
      Many young Nigerians have resorted to gaining digital skills and taking on multiple 
      jobs that help them afford the high cost of accommodations. Despite this, the issue of 
      seamlessly getting accommodation persists.
      </p>
    </div>


    {/* The Problem */}
    <div className="mb-8 md:mt-6 bg-lightblue py-6 px-4 w-10/12 rounded-md">
      <h4 className="font-dmono font-semibold pb-4 text-base md:text-lg text-purple">What is the Problem?</h4>
      <p 
      className="text-dark opacity-80 md:text-2xl text-xl font-dmono md:w-11/12 md:leading-relaxed leading-relaxed">
      SteadAfrica is a PropertyTech platform that aims to solve the constant 
      problems young Nigerians face during the process of renting accommodation in Nigeria.
      </p>
    </div>

     {/* Strategy */}
     <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">STRATEGY</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      Before diving in, it was necessary to develop a strategy that helped identify 
      possible constraints, main objectives, competitors, and the value of the solution to users' 
      to help make better design decisions, and increase the odds of success by solving problems for the users. 
      </p>

      <div className="mb-8 md:mt-6 bg-lightblue py-6 px-4 w-10/12 rounded-md">
      <h4 className="font-dmono font-semibold pb-4 text-base md:text-lg text-purple">Main objective</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-dmono md:w-11/12 md:leading-relaxed leading-relaxed">
      To design a solution that provides a safe and easy way to help users, 
      especially young adults, find, verify, and rent accommodation.
      </p>
     </div>
    </div>


     {/* Research */}
     <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">RESEARCH</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      I kicked off the process by researching the competition and target users through Competitive Analysis and User Interviews.
      </p>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
         The research helped me identify 3 primary problems users faced 
         when trying to rent accommodation for long or short stay:
      </p>

      <div className="mt-8">
         <div>
         <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-purple">
           Non-transparent payment process
         </h4>
         <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
           Users had problems with the payment process because it was mostly innacurate and led to excess charges and expenses.
         </p>
         </div>

         <div className="mt-8">
         <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-purple">
           Outdated and non-descriptive home information.
         </h4>
         <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
           Users found it frustrating to view homes with outdated images and non-descriptive information on all aspects of the listing.
           Also, they complained about inspecting homes that looked nothing like what was on the platform.
         </p>
         </div>

         <div className="mt-8">
         <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-purple">
           Unreliable services and fraudulent activities
         </h4>
         <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
           Users want a reliable way to view verified information about agents performance and history to avoid fraud and loss.
         </p>
         </div>
      </div>
    </div>

    {/* User Personas */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">USER PERSONAS</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
        After analysing the key problems, I identified two user personas that represented the 
        target audience through similar themes and patterns from research findings.
      </p>

      <div className="mt-10">
      <div className="mb-8 mt-10">
       <img src={steadPersona1} alt="stead-africa-persona-1"/> 
      </div>

      <div className="mb-8 mt-10">
       <img src={steadPersona2} alt="stead-africa-persona-2"/> 
      </div>
      </div>
    </div>

     {/* Opportunities */}
     <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">OPPORTUNITIES</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      From the key learnings and insights discovered, 
      I converted our key problems into opportunities to solve based on user's needs.
      </p>

     <div className="mb-8 md:mt-6 bg-dark p-4 w-10/12 rounded-md">
      <p className="text-white md:text-3xl text-xl font-dmono md:w-11/12 md:leading-loose leading-relaxed pb-4">
        How might we make sure users have all the information they need to rent their desired home?
      </p>
     </div>

     <div className="mb-8 md:mt-6 bg-dark p-4 w-10/12 rounded-md">
      <p className="text-white md:text-3xl text-xl font-dmono md:w-11/12 md:leading-loose leading-relaxed pb-4">
        How might we help users feel safe and confident when renting accommodation?
      </p>
     </div>
    </div>


 {/* Design and Prototyping // Goals, User Flow, Lo-Fi with annotation */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">PROTOTYPING</h4>

      <div className="mb-8 md:mt-6 bg-gray p-4 w-10/12 rounded-md">
      <p className="text-dark md:text-3xl text-xl font-dmono md:w-11/12 md:leading-loose leading-relaxed pb-4">
        Hypothesis
      </p>
     </div>

      <div className="mt-8 mb-11">
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
        User flow
      </p>
      <div className="mb-8 mt-10">
       <img src={userflow} alt="stead-africa-persona-1"/> 
      </div>
      </div>

      <div className="mt-11">
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
        Lo-Fi 
      </p>
      <div className="mb-8 mt-10">
       
      </div>
      </div>
    </div>


 {/* Solution-Mobile and Web + Interactive Prototype */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">SOLUTIONS</h4>
    </div>


  {/* Reflections */}
  <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-dmono font-semibold pb-8 text-xl md:text-3xl text-dark">REFLECTIONS</h4>
      Product Strategy
      Design decisions
      Validating solutions
  </div>

 </div>
 </>
    )
}

export default Stead