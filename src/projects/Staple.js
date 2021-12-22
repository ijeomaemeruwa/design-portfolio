import React from 'react'
import Contact from '../pages/Contact'
import Header from '../structure/Header'
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
         <li>Design Systems</li>
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

//Home