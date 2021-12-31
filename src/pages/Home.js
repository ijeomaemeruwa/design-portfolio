import React from 'react'
import {
    Hero,
    About,
    SelectedProjects,
    Footer
} from '../sections'

const Home = () => {
    return (
    <>
     <Hero />
     <About />
     <SelectedProjects 
       title="Selected Projects"
       id="projects"
     />
     <Footer />
    </>    
    )
}

export default Home
