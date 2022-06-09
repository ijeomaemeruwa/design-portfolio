import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'

import splash from '../assets/images/asteria-splash.svg'
import adminpersona from '../assets/images/persona-admin.svg'
import storepersona from '../assets/images/persona-store.svg'

import setup from '../assets/images/as-setup.svg'
import assets from '../assets/images/as-assets.svg'



import Contact from '../pages/Contact'
import {Link} from 'react-router-dom'



const Asteria = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Asteria Asset Management System
      </h2>
    </Header>



    {/* Splash screen */}
    <div className="mb-8 mt-10">
      <img src={splash} loading='lazy' alt="splash screen"/> 
    </div> 



  <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
  {/* Roles and Responsibilities */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>UX Design</li>
         <li>User Research</li>
         <li>Design system</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Dashboard</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Year</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2020</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Industry</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>SaaS</li>
         <li>B2B</li>
       </ul>
     </div>
    </div>





    {/* Overview */}
    <Overview>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Providing an automated solution to simplify asset management
    </h3>
    
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
    Asteria is an IT and software consulting company that works on public and private companies with 200+ staff and counting. 
    </p>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      I worked with a Senior Product designer to design the end-to-end solution for the Asset Manager experience.
    </p>
    </Overview>




    {/* The Problem */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      Challenges regarding the asset lifecycle
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      An outdated system.
    </h3>

    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      The management team reached out to the product team with problems regarding how the current process for handling assets
      presented issues regarding:
      <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>An increase in cost</li>
        <li className="mt-2">Ineffective time management</li>
        <li className="mt-2">Reduced productivity</li>
        <li className="mt-2">Errorneous reporting and loss of records.</li>
      </ul>
    </p>


    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      When asked why they needed a custom solution as opposed to using already available
      solutions, the stakeholders shared insights such as:
      <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>Subscription and add-on cost</li>
        <li className="mt-2">Feature overload</li>
        <li className="mt-2">Maintenance cost</li>
      </ul>
    </p>
    </div> 





    {/* The Goal */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      The Goal
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      These insights helped us define our goal to:
    </p>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Design a simple, automated, and efficient way to manage company assets 
    </h3>
    </div>
   




   {/* Approach & Process */}

    {/* Research */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Research
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       We needed to understand the asset life cycle within the organization, current behaviours,
       frustrations, and user goals, so we we kicked things of by interviewing the subject matter experts and
       staff that directly managed these assets.
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed"> 
      From the research, we found that we had two main types of users:
    </p>
    <div className="mb-8 mt-10">
      <img src={adminpersona} alt="admin persona"/> 
    </div>
    <div className="mb-8 mt-10">
      <img src={storepersona} alt="store persona"/> 
    </div>
    </div>




   {/* Analyse and Define */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Defining Opportunities
    </h4>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     After defining our personas, we mapped out the asset lifecycle to identify problems with the Store Keeper experience 
     and defined opportunities that guided our design decisions.
     <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>A dashboard to allow users quickly log in and achieve goals</li>
        <li className="mt-3">An effective change management and productivity flow</li>
        <li className="mt-3">Simple and clear navigation to make informed decisions</li>
        <li className="mt-3">Reduce loss by building an automated check in/check out system</li>
        <li className="mt-3">Financial and payments management and tracking</li>
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
      An automated system
    </h3>
    </div>
    
   


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
     Simple and easy setup
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Because of the user context and behaviour, it was important for users to quickly get into
      the platform
    </p>
    </div>
    <div className="mb-8 mt-4">
      <img src={setup} alt="asteria setup"/> 
    </div>


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
     Asset Management
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      A quick and easy way to assign, manage, and track assets
    </p>
    </div>
    <div className="mb-8 mt-4">
      <img src={assets} alt="asteria assets"/> 
    </div>
   


  



  {/* Key Takeaways and Learnings */}
    <div className="pt-10 mb-6 md:mt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Results
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-4 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Increased efficiency
    </h3>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       As a result, we saw an increase in time management and productivity and cost of operation reduced by 32%. 
    </p>
    </div>



  {/* Next & Previous */}
    <div className="flex justify-between items-center font-neue mx-auto w-11/12 md:w-8/12" style={{marginTop: "10rem", marginBottom: "3rem"}}>
      <Link to="/marble-wallet">
        <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Marble Wallet</h3>
      </Link>
      <Link to="/bridgecard">
       <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
       <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Bridgecard</h3>
      </Link>
    </div>


    </div>    
    <Contact />   
    </>
    )
}


export default Asteria
