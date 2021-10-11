import React from 'react'
import {Link} from 'react-router-dom'
// import {
//     AiFillLinkedin,
//     AiFillTwitterSquare, 
//     AiFillFacebook
//   } from 'react-icons/ai'
import {StyledMenu} from './MobileNav.styled'


const MobileNav = ({open, toggle}) => {
    return (
    <StyledMenu open={open} onClick={toggle}>
    <div className="flex flex-col text-4xl font-neue text-white mt-11">
        
    {/* <Link to="/" className="mb-7 mt-11 hover:text-blue tracking-tighter" onClick={toggle}>
        Home
    </Link> */}

    <Link to="/about-me" className="mt-11 mb-9 hover:text-blue tracking-tighter" onClick={toggle}>
        About
    </Link>

    {/* <Link to="/projects" className="mb-7 mt-3 hover:text-blue tracking-tighter" onClick={toggle}>
        Projects
    </Link> */}

    <li className="my-9 list-none hover:text-blue tracking-tighter" onClick={toggle}>
        <a href="https://helloijeoma.medium.com/" 
           target="_blank"  rel="noopener noreferrer">
            Blog 
        </a>
    </li>

    <li className="my-9 list-none hover:text-blue tracking-tighter" onClick={toggle}>
        <a href="mailto:helloijeoma@gmail.com" 
           target="_blank"  rel="noopener noreferrer">
            Contact 
        </a>
    </li>
   
    </div>   
    </StyledMenu>
    )
}

export default MobileNav
