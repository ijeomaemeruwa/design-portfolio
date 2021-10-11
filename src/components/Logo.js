import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/small-logo.png'

// {/* <h2 className="font-righteous text-dark text-6xl text-grey font-extrabold tracking-tighter hover:text-blue">
//        a
//     </h2> */}

const Logo = () => {
return (
    <div style={{maxWidth: "100px"}}>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>  
    </div>
)
}

export default Logo
