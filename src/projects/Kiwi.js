import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'


import splash from '../assets/images/kiwi-splash.svg'
import oldui from '../assets/images/kiwi-old.svg'
import findings from '../assets/images/kiwi-findings.svg'
import heuristics from '../assets/images/kiwi-heuristics.svg'
import library from '../assets/images/kiwi-ui.svg'

import security from '../assets/images/kiwi-security.svg'
import survey from '../assets/images/kiwi-survey.svg'
import portfolio from '../assets/images/kiwi-portfolio.svg'
import nft from '../assets/images/kiwi-nft.svg'
import edu from '../assets/images/kiwi-edu.svg'


import Contact from '../pages/Contact'
import {Link} from 'react-router-dom'



const Kiwi = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        KIWI-Blockchain Wealth Manangement Platform
      </h2>
    </Header>


    {/* Splash screen-change */}
    <div className="mb-8 mt-10">
      <img src={splash} loading='lazy' alt="splash screen"/> 
    </div> 



  <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
  {/* Roles and Responsibilities */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>UI Design</li>
         <li>UX Design</li>
         <li>Interactive prototype</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Mobile</li>
         <li>Web</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Year</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2022</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Industry</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Blockchain</li>
         <li>Web3</li>
       </ul>
     </div>
    </div>



    {/* Overview */}
    <Overview>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
     Redesigning a crypto investment and wealth management platform.
    </h3>
    
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
     Kiwi is a cryptocurrency wealth and automated investment management platform that allows 
     anyone to invest in a basket of curated assets based on risk level and investment goals.
    </p>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      As the solo UI designer, I worked closely with the CEO and Lead Engineer to redesign the existing prototype and improve 
      the user experience.
    </p>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      I redesigned the mobile solution, a website, and created a new UI library that improved 
      consistency and aligned the team on a common design language.  
    </p>
    </Overview>



    {/* The Problem */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      The Problem
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
     Investing in cryptocurrency can be challenging for new users. With its high volatility, broad and technical information, 
     and countless assets to choose from, investing in crypto can get complicated, time-consuming, and overwhelming. Kiwi aims
     to solve this by making the process seamless and automated.
    </p>

     <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      The KIWI team reached out to me to help them redesign the experience of their mobile and web platform with goals to:
     <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>Identify drawbacks of the existing design.</li>
        <li className="mt-2">Refresh the look and feel of the product to fit current design standards for the industry.</li>
        <li className="mt-2">Improve UX problems.</li>
      </ul>
    </p>

    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-2 pt-11">
     Kiwi old designs
    </p>
    <div className="mb-8 mt-10">
      <img src={oldui} alt="kiwi old ui"/> 
    </div>
    </div>
    


    {/* The Goal */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      The Goal
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      With these in mind, the goal was to:
    </p>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Improve design language and determine critical requirements to improve the user experience. 
    </h3>
    </div>
   



   {/* Approach & Process */}

    {/* Research */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Understanding the Users
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The KIWI team had a product vision to make cryptocurrency investment and wealth management simple, 
      accessible, and efficient for new blockchain enthusiasts. 
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed"> 
      As the sole designer on the team, I needed to redesign KIWI in a way that supported the product vision while also 
      focusing on meeting user needs. So to kick things off I pooled together all insights and discovered patterns into 
      what users wanted most from a new version of KIWI from existing user research:
    </p>
    <div className="mb-8 mt-10">
      <img src={findings} alt="research findings"/> 
    </div>
    </div>




   {/* Analyse and Define */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Assessing Usability
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Secondly, to discover usability issues and uncover hidden opportunities, I conducted a heuristics evaluation on the old designs.
      From my evaluation, I identified the following usability problems which would inform my design decisions.
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Because of limited time and resources, this was a faster optimization process to identify problems with the old designs.
    </p>
    <div className="mb-8 mt-10">
       <img src={heuristics} alt="heuristics analysis"/> 
    </div>
    </div>




  {/* Design requirements */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design Requirements
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       After analyzing the user needs and research insights, I identified design opportunities and translated them into the following design requirements
       and principles that aligned with business and user goals:

       <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>A personalized experience</li>
        <li className="mt-2">Easy to use</li>
        <li className="mt-2">Simple and intuitive to navigate</li>
        <li className="mt-2">Learning opportunities</li>
        <li className="mt-2">Build trust with transparency and security</li>
      </ul>
    </p>
    </div> 
  </div>
  


   
  {/* Final Output */}
  <div className="md:my-11 my-10 ">
    <div className="pt-10 mb-6 md:mt-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Final Decisions & Solutions
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      A new design language
    </h3>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The KIWI mobile app was totally revamped and I created a design language that communicated
      trust and quality, while following design patterns and principles that focused on user needs. 
    </p>
    </div>
    <div className="mb-11 mt-10">
      <img src={library} alt="new design library"/> 
    </div>




    <div className="pt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold  md:leading-relaxed leading-relaxed">
      Security and KYC
    </p>
    </div>
    <div className="mb-8 mt-3">
       <img src={security} alt="Security and KYC"/> 
    </div>
    


    <div className="pt-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark font-semibold md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Risk Assessment & Personalization
    </p>
    </div>
    <div className="mb-8 mt-3">
       <img src={survey} alt="Assessment and personalization"/> 
    </div>
   


    <div className="pt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark font-semibold md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
     Portfolio management
    </p>
    </div>
    <div className="mb-8 mt-3">
      <img src={portfolio} alt="Portfolio mgt"/> 
    </div>
   


    <div className="pt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark font-semibold md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Crypto marketplace
    </p>
    </div>
    <div className="mb-8 mt-3">
       <img src={nft} alt="NFT marketplace"/> 
    </div>


   <div className="pt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark font-semibold md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Educational content
    </p>
    </div>
    <div className="mb-8 mt-3">
      <img src={edu} alt="Education and learning"/> 
    </div>





  {/* Key Takeaways and Learnings */}
    <div className="pt-10 mb-6 md:mt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Takeaways & Learnings
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      As a product designer it is crucial to communicate design in a way that all stakeholders undertand 
      and approve.
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     Navigating a new use case in blockchain design was challenging, but understanding design priciples and patterns
     that focus on the users' needs helped in designing a solution that improved the experience and business value.
    </p>
    </div>





  {/* Next & Previous */}
    <div className="flex justify-between items-center font-neue mx-auto w-11/12 md:w-8/12" style={{marginTop: "10rem", marginBottom: "3rem"}}>
      <Link to="/bridgecard">
        <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Bridgecard</h3>
      </Link>
      <Link to="/staple">
       <p className="text-xs md:text-sm pb-2 opacity-80">Next</p>
       <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Staple</h3>
      </Link>
    </div>


    </div>    
    <Contact />   
    </>
    )
}


export default Kiwi
