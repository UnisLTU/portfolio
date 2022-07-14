import React from "react";
import "../style.css"
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs"
import { BiPencil } from "react-icons/bi"

function NavBar() {
  return (
    <div className="nav-bar-container">
      <a className="logo" href="/">Ut.</a>
      <nav className="navbar">
        <a className="nav-buttons"  href="/" ><AiOutlineHome size={20} style={{padding: 2}}/>Home</a>
        <a className="nav-buttons" href="/"><BsFillPersonFill size={20} style={{padding: 2}}/>About</a>
        <a className="nav-buttons" href="/"><AiOutlineFundProjectionScreen size={20} style={{padding: 2}}/>Projects</a>
        <a className="nav-buttons" href="/"><BiPencil size={20} style={{padding: 2}}/>Resume</a>
        <div className="nav-buttons" href="/"><RiGithubLine size={24} style={{padding: 2}} />GitHub</div>
      </nav >
    </div >
  );
}

export default NavBar;
