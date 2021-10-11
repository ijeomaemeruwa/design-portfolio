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
       title="SelectedProjects"
       id="selectedprojects"
     />
     <Footer />
    </>    
    )
}

export default Home
