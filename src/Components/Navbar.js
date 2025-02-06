import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import resume from '../assets/resume.pdf'
import{FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
  const [click,setClick] = useState(false)
  const handelClick = ()=>setClick(!click)
  const[color,setColor] = useState(false)
  const changeColor =()=>{
    if (window.scrollY >=100) {
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)
  return (
    <div className={click? ' header header-bg':'header'}>
      <Link to="/">
        {" "}
        <h1>Portfolio</h1>
      </Link>
      <ul className={click? 'nav active':'nav'}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
        <a href={resume} download className="bg-purple-600 text-white px-6 py-2 rounded-lg mt-20">
        ⬇ Download CV
      </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handelClick}>
        {click?( <FaTimes size={20} style={{color:"#fff"}}/>):( <FaBars size={20} style={{color:"#fff"}}/>)}
       
       
      </div>
    </div>
  );
};

export default Navbar;
