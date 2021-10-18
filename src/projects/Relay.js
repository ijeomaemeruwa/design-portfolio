import React from 'react'
import relay from '../assets/images/relay-header.jpg'

import Header from '../structure/Header'
import Overview from '../structure/Overview'

import problem from '../assets/images/1-problem.jpg'
import challenge from '../assets/images/1-challenge.jpg'
import goals from '../assets/images/1-goal.jpg'
import competition from '../assets/images/1-competition.svg'
import research from '../assets/images/1-research.svg'
import opp from '../assets/images/1-opp.svg'
import solutions from '../assets/images/1-solutions.jpg'



const Relay = () => {
    return (
    <>
    <Header>
      <div className="font-neue font-regular mb-3 md:mt-11">
         <p className="text-xs md:text-lg">Marketplace</p>
      </div>
      <h2 className="text-dark text-3xl md:text-6xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Helping tech companies build credibility with quality content
      </h2>
    </Header>


  {/* Image */}
  <div>
   <img src={relay} alt="relay-header"/> 
  </div>
 

 <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">

 {/* Intro */}
 <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-7/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>UX Design</li>
         <li>Visual Design</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Web</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Timeline</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>3 Weeks</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Client</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Freelance</li>
       </ul>
     </div>
    </div>



    {/* Overview */}
    <Overview>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-4">
      Technical commuication is one of the important parts of releasing a product. If people don't understand it, how will they 
      use it? Content is king, but there is a disconnect on what companies need and what writers can offer-which can delay hiring 
      the right person for the job. 
      </p>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Relay is a B2B talent acquisition marketplace for startups and enterprise companies to find and hire technical communicators. 
      </p>
    </Overview>


    {/* The Problem */}

    <div>
     <img src={problem} alt="the-problem"/> 
    </div>

    <div>
     <img src={challenge} alt="challenges"/> 
    </div>
      
    <div>
     <img src={goals} alt="main-goals"/> 
    </div>



     {/* Research */}
     <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Research</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
       I kicked off the process by researching the competition and interviewing target users to make sure we understood the 
       market need and validate any assumptions.
      </p>
      
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
         Competitive analysis helped identify the following to give Relay a competitive edge:
      </p>
      <div className="mb-11 mt-10">
       <img src={competition} alt="Findings from competitive analysis"/> 
      </div>

      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4 mt-10">
         With this information, it was important to understand users, their experiences, and needs. 
         From the user interviews 3 primary problems stood out:
      </p>
      <div className="mb-6 mt-10">
       <img src={research} alt="Research insights"/> 
      </div>
    </div>



     {/* Opportunities */}
     <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Opportunities</h4>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      From the key learnings and insights discovered, 
      I converted our key problems into opportunities to solve based on user's needs.
      </p>

      <div className="mb-6 mt-10">
       <img src={opp} alt="Opportunities"/> 
      </div>
    </div>



  {/* Design and Prototyping // Goals, User Flow, Lo-Fi with annotation */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Design</h4>

      <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
       After brainstorming around the opportunity identified, I moved on to prioritize and visualize my solutions, and design the user flow and prototype 
       in a way that represented the main path for the target users to accomplish important tasks based on their needs. 
       The goals were:
      </p>
       
      <div className="mb-6 mt-10">
       <img src={solutions} alt="Design-solutions"/> 
      </div>

      {/* <div className="mt-11">
      <p className="text-dark md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-4">
        Lo-Fi 
      </p>
      </div> */}
    </div>



  {/* Solution-Mobile and Web + Interactive Prototype */}
    <div className="pt-10 mb-6 md:mt-11">
      <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Solutions</h4>
    </div>

    <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
       Designs Coming Soon
    </p>



  {/* Reflections */}
  {/* <div className="pt-10 mb-6 md:mt-11">
  <h4 className="font-neue font-medium pb-8 text-xl md:text-3xl text-dark">Takeway</h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-poppins md:w-10/12 md:leading-loose leading-relaxed pb-4">
      
    </p> 
  </div> */}

 </div>
 </>
  )
}

export default Relay
