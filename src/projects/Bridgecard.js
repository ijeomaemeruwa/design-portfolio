import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import research from '../assets/images/bridge-research.svg'
import insights from '../assets/images/bridge-insights.svg'
import hmw from '../assets/images/bridge-hmw.svg'

const Bridgecard = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Unifying the way we manage accounts & funds
      </h2>
    </Header>

    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Lead Product Designer</li>
         <li>UX Strategy</li>
         <li>User Research</li>
         <li>UX Design</li>
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
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Timeline</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>2021 - Present</li>
       </ul>
     </div>

     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Industry</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>FinTech</li>
       </ul>
     </div>
    </div>




    {/* Overview */}
    <Overview>
      <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-4">
      Bridgecard provides one debit card and a mobile app that allows you to merge all your cards, 
      bank accounts, and digital wallets in one place, making it easy for you to spend and manage 
      funds from anywhere in the world. 
      </p>
    </Overview>

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Challenges faced when handling multiple accounts/cards
    </h4>
     <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      An average Nigerian has about 2-6 bank accounts and 2-4 debit cards for these accounts. With the 
      rise in fintech apps building creative financial solutions tailored to meet people's specific needs, 
      people now have smart options that solve their financial problems or needs.
    </p>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The Problem with managing more than one card/accounts is that people get frustrated with incompetent bank services, loss, and are unable to track spending.
      This makes the process of handling funds inconvenient for most people.
    </p>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      My Goal was to design a secure, simple, and convenient way for users to manage funds, multiple bank accounts, 
      and digital wallets with one debit card.
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Understanding the Users and Validating Business endeavor
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We were introducing a completely new product to the Nigerian financial market, so to make sure we were solving the right 
      problem and validate our assumptions we set a criteria for target users and conducted user interviews to understand how users currently experience and solve 
      the problems they have with managing multiple accounts and cards with their banks or financial institutions.
    </p>

    <div className="mb-8 mt-10">
       <img src={research} alt="user research goals"/> 
    </div>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Discovering Patterns & Insights
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From our user research data analysis, we identified key patterns from target users that gave us insights into the problem.
    </p>

    <div className="mb-8 mt-10">
       <img src={insights} alt="user research insights"/> 
    </div>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We also identified our target persona and relevant problems that needed to be solved.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Image: Persona(1)
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
       Defining the problem and Identifying opportunities
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       To define what we needed to solve, I collaborated with the engineering and design team to share ideas, 
       get feedback, determine technical capabilities, and prioritize solutions.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The ideas we came up with were based on the problems identified from our target user and possible limitations, 
      which helped us discover opportunities and determine which ideas were worth pursuing:
    </p>

    <div className="mb-8 mt-10">
       <img src={hmw} alt="user need statement"/> 
    </div>
    </div>



    {/* Ideation, Decisions & Testing */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design Opportinities
    </h4>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Based off the prioritized ideas, we visualized and implemented these solutions and designed a user flow and lo-fidelity wireframes to highlight users' 
      journey and key touchpoints that described tasks to help users accomplish goals
      and focused on the key functional aspects to test the specific user paths, respectively.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Image: User Flow/IA
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Testing, Validation, & Iterations
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Decisions
    </h4>

    <div className="mt-6">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Extra security layer for users to be protected against potential fraud.
    </p>
    <p>
      
    </p>
    </div>

    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Bank network notifications/alerts that helps users understand what is 
      going on at every point during a transaction
    </p>
    <p>
      
    </p>
    </div>

    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Type of card request and card activation process to ensure convenience and accommodate preference
    </p>
    <p>
      
    </p>
    </div>

    <div className="mt-11">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Setting up auto-payments to manage spending and track spending activities.
    </p>
    <p>
      
    </p>
    </div>
    </div>



    {/* Ideation, Decisions & Iterations */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Business Outcome & Impact
    </h4>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      This project is currently in the development stage and beta testing will commence afterwards. Join the waitlist here.
    </p>
    </div>




    {/* Key Takeaways ad Next Steps */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Takeaways & Next steps
    </h4>
    </div>


    </div>       
    </>
    )
}

export default Bridgecard

//Home and Next Project