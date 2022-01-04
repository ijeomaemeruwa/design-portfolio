import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'
import research from '../assets/images/bridge-research.svg'
import insights from '../assets/images/bridge-insights.svg'
import hmw from '../assets/images/bridge-hmw.svg'
import persona from '../assets/images/bridge-persona.svg'
import testing from '../assets/images/bridge-testing criteria.svg'
import splash from '../assets/images/bridge-splash screen.svg'
import network from '../assets/images/bank-network.mp4'
import mount from '../assets/images/auto-mount .mp4'


import card from '../assets/images/card-request.mp4'
import security from '../assets/images/picture-password.mp4'
import Contact from '../pages/Contact'
import {Link} from 'react-router-dom'


// <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12"></div>


const Bridgecard = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Unifying the way we manage accounts & funds
      </h2>
    </Header>

    <div className="mb-8 mt-10">
      <img src={splash} loading='lazy' alt="splash screen"/> 
    </div> 


  <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    {/* Intro */}
    <div className="mb-10 flex justify-between flex-wrap w-10/12 md:w-10/12">
     <div className="mb-4 md:mb-0">
       <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">What I Did</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>Lead Product Designer</li>
         <li>UX Strategy</li>
         <li>Interactive prototyping</li>
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
      My Role
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      I led the product strategy and design from conception to implementation on a team of 3 and facilitated the design process
      from research to design handoff.
    </p>
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Challenges faced when handling multiple accounts/cards
    </h4>
     <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      An average Nigerian has about 2-6 bank accounts and 2-4 debit cards for these accounts. With the 
      rise in fintech apps building creative financial solutions tailored to meet people's specific needs, 
      people now have smart options that solve their financial problems or needs.
    </p>

    <p className="text-dark py-8 md:my-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     <b>The Challenges</b> with managing more than one card/accounts makes the process inconvenient for most people:
     <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>People get frustrated with incompetent bank services</li>
        <li className="mt-2">Unable to track spending</li>
        <li className="mt-2">Loss of debit cards</li>
      </ul>
    </p>

    <p className="text-dark md:pt-10 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
    <b>The Goal</b> was to design a secure, simple, and convenient way for users to manage funds, multiple bank accounts, 
      and digital wallets with one debit card.
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Understanding the Users and Validating Business endeavor
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We were introducing a completely new product to the Nigerian financial market, so to make sure we were solving the right 
      problem and validate our assumptions we set a criteria for target users and conducted user interviews. 
    </p>
    <div className="mb-8 mt-10">
      <img src={research} alt="user research goals"/> 
    </div>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Discovering Patterns & Insights
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From our user research data analysis, we identified key patterns from target users that gave us insights into the problem.
    </p>
    <div className="mb-8 mt-10">
       <img src={insights} alt="user research insights"/> 
    </div>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We also identified our <b>Target Persona</b> and relevant problems that needed to be solved.
    </p>
    <div className="mb-8 mt-10">
       <img src={persona} alt="user persona"/> 
    </div>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
       Defining the problem and Identifying opportunities
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      I collaborated with the engineering and design team to define <b>what we needed to solve</b> to imrove how users managed multiple accounts. 
      This way we were able to share ideas, get feedback, determine technical capabilities, and prioritize solutions.
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
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design Opportinities
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      After priorizing solutions, we visualized and implemented these solutions and designed a <b>user flow</b> and <b>low-fidelity</b> wireframes to highlight users' journey and key touchpoints that described tasks to help users accomplish goals
      and focused on the key functional aspects to test the specific user paths, respectively.
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Testing, Validation, & Iterations
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      To test and validate the hypothesis through low-fidelity wireframes, we conducted usability testing 
      to observe behavior and ask questions to help us understand their thoughts and feelings while using the product. 
    </p>
    <p className="text-dark mt-6 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Goals 
      <ul className="mt-2 md:leading-relaxed opacity-80 leading-relaxed list-disc">
        <li>To determine whether or not the users' needs are being met and whether the user experience is ideal.</li>
        <li className="mt-4">To measure usability and identify any issues in the user flow.</li>
      </ul>
    <div className="my-11">
      <img src={testing} alt="user testing criteria"/> 
    </div>
    </p>

    <p className="text-dark mt-6 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Insights & User Feedback
    </p>
    <p className="text-dark mt-2 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Based on user feedback, the design went through 3 iterations and yielded more positive feedback and 
      improved average duration & sucess rates before moving on to the high fidelity mockups for the MVP.
    </p>

     {/* <div className="mb-8 mt-10">
      <img src={testing} alt="user testing criteria"/> 
    </div> */}
    </div>
  </div>


  <div className="md:my-11 my-10 ">
    <div className="pt-10 mb-6 md:mt-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Decisions & Solutions
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      A single source of truth to help users easily and securely merge financial accounts and manage funds.
    </h3>
    </div>


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Extra security layer for users to be protected against potential fraud.
    </p>
    </div>
    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video src={security} controls loading="lazy" alt="password security prototype"/> 
    </div>
    


    <div className="py-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Bank network notifications/alerts that helps users understand what is 
      going on at every point during a transaction
    </p>
    </div>
    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video src={network} controls loading="lazy" alt="bank network prototype"/> 
    </div>
   


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Type of card request and card activation process to ensure convenience and accommodate preference
    </p>
    </div>
    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video src={card} controls loading="lazy" alt="card request prototype"/> 
    </div>
   


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark opacity-80 md:text-4xl md:w-11/12 text-xl font-neue md:leading-relaxed leading-relaxed">
      Setting up auto-payments to manage spending and track spending activities.
    </p>
    </div>
    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video src={mount} controls loading="lazy" alt="auto-payment" /> 
    </div>



    {/* Ideation, Decisions & Iterations */}
    <div className="pt-10 mb-6 md:mt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Business Outcome & Impact
    </h4>
    
    <p className="text-dark md:mt-4 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      This project is currently in the development stage and beta testing will commence afterwards. <a 
      href="https://bridgecard.co/" target="_blank"  rel="noopener noreferrer" className="text-blue">
        Join the waitlist here
      </a>
    </p>
    </div>




    {/* Key Takeaways ad Next Steps */}
    <div className="pt-10 mb-6 md:mt-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Takeaways & Next steps
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      As a first time lead, communication was a problem amongst the teams. 
      By prioritizing open communication, I was able to improve how the engineering & product team 
      collaborated at each step of the design process and shared ideas. 
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Creating a strategy for product development helped us validate business endaevor and make decisions that
      focused on aligning the user needs with business goals.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      <strong>Next steps:</strong> Beta-testing, Iterations, and Product launch.
    </p>
    </div>


    {/* Next & Previous */}
    <div className="flex justify-between items-center font-neue mx-auto w-11/12 md:w-8/12" style={{marginTop: "10rem", marginBottom: "3rem"}}>
      <Link to="/marble-wallet">
        <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Marble-wallet</h3>
      </Link>
      <Link to="/staple">
       <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
       <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">Staple</h3>
      </Link>
    </div>


    </div>    
    <Contact />   
    </>
    )
}

export default Bridgecard

//Home and Next Project
// className="flex flex-col text-right"
// bg-gray py-11 px-8 w-full rounded-lg