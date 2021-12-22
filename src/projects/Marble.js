import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import marketResearch from '../assets/images/marble-market research.svg'
import hmw from '../assets/images/marble-hmw.svg'
import ux from '../assets/images/marble-good ux.svg'
import Contact from '../pages/Contact'
import flowchart from '../assets/images/marble-user flow.svg'
import splash from '../assets/images/marble-splash screen.svg'
import {Link} from 'react-router-dom'



const Marble = () => {
  return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Simplifying cryptocurrency trading and investments
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
         <li>UX Design</li>
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
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      The Problem
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Traditional banking systems pose several problems for conducting transactions and usually require an intermediary 
      like banks or brokerages. De-Fi wallets have created a means for users to have sole control and access assets via crypto wallets. 
      Yet, the challenges people face are usually associated with: 
      <ul className="py-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>Complexity of blockchain applications or ecosystem</li>
        <li className="py-4">Uncertainty regarding the level of security & trust</li>
      </ul>
    </p>
    <p className="text-dark pt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      <strong>The Goal</strong> was to look into the pains & frustrations experienced by users when using De-Fi crypto wallets and articulate my approach 
      to understanding and solving the UX challenges with crypto wallets. 
    </p>
    </div>
    <div className="mb-8 mt-10">
      <img src={ux} loading="lazy" alt="blockchain ux"/> 
    </div> 



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-4 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      My Role
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      As a solo UX Designer on this project, I was responsible for gathering insights into problems faced by users through Market & User Research 
      and delivering design output that showed the user flow and hi-fidelity solutions that improves user experience. 
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Gathering Insights into what problems I needed to solve
    </h4>

    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      After researching the ecosystem and understanding how De-fi wallets work, I kicked things off by conducting:
      <ul className="mt-6 md:leading-relaxed leading-relaxed list-disc">
        <li>Market research to understand the current flow and offerings of common De-Fi wallets</li>
        <li className="mt-4">Heuristics evaluation to identify usability issues.</li>
      </ul> 
    </p>
      <div className="mb-8 mt-10">
       <img src={marketResearch} loading='lazy' alt="market research insights"/> 
      </div>

    <p className="text-dark md:my-10 md:py-10 pt-5 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     From my findings, it was crucial to get a deep level understanding of how people use and experience crypto wallets. 
     I conducted user interview to validate my findings and assumptions about the problem. 
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     The user research helped me identify 3 primary UX problems users faced when using de-fi crypto wallets:    
    </p>
    <ul className="md:mt-6 py-10 md:leading-tight font-neue md:text-5xl text-2xl text-dark leading-relaxed list-disc">
      <li>Little to no transparency when performing transactions</li>
      <li className="pt-6 md:pt-6 md:mt-8">Not easy to navigate because of busy interface & poor labelling</li>
      <li className="pt-6 md:pt-6 md:mt-8">High barrier to entry for new users</li>
    </ul>



    <p className="text-dark md:my-10 md:pt-10 pt-5 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       Talking to the partcipants and identifying patterns also revealed
       users personas that were keen on adopting de-fi wallets & investing:
      <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>The Newbie who wants to get started in investing & trading crypto tokens</li>
        <li className="mt-4">The Experienced users who have expertise and want better ways to experience de-fi wallets</li>
      </ul>
    </p>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Identifying Opportunities and Solving the Problem
    </h4>
    <p className="text-dark md:mt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From the key learnings and insights discovered, 
      I converted our key problems into opportunities to solve based on user's needs.
    </p>
    <div className="mb-8 mt-10">
       <img src={hmw} loading='lazy' alt="hmw-need statement"/> 
    </div>
   


    <p className="text-dark pt-10 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      User Flow
    </p>
    <div className="mb-8 mt-4">
      <img src={flowchart} loading='lazy' alt="user flow/IA"/> 
    </div>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Solutions
    </h4>

    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing for transaparency in system and transaction status
    </p>
    
    </div>

    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing for better app navigation and readability
    </p>
   
    </div>


    <div className="py-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Designing a user friendly and intuitive approach to using De-Fi wallets
    </p>
    
    </div>
    </div>




    {/* Key Takeaways ad Next Steps */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Learnings & Takeaways
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      My experience working in the Blockchain De-Fi industry allows me explore the never ending possibilities. The UX of blockchain
      is still complex and it is important to design solutions that are easy to understand and functional enough to help 
      people stay in control & complete tasks.
    </p>
    </div>
    

     {/* Next & Previous */}
     <div className="flex justify-between items-center font-neue" style={{marginTop: "10rem", marginBottom: "3rem"}}>
      <a href="https://www.behance.net/helloijeoma" 
        target="_blank"  rel="noopener noreferrer">
        <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">View Behance</h3>
      </a>

      <Link to="/bridgecard">
        <p className="text-xs md:text-sm pb-2 opacity-80">Next</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Bridgecard</h3>
      </Link>
    </div>
    </div> 

   <Contact />           
    </>
    )
}

export default Marble

//Home and Next Project