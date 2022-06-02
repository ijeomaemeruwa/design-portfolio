import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'

import research from '../assets/images/bridge-research.svg'
import statistica from '../assets/images/statistica.png'
import persona from '../assets/images/bridge-persona.svg'
import splash from '../assets/images/splash screen-bridgecard.svg'
import journey from '../assets/images/bridge-user journey.svg'
import patterns from '../assets/images/bridge-patterns.svg'
import explore from '../assets/images/bridge-explore.svg'
import userflow from '../assets/images/bridge-flow.svg'

import security from '../assets/images/bridge-security.mp4'
import link from '../assets/images/link.mp4'
import request from '../assets/images/request.mp4'
import payments from '../assets/images/payments.mp4'
import expense from '../assets/images/expense.mp4'



import Contact from '../pages/Contact'
import {Link} from 'react-router-dom'


// <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12"></div>


const Bridgecard = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
        Bridgecard Mobile App
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
         <li>Product Design</li>
         <li>UX Strategy</li>
         <li>Interactive prototyping</li>
         <li className="md:pt-8">
          <a 
          href="https://bridgecard.co/" target="_blank"  rel="noopener noreferrer" className="text-blue">
            VIEW WEBSITE
          </a>
        </li>
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
         <li>2021</li>
       </ul>
     </div>
     <div className="mb-4 md:mb-0">
     <h4 className="font-neue font-medium pb-2 text-base md:text-xl text-dark">Industry</h4>
       <ul className="font-neue text-dark opacity-70 text-lg leading-loose">
         <li>FinTech</li>
         <li>B2C</li>
       </ul>
     </div>
    </div>





    {/* Overview */}
    <Overview>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Providing one debit card to merge and control finances, conveniently.
    </h3>
    
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      Bridgecard is a FinTech startup that gives you one debit card and one mobile app 
      to easily manage payments and withdraw from any bank account, anywhere in the world. 
    </p>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      I led the design for the mobile product and was tasked with designing the end-to-end experience while managing two other designers.
    </p>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      We designed a mobile solution and physical/virtual debit card that was launched and 
      led to pre-seed funding of $440k and an increase in virtual card use 2 months post launch. 
    </p>
    </Overview>






    {/* The Problem */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      Challenges regarding the use of multiple debit cards
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      An average Nigerian has about 2-6 bank accounts and a debit card for each of these accounts.
    </h3>

    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      Handling multiple debit cards along with it's geographical and institutional challenges led to a 
      decline in card payments despite 73.2% of Nigerians having active Nigerian bank accounts. Due to these, users
      face several challenges such as:
      <ul className="mt-6 md:leading-relaxed md:text-2xl text-xl text-dark leading-relaxed list-disc">
        <li>Incompetent traditional bank services.</li>
        <li className="mt-2">Unable to track payments and spending.</li>
        <li className="mt-2">Loss or fraud.</li>
      </ul>
    </p>
    </div>
    <div className="mb-8 mt-10">
      <img src={statistica} loading='lazy' alt="statistica report"/> 
      <p className="font neue md:text-sm text-gray2">Image from <a href="https://www.statista.com/topics/7133/payment-methods-in-nigeria/#dossierContents__outerWrapper">Statistica report in 2021</a></p>
    </div> 






    {/* The Goal */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      The Goal
    </h4>
    <p className="text-dark opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed pb-6">
      With this secondary data and assumptions about the problem, we found that an opportunity was 
      waiting to be explored and the goal was to:
    </p>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      Design a simple, secure, and convenient way for users to manage payments and funds with one debit card.
    </h3>
    </div>
   




   {/* Approach & Process */}

    {/* Research */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Understanding the Users and Validating Business endeavor
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We were introducing a completely new product to the Nigerian/African financial market, and the only other solution available
      was Curve, which is restricted to Europe and America. 
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed"> 
      So to make sure we were solving the right problem and validate our assumptions we kicked things off by conducting one-on-one user 
      interviews to get contextual qualitative data about the problems/motivations, understand current behavior, and validate market fit.
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We interviewed 20 participants with the criteria being that users had at least 2 bank accounts, 2 debit cards and used smartphones.
    </p>
    <div className="mb-8 mt-10">
      <img src={research} alt="research goals and questions"/> 
    </div>
    </div>





   {/* Research Highlight */}
    <div className="pt-10 mb-6 md:mt-11">
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      "17/20 users used one out of multiple cards, actively. Reasons ranged from preventing loss, transaction charges and tracking expenses. Thereby validating market fit"
    </h3>
    </div>





   {/* Analyse and Define */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Identifying Patterns & Opportunities
    </h4>
    
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From our user research data analysis, we identified our target persona which helped us validate 
      target user and visualize the path users currently took to solve their problems.
    </p>
    <div className="mb-8 mt-10">
       <img src={persona} alt="persona"/> 
    </div>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     To design a holistic solution that efficiently tackled this problem it was important for us to understand how users currently managed 
     finances and debit cards.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     So to achieve this, the design team collaborated with the PM and engineers to create a users' journey based on 
     interview stories and mapped pain points onto the journey once we had defined our target persona.
    </p>
    <div className="mb-8 mt-10">
       <img src={journey} alt="user journey map"/> 
    </div>
    </div>




    {/* Requirements */}
     <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 pt-8 text-2xl md:text-5xl font-neue font-semibold md:leading-tight tracking-tighter">
      Design Requirements
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
     Telling a story about the problems and expectations of the user gave us insights into their pain points and allowed us 
     identify patterns for design opportunities and requirements that would prioritize user needs.
    </p>
    <div className="mb-8 mt-10">
      <img src={patterns} alt="key patterns"/> 
    </div>
    </div>




    {/* Design and Validation */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark md:pb-8 pb-6 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Exploring design ideas and solutions.
    </h4>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      After identifying key requirments to solve the problems, we designed the information architecture to 
      help us bring our ideas to life and explored various solutions that was tested with our main goals to:
      <ul className="mt-2 md:leading-relaxed opacity-80 leading-relaxed list-disc">
        <li>Determine whether or not the users' needs are being met.</li>
        <li className="mt-4">Determine whether the user experience is ideal.</li>
        <li className="mt-4">Measure usability and identify any issues in the user flow.</li>
      </ul>
    </p>
    </div>
    <div className="mb-8 mt-10">
      <img src={userflow} alt="user flow"/> 
    </div>


  <div className="pt-10 mb-6 md:mt-11">
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Based on user feedback, the design went through 2 iterations and yielded more positive feedback. We improved average duration 
      to complete onboarding and linking an account/card & navigation issues before moving on to the high fidelity mockups for the MVP.
    </p>
    </div>
  </div>
  <div className="mb-8 mt-10">
    <img src={explore} alt="explorations-splash screen"/> 
  </div>


 


   
  {/* Final Output */}
  <div className="md:my-11 my-10 ">
    <div className="pt-10 mb-6 md:mt-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Final Decisions & Solutions
    </h4>
    <h3 className="text-dark opacity-50 md:text-5xl md:py-11 font-medium md:w-11/12 text-xl font-neue md:leading-tight leading-relaxed">
      A mobile app that allows users manage finances and payments without switching banks/cards.
    </h3>
    </div>


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
      Security and KYC
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Users can quickly set up their accounts within 2 minutes to get started.
      Bridgecard enables users to enter BVN and create a PIN or set up biometrics to verify any transaction and avoid fraud.
    </p>
     {/* <div className="mb-8 mt-10 flex mx-auto justify-center">
      <img src="https://media.giphy.com/media/3w4eXeLCpnzlZ7I16i/giphy.gif" loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div> */}
    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video controls src={security} loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div>
    </div>

    


    <div className="py-11 md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
      Link card/account
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      To link an account, users can easily enter card or internet banking details and confirm using OTP sent by the bank to the registered bank email.
    </p>
    {/* <div className="mb-8 mt-10 flex mx-auto justify-center">
      <img src="https://media.giphy.com/media/46WVhM6g6w4WoOxjQX/giphy.gif" loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div> */}

    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video controls src={link} loading="lazy" alt="link card/account" className='prototype'/>
    </div>
    </div>
    
   


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
     Card request and activation
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Once users request a card, they can quickly activate it from the mobile application without visiting a bank. This solves the problem of visiting physical branches or joining long queues.
    </p>
    {/* <div className="mb-8 mt-10 flex mx-auto justify-center">
      <img src="https://media.giphy.com/media/TNJ4lQ9pWv5vVb2UwD/giphy.gif" loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div> */}

    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video controls src={request} loading="lazy" alt="card request" className='prototype'/>
    </div>
    </div>
   


    <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
      International transactions and limits
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From research, a common problem faced by 90% of users was the limitations that come 
      with using bank debit cards when performing international transactions. With bridgecard, 
      users can make payments globally on a monthly cap of $10k.
    </p>
    {/* <div className="mb-8 mt-10 flex mx-auto justify-center">
      <img src="https://media.giphy.com/media/PHw26mlgoWZf40rGat/giphy.gif" loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div> */}

    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video controls src={payments} loading="lazy" alt="card payments" className='prototype'/>
    </div>
    </div>
   


   <div className="py-11 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
    <p className="text-dark md:text-4xl md:w-11/12 text-xl font-neue font-semibold md:leading-relaxed leading-relaxed">
      Expense tracking
    </p>
    <p className="text-dark md:mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Users can track what they spent on any bridgecard and monitor expenses or charges. This solves the problem of getting unnecessary alerts on bank charges that can't be tracked and allow users to stay on budget.
    </p>
    {/* <div className="mb-8 mt-10 flex mx-auto justify-center">
      <img src="https://media.giphy.com/media/qZPqYk861YjHssYLOy/giphy.gif" loading="lazy" alt="security and kyc prototype" className='prototype'/>
    </div> */}

    <div className="mb-8 mt-10 flex mx-auto justify-center">
      <video controls src={expense} loading="lazy" alt="card expenses" className='prototype'/>
    </div>
    </div>
   




  {/* Key Takeaways and Learnings */}
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
      Creating a strategy for product development helped us save time and resources, validate business endaevor and make decisions that
      focused on aligning the user needs with business goals.
    </p>
    </div>







  {/* Next & Previous */}
    <div className="flex justify-between items-center font-neue mx-auto w-11/12 md:w-8/12" style={{marginTop: "10rem", marginBottom: "3rem"}}>
      <Link to="/kiwi">
        <p className="text-xs md:text-sm pb-2 opacity-80">Previous</p>
        <h3 className="text-xl md:text-5xl font-medium hover:text-blue cursor-pointer">KIWI</h3>
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
