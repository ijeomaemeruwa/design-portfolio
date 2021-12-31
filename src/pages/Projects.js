import React from 'react'
import {PROJECTS} from '../data/portfolio'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import Footer from '../sections/Footer'
// import designs from '../assets/images/cole-showcase.png'
// import art from '../assets/images/pixeltrue-design.png'

const Projects = () => {
    return (
    <section>
    
    <div className="md:flex md:justify-center md:items-center w-11/12 md:w-10/12 mx-auto">
    <div className="md:my-11 my-10 mx-auto flex flex-col justify-center w-11/12 md:w-8/12">
       <div className="pb-8 md:mt-11">
         <h2 className="text-dark text-4xl md:text-6xl font-poppins font-extrabold md:leading-tight tracking-tighter md:w-10/12 animate__animated animate__fadeInUp animate__fast">
           Selected projects
         </h2>
       </div>

       <div className="md:w-7/12 font-poppins mt-2 md:mt-4 mb-8 md:mb-11">
         <p className="text-dark font-light text-lg md:text-xl opacity-80 animate__animated animate__fadeInUp animate__fast animate__delay-1s">
         I design cross-platform digital products in multiple industries and open 
         to working on new, emerging technologies.
         </p>  
       </div>
    </div>

    {/* <div style={{maxWidth: '200px'}} className="md:mt-8 mt-3">
      <img src={art} alt="showcase" className="w-full animate__animated animate__fadeIn animate__fast animate__delay-1s" />
    </div> */}
    </div>

    <div className="flex flex-wrap w-full justify-center mx-auto mt-4">
        {
          PROJECTS.map(data => (
          <Link 
            key={data.id}
            to={data.link}>

          <Card>
            <img 
              src={data.image}  
              alt={data.title}
              className="w-full"
            />

            <div className="pt-8">
              <h4 className="font-poppins text-dark text-xl md:text-2xl font-semibold w-11/12 tracking-tight leading-tight">
                {data.title}
              </h4>
              <p className="font-dmono pt-6 tracking-tight leading-tight text-dark opacity-80 hover:text-blue">
                Read case study
              </p>
            </div>
          </Card>
        </Link>
        ))}  
     </div> 
     <Footer /> 
    </section>
    )
}

export default Projects
