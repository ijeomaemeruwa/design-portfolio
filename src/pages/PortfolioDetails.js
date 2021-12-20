// import React from 'react'
// import {useParams} from 'react-router-dom'
// import splash from '../assets/images/MacBook Pro - 2.png'
// // import {HiOutlineLightBulb} from 'react-icons/hi'

// const PortfolioDetails = ({data}) => {
//     const {projectId} = useParams();
//     const project = data.find(project => project.title === projectId)

//     return (
//         <section>

//         <div className="flex flex-col mx-auto w-11/12 md:w-8/12 mt-2 md:mt-11"  style={{marginTop: "70px"}}>
//             <p className="text-blue font-dmono font-regular md:font-medium md:text-base text-sm tracking-tighter mb-4 md:mb-4 ml-1 mr-0">
//               {project.tag}
//             </p>
        
//             <h2 className="text-dark text-2xl md:text-5xl font-poppins font-extrabold md:leading-tight tracking-tighter md:w-9/12">
//               {project.title}
//             </h2>
//         </div>

//         <div className="mt-11 w-full h-full">
//             <img src={splash} alt="splash" />
//         </div>
        
//         <div className="flex flex-col mx-auto w-11/12 md:w-8/12 mt-10 md:mt-11">
//             <p className="text-blue font-dmono font-regular md:font-medium md:text-base text-sm tracking-tighter mb-4 md:mb-4 ml-1 mr-0">
//              Overview
//             </p>
//             <h2 className="text-dark text-base md:text-xl font-manrope md:w-10/12">
//              {project.overview}
//             </h2>
//         </div>

         
//         </section>
//     )
// }

// export default PortfolioDetails
