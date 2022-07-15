import React, { useState, useEffect } from "react"
import "../style.css"
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs"
import { BiPencil } from "react-icons/bi"

function NavBar() {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("rgba(0,0,0,0.5)") : setnavColor("transparent");
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
        <a className="nav-buttons" href="/" ><AiOutlineHome size={20} style={{padding: 2}}/>Home</a>
        <a className="nav-buttons" href="/"><BsFillPersonFill size={20} style={{padding: 2}}/>About</a>
        <a className="nav-buttons" href="/"><AiOutlineFundProjectionScreen size={20} style={{padding: 2}}/>Projects</a>
        <a className="nav-buttons" href="/"><BiPencil size={20} style={{padding: 2}}/>Resume</a>
        <a className="nav-buttons" href="https://github.com/UnisLTU"><RiGithubLine size={24} style={{padding: 2}} />GitHub</a>
      </nav >
    </div >
  );
}

export default NavBar;
