import React from 'react'
import "./Navbar.css";
import imh1 from '../images/logomits.png'


function NavBar() {
  return (
    <div className='navbar'> 
    <a href="https://mgmits.ac.in/">
       <img className="logo" src={imh1}></img></a>
       <img className="nba" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nba.png"></img>
       <img className="nirf" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nirf-logo.png"></img>
       <img className="ariia" src="https:/mgmits.ac.in/wp-content/themes/muthoot/images/ariia_logo.jpg"></img>
       <a href="https://mdbootstrap.com/docs/standard/extended/login/" className='login'>LOGIN</a>
       <a href="https://mdbootstrap.com/docs/standard/extended/login/" className='signup'>SIGNUP</a>
       <h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1>
    </div>
  )
}

export default NavBar