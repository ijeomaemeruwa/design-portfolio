import React, {useState, useRef} from 'react'
import Logo from '../Logo'
import Burger from '../NavBar/Burger/Burger'
import MobileNav from '../NavBar/MobileNav/MobileNav';
import { useOnClickOutside } from '../../hooks';
import {NavLink} from 'react-router-dom'


const Nav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const toggle = () => {
    setOpen(!open);
  }


    return (
      <nav className="h-24 bg-white nav">
        <div className="flex justify-between h-24 w-11/12 md:w-9/12 pb-2 m-auto nav_container items-center lg:items-end">
          <Logo />

          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <MobileNav open={open} setOpen={setOpen} toggle={toggle} />
          </div>


          <div className="font-neue text-lg font-regular hidden lg:flex justify-center items-center list-none text-dark pb-3">
            {/* <li className="mx-6">
               <NavLink activeClassName="active" to="/">
                Home
               </NavLink>
             </li> */}
             
             <li className="mx-6 hover:text-blue">
               <NavLink activeClassName="active" to="/about-me">
                About
               </NavLink>
             </li>

             <li className="mx-6 hover:text-blue">
             <a href="https://helloijeoma.medium.com/" 
                target="_blank"  rel="noopener noreferrer"
              >
                Blog 
             </a>
             </li>

             
             <li className="mx-6 hover:text-blue">
             <a href="mailto:helloijeoma@gmail.com" 
                target="_blank"  rel="noopener noreferrer"
              >
                Contact 
             </a>
             </li>
          
        </div>
        </div> 
      </nav>
    )
}

export default Nav
