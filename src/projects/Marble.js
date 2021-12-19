import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'

const Marble = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-6xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Simplifying cryptocurrency trading and investments
      </h2>
    </Header>

    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Solo Designer</li>
         <li>UI/UX Design</li>
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
      My goal was to look into the pains & frustrations experienced by users when using crypto wallets, articulate my approach 
      to understanding and solving the UX challenges with crypto wallets, and share valuable insights into my learnings from the blockchain ecosystem. 
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Gathering Insights into the Problem
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      
    </p>
    
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      
    </p>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Identifying Opportunities
    </h4>
    
    </div>


    {/* Ideation, Decisions & Testing */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Solving the problem
    </h4>
  
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Solutions
    </h4>
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