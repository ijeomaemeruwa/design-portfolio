import React from 'react'


const Contact = () => {
    return (
    <section className="h-full bg-white font-neue font-semibold">
    <div>
         <div className="bg-lightblue flex flex-col justify-center items-center mx-auto p-11 rounded-2xl my-10" style={{maxWidth: "1150px", height: "400px"}}>
          <p className="font-neue text-dark pb-6 font-normal opacity-80">Lets work together &#9889;</p>
          <h6 className="pb-11 text-4xl sm:text-6xl md:text-6xl font-medium text-dark w-11/12 md:w-6/12 text-center tracking-tighter sm:leading-tight md:leading-tight">
            Have a project you want to talk about?
          </h6>

          <a href="mailto:helloijeoma@gmail.com" 
             target="_blank"  rel="noopener noreferrer">
            <button className="bg-dark text-white md:text-base text-sm py-3 px-6 md:py-4 md:px-10 font-neue rounded-lg">
             Send a Message
            </button>
          </a>
          </div>
      </div>
    </section>
    )
}

export default Contact

