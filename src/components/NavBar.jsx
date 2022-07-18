import React, { useState, useEffect } from "react"
import {Link} from 'react-scroll'
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs"
import { BiPencil } from "react-icons/bi"

const NavBar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(0,0,0,0.7)") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="navbar-container" style={{backgroundColor: navColor, transition: "all 0.5s"  }} >
      <a className="logo" href="/">Ut.</a>
      <nav className="navbar">
        <Link className="nav-buttons" to="home" spy={true} smooth={true} offset={-100} duration={500} ><AiOutlineHome size={20} style={{padding: 2}}/>Home</Link>
        <Link className="nav-buttons" to="about" spy={true} smooth={true} offset={-64} duration={500}><BsFillPersonFill size={20} style={{padding: 2}}/>About</Link>
        <Link className="nav-buttons" to="projects" spy={true} smooth={true} offset={-64} duration={500}><AiOutlineFundProjectionScreen size={20} style={{padding: 2}}/>Projets</Link>
        <a className="nav-buttons" href="/"><BiPencil size={20} style={{padding: 2}}/>Resume</a>
        <a className="nav-buttons" href="https://github.com/UnisLTU"><RiGithubLine size={24} style={{padding: 2}} />GitHub</a>
      </nav >
    </div >
  );
}

export default NavBar;
