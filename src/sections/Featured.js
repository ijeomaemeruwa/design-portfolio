import React from 'react'
// import {ARTICLES} from '../data/articles'

const Featured = () => {
    return (
    <section className="h-full bg-dark">
    <div className="h-screen w-11/12 md:w-5/12 ml-10 flex flex-col justify-center items-center">
    
        <div className="text-white">
            <p className="font-dmono text-sm pb-3 font-light text-white opacity-80 tracking-widest">WRITING</p>
            <h4 className="font-manrope text-3xl font-medium">
              I also write technical / software documents, technical articles and design concepts.
            </h4>

        <button className="bg-green text-white mt-10 text-xs uppercase font-medium py-4 px-10 rounded-sm font-dmono tracking-wider">
          View work
        </button>
        </div>
        

        {/* <div className="w-10/12 md:mt-11">
        {
        ARTICLES.map(data => (
        <a href={data.link} target="_blank"  rel="noopener noreferrer" key={data.id}>
            <h5 className="font-manrope font-medium text-white text-base md:text-4xl pt-3 tracking-wider">
                {data.title}
            </h5>
            <p className="text-white text-sm md:text-base font-manrope pt-4">
                {data.publication}
            </p>
        </a>
        ))
        }  
        </div> */}

    </div>
    </section>
    )
}

export default Featured
