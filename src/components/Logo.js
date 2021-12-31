import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'


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
