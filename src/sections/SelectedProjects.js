import React from 'react'
import {PROJECTS} from '../data/portfolio'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
// import ui from '../assets/images/Frame 11.jpg'
//import ui from '../assets/images/behance.svg'

//  {/* <div className="pt-8">
//       <h4 className="font-poppins text-dark text-xl md:text-2xl font-semibold w-11/12 tracking-tight leading-tight">
//           {data.title}
//        </h4>
//        <p className="font-dmono pt-6 tracking-tight leading-tight text-dark opacity-80 hover:text-blue">
//           Read case study
//        </p>
//        </div> */}

// {{pathname: `/project/${data.project}`}}

//items-center

// {/* <div className="m-auto" style={{marginTop: "50px", marginBottom: "100px"}}>
    
//     <div className="md:mb-11 flex flex-col">
//          <p className="font-neue text-dark text-sm pb-3 font-regular">MY WORK</p>
//          <h2 className="text-dark font-neue text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
//            Selected Projects
//          </h2>
//     </div> */}



const SelectedProjects = () => {
    return (
    <section id="projects">
    <div>

    <div className="md:flex md:justify-center md:items-center w-11/12 md:w-10/12 mx-auto">
    <div className="mx-auto flex flex-col justify-center w-full md:w-10/12 mt-11 md:mt-0">
    <div className="md:pb-4 mt-11">
      <div className="font-neue font-medium bg-gray py-1 px-3 sm:pl-7 md:px-2 w-3/12 sm:w-2/12 md:w-1/12 rounded-full mb-3 md:mt-11">
        <p className="text-sm md:text-base">&#9889; Work</p>
      </div>
     <h2 className="text-dark text-3xl md:text-7xl font-neue font-medium md:leading-tight md:tracking-tight md:w-9/12 animate__animated animate__fadeInUp animate__fast">
     Selected Projects
     </h2>
   </div>
   </div> 
   </div>
        
    <div className="flex flex-wrap w-full justify-center mx-auto">
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
             <div className="pt-8 pb-11">
            <h3 className="font-neue font-semibold text-dark md:text-3xl text-2xl pb-3">
              {data.title}
            </h3>
            <p className="font-neue font-normal opacity-60 text-dark md:text-xl text-sm pb-3">
             {data.subtitle}
            </p>
            <button className="bg-gray text-dark md:text-base text-sm mt-2 md:mt-4 py-2 px-5 md:py-3 md:px-7 font-neue font-normal rounded-lg hover:opacity-80 animation">
              {data.lead}
            </button>
          </div>
          </Card>

        </Link>
        ))
        }  

      {/* <a href="https://www.behance.net/helloijeoma" 
         target="_blank"  rel="noopener noreferrer">
       <Card>
       <img src={ui} alt="ui-explorations" />
       </Card>
      </a> */}
      </div>

    </div> 
    </section>
    )
}

export default SelectedProjects
