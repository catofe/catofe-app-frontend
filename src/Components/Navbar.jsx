import React, {Children, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-logo'>Catofe</a>
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/Order">Order</CustomLink>
        <CustomLink href="/Profile">Profile</CustomLink>
      </ul>
    </nav>
  )

  
}

function CustomLink({href, children, ...props}){
  const path = window.location.pathname
  return(
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  )
}
export default Navbar
