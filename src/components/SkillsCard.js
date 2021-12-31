import React from 'react'

//width: "250px", height: "100px", 

const SkillsCard = ({children}) => {
    return (
    <div 
        className="bg-dark py-4 md:py-6 px-10 mb-11 mx-2 rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-100" 
        style={{boxShadow: "2px 4px 20px rgba(148, 154, 175, 0.15)"}}
      >
        <div className="w-full h-full flex flex-wrap items-center justify-center">
          <h3 className="text-base md:text-2xl font-poppins font-bold tracking-tight text-white opacity-80">
            {children}
          </h3>
        </div>
      </div> 
    )
}

export default SkillsCard
