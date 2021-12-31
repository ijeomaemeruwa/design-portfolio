import React from 'react'
import Contact from '../pages/Contact'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import {Link} from 'react-router-dom'



const Staple = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Designing a Revenue Tracking Dashboard
      </h2>
    </Header>

    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>UX Design</li>
         <li>Visual Design</li>
         <li>Interaction Design</li>
         <li>Prototyping</li>
         <li>Design Systems</li>
         <li>Optimizing for better design handoffs</li>
       </ul>
     </div>


     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Dashboard</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Timeline</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2021</li>
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
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-4">
      About the project
    </p>
    </Overview>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      The Problem
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      What am I trying to solve for businesses & why 
    </p>
    </div>


    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      My Role
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       
    </p>
    </div>




    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Outcome & Results
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       
    </p>
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      UX Design-IA/User Flow/Task Flows
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       Touchpoints & Goals
    </p>
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design System-Systems thinking skills
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       
    </p>
    </div>

    


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Solutions-Show Visual, Interaction Design, & Prototyping skills
    </h4>

    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      
    </p>
    </div>

    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      
    </p>
    </div>

    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      
    </p>
    </div>
    </div>
   



   {/* Next & Previous */}
   <div className="flex justify-between items-center font-neue" style={{marginTop: "10rem", marginBottom: "3rem"}}>
    <Link to="/bridgecard">
      <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
      <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Bridgecard</h3>
    </Link>
    <div>
      <p className="text-xs md:text-sm pb-2 opacity-80">Next</p>
      <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">View Behance</h3>
    </div>
  </div>


  </div>
  <Contact />       
  </>
  )
}

export default Staple

