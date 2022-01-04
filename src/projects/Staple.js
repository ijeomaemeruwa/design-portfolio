import React from 'react'
import Contact from '../pages/Contact'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import {Link} from 'react-router-dom'
import splash from '../assets/images/staple-splash.svg'
import system from '../assets/images/style-guide.svg'


const Staple = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Designing a subscription and revenue tracking dashboard
      </h2>
    </Header>
    <div className="mb-8 mt-10">
      <img src={splash} loading="lazy" alt="splash screen"/> 
    </div> 


    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>UI/UX Design</li>
         <li>Design System</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Dashboard</li>
         <li>Web</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Timeline</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2021-Present</li>
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
      Staple is a subscription and business revenue and insights tracking 
      platform that helps businesses view valuable data and metrics that help them make profitable business decisions.
    </p>
    </Overview>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      My Role
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      I designed the User Interface from scratch and created a design system to make sure 
      designs were consistent.
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-relaxed tracking-tighter">
      Challenges
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Businesses often analyze business metrics and data insights with spreadsheets or 
      view analytics on different business tools at a time which can be daunting, time wasting or give inaccurate data.
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      How Staple solves this problem
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Staple creates an automated solution that gives real-time data without the 
      need of custom development, saving time, money and keeping track of business operations that provide growth opportunities.
    </p>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Goals
    </h4>
      <ul className="mt-2 md:leading-relaxed md:text-3xl text-2xl opacity-80 leading-relaxed list-disc">
        <li>To help businesses get insight into relevant metrics that drive growth.</li>
        <li className="mt-4">To represent data in a simple and intuitive way.</li>
      </ul>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design
    </h4>
    </div>
   
    <p className="text-dark md:text-3xl text-2xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Design System
    </p>
    </div>
    <div className="mb-8 mt-6">
     <img src={system} loading="lazy" alt="style guide"/> 
    </div> 
   
    

    <div className="pt-10 mb-6 md:mt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Decisions and Solutions
    </h4>
    <p className="text-dark opacity-50 md:text-5xl text-3xl md:py-11 font-neue md:w-11/12 md:leading-tight leading-relaxed">
      Staple makes it easy to view revenue insights in real-time and understand customer activities
      to confidently make business decisions and reduce churn.
    </p>
    </div>

    
    <div className="pt-10 mb-6 md:mt-8 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl text-3xl md:py-5 font-neue md:leading-tight leading-relaxed">
      Analytical dashboard to help users view relevant data and insights at a glance
    </p>
    </div>
    <div>

    </div>



    <div className="pt-10 mb-6 md:mt-8 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl text-3xl md:py-5 font-neue md:leading-tight leading-relaxed">
       Quick setup and business tools integration to reduce time needed to start using the platform 
       and easy connect all business tools into one central space.
    </p>
    </div>
    <div>
      
    </div>


    <div className="pt-10 mb-6 md:mt-8 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl text-3xl md:py-5 font-neue md:leading-tight leading-relaxed">
       Business metrics
    </p>
    </div>
    <div>
      
    </div>


    <div className="pt-10 mb-6 md:mt-8 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl text-3xl md:py-5 font-neue md:leading-tight leading-relaxed">
       Customer insights
    </p>
    </div>
    <div>
      
    </div>


    <div className="pt-10 mb-6 md:mt-8 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl text-3xl md:py-5 font-neue md:leading-tight leading-relaxed">
       Billing insights
    </p>
    </div>
    <div>
      
    </div>


  
  
  

  {/* Next & Previous */}
   <div className="flex justify-between items-center font-neue mx-auto w-11/12 md:w-8/12" style={{marginTop: "10rem", marginBottom: "3rem"}}>
    <Link to="/bridgecard">
      <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
      <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Bridgecard</h3>
    </Link>
    <Link to="/marble-wallet">
      <p className="text-xs md:text-sm pb-2 opacity-80">Next</p>
      <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Marble-wallet</h3>
    </Link>
  </div>

 
  <Contact />       
  </>
  )
}

export default Staple

