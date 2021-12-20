import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import marketResearch from '../assets/images/marble-market research.svg'
import hmw from '../assets/images/marble-hmw.svg'
import ux from '../assets/images/marble-good ux.svg'

const Marble = () => {
  return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Simplifying cryptocurrency trading and investments
      </h2>
    </Header>

    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Solo UX Designer</li>
         <li>UI Design</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Platform</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Mobile</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Timeline</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2021 - Present</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Industry</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Blockchain</li>
       </ul>
     </div>
    </div>



    {/* Overview */}
    <Overview>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-4">
      Marble Wallet is a De-Fi (Decentralized Finance) Ethereum wallet that runs on mobile. It allows users to store, collect, 
      invest, and trade crypto tokens and collectibles using fiat currencies through cards, bank accounts, or P2P transactions.  
    </p>
    </Overview>

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      The Problem
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Traditional banking systems pose several problems for conducting transactions and usually require an intermediary 
      like banks or brokerages. De-Fi wallets have created a means for users to have sole control and access assets via crypto wallets.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      My goal was to look into the pains & frustrations experienced by users when using De-Fi crypto wallets and articulate my approach 
      to understanding and solving the UX challenges with crypto wallets. 
    </p>
    </div>


    <div className="mb-8 mt-10">
       <img src={ux} alt="blockchain ux"/> 
    </div> 



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      My Role
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      As a solo UX Designer on this project, I was responsible for gathering insights into problems faced by users through Market & User Research 
      and delivering design output that showed the user flow, hi-fidelity solutions that improves user experience. 
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Gathering Insights into what problems I needed to solve
    </h4>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      After researching the ecosystem and understanding how De-fi wallets work, I kicked things off by conducting:
      <ul className="mt-6 md:leading-relaxed leading-relaxed list-disc">
        <li>Market research to understand the current flow and offerings of common De-Fi wallets</li>
        <li className="mt-4">Heuristics evaluation to identify usability issues.</li>
      </ul> 
    </p>
      <div className="mb-8 mt-10">
       <img src={marketResearch} alt="market research insights"/> 
      </div>

    <p className="text-dark mt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     From my findings, it was crucial to get a deep level understanding of how people use and experience crypto wallets. 
     I conducted user interview to validate my findings and assumptions about the problem. 
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     The user research helped me identify 3 primary UX problems users faced when using de-fi crypto wallets:     
     <ul className="mt-6 md:leading-relaxed leading-relaxed list-disc">
        <li>Little to no transparency</li>
        <li className="mt-4">Not easy to navigate</li>
        <li className="mt-4">High barrier to entry</li>
      </ul>
    </p>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Identifying Opportunities and Solving the Problem
    </h4>
    
    <p className="text-dark mt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From the key learnings and insights discovered, 
      I converted our key problems into opportunities to solve based on user's needs.
    </p>

    <div className="mb-8 mt-10">
       <img src={hmw} alt="hmw-need statement"/> 
    </div>


    <p className="text-dark mt-10 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      User Flow
    </p>

    <p className="text-dark mt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      ** Image User flow
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Solutions
    </h4>

    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing for transaparency in system and transaction status
    </p>
    
    </div>

    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing for better app navigation and readability
    </p>
   
    </div>


    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing a user friendly and intuitive approach to using De-Fi wallets
    </p>
    
    </div>
    </div>




    {/* Key Takeaways ad Next Steps */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Learnings & Takeaways
    </h4>
    </div>


    </div>             
    </>
    )
}

export default Marble

//Home and Next Project