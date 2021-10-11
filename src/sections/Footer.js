import React from 'react'
import Logo from '../components/Logo'
//import bird from '../assets/images/cole-message-sent.png'


const Footer = () => {
    return (
    <section className="h-full bg-white font-neue font-semibold">
    <div>
         <div className="bg-lightblue flex flex-col justify-center items-center mx-auto p-11 rounded-2xl mt-10" style={{maxWidth: "1150px", height: "400px"}}>

          <p className="font-neue text-dark pb-6 font-normal opacity-80">Lets work together &#9889;</p>
          <h6 className="pb-11 text-4xl sm:text-6xl md:text-6xl font-medium text-dark w-11/12 md:w-6/12 text-center tracking-tighter sm:leading-tight md:leading-tight">
            Have a project you want to talk about?
          </h6>
          <a href="mailto:helloijeoma@gmail.com" 
             target="_blank"  rel="noopener noreferrer">
            <button className="bg-dark text-white md:text-base text-sm py-3 px-6 md:py-4 md:px-8 font-neue rounded-lg tracking-tight">
             Send a message
            </button>
          </a>
          </div>


          <div className="md:flex mx-auto my-11 justify-between md:w-9/12 w-10/12">
          <Logo />

          <div className="md:flex">

           <div className="mt-6 md:mt-0 mx-0 md:mx-11">
           <p className="pb-2 md:text-lg text-base font-medium font-neue tracking-tighter">Follow me</p>
            <ul className="md:text-lg text-base text-dark font-normal opacity-70">
            <li className="pb-2 hover:opacity-100 hover:text-blue">
              <a href="https://www.behance.net/helloijeoma" 
                target="_blank"  rel="noopener noreferrer">
                Dribbble
              </a>
            </li>
            <li className="pb-2 hover:opacity-100 hover:text-blue">
              <a href="https://www.behance.net/helloijeoma" 
                target="_blank"  rel="noopener noreferrer">
                Behance
              </a>
            </li>
            <li className="pb-2 hover:opacity-100 hover:text-blue">
              <a href="https://helloijeoma.medium.com/" 
                target="_blank"  rel="noopener noreferrer">
                Medium 
              </a>
            </li>
            <li className="hover:opacity-100 hover:text-blue">
              <a href="https://github.com/ijeomaemeruwa" 
                target="_blank"  rel="noopener noreferrer">
                GitHub 
              </a>
            </li>
           </ul>
          </div>

          <div className="mx-0 md:mx-11 mt-6 md:mt-0">
           <p className="md:text-lg text-base pb-2 font-medium font-neue tracking-tighter">Connect</p>  
           <ul className="md:text-lg text-base text-dark font-normal opacity-70">
           <li className="pb-2 hover:opacity-100 hover:text-blue">
              <a href="mailto:helloijeoma@gmail.com" 
                target="_blank"  rel="noopener noreferrer">
                Email 
              </a>
            </li>
            <li className="pb-2 hover:opacity-100 hover:text-blue">
              <a href="https://www.linkedin.com/in/ijeoma-emeruwa/" 
                target="_blank"  rel="noopener noreferrer">
                LinkedIn 
              </a>
            </li>
            <li className="hover:opacity-100 hover:text-blue">
              <a href="https://twitter.com/helloijeoma?lang=en" 
                target="_blank"  rel="noopener noreferrer">
                Twitter 
              </a>
            </li>
           </ul>
          </div>

       </div>
      </div>
             
    </div> 
    </section>
    )
}

export default Footer
