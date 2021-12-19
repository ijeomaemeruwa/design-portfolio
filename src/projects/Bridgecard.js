import React from 'react'
import Header from '../structure/Header'
import Overview from '../structure/Overview'

const Bridgecard = () => {
    return (
    <>
    <Header>
      <h2 className="text-dark text-3xl md:text-6xl font-neue font-medium md:leading-tight tracking-tighter md:w-10/12">
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
      An average Nigerian has about 2-6 bank accounts and 2-4 debit cards they use for all their accounts. With the 
      rise in fintech apps building creative financial solutions tailored to meet people's specific needs and provide 
      convenience, people now have smart options that solve their financial problems or needs.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The problem with handling more than one card is that people tend to have more than one accounts associated with these cards 
      and to get frustrated with incompetent bank services and loss. 
    </p>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      My Goal was to design a secure, simple, and convenient way for users to manage funds, multiple bank accounts, 
      and digital wallets with one debit card.
    </p>
    </div>
   


   {/* Approach & Process */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Understanding the Users and Validating the Problem
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      We were introducing a completely new product to the Nigerian financial market, so to make sure we were solving the right 
      problem and validate our assumptions we conducted user interviews to understand how users currently experience and solve 
      the problems they had with managing multiple accounts and cards with their banks or financial institutions.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Images: Target User Criteria, Research Goal, Research questions
    </p>
    </div>

    

    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Discovering Patterns & Insights
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From our user research data analysis, we identified key patterns from target users that gave us insights into the problem.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Images: Insights and Patterns
    </p>

    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      From the research data, we identified two groups of users that represented our target personas
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Image: Personas(2)
    </p>
    </div>



    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
       Defining the problem and Identifying opportunities
    </h4>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
       To define the problem we needed to solve for our target users, I organized a workshop with the engineering and design team to share ideas, 
       get feedback, determine technical capabilities, and prioritize solutions.
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      The ideas we came up with were based on the problems identified from each user, 
      which helped us discover opportunities and determine which ideas were worth pursuing:
    </p>
    <p className="text-dark mt-6 opacity-80 md:text-2xl text-xl font-neue md:w-10/12 md:leading-loose leading-relaxed">
      Image: Personas(2)
    </p>
    </div>



    {/* Ideation, Decisions & Testing */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Design
    </h4>
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Key Decisions
    </h4>
    </div>


    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Testing, Validation, & Iterations
    </h4>
    </div>



    {/* Ideation, Decisions & Iterations */}
    <div className="pt-10 mb-6 md:mt-11">
    <h4 className="text-dark pb-8 text-2xl md:text-5xl font-neue font-medium md:leading-tight tracking-tighter">
      Outcome
    </h4>
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