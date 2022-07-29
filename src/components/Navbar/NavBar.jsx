import React, { useState, useEffect } from "react"
import { Link } from 'react-scroll'
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillPersonFill } from "react-icons/bs"
import { MdOutlineConnectWithoutContact } from "react-icons/md"
import styles from "./NavBar.module.css"

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
    <div className={styles.navbar_container} style={{ backgroundColor: navColor, transition: "all 0.5s" }} >
      <a className={styles.logo} href="/">Ut.</a>
      <nav className={styles.navbar}>
        <Link className={styles.nav_buttons} to="home" spy={true} smooth={true} offset={-100} duration={500} ><AiOutlineHome size={20} style={{ padding: 2 }} />Home</Link>
        <Link className={styles.nav_buttons} to="about" spy={true} smooth={true} offset={-64} duration={500}><BsFillPersonFill size={20} style={{ padding: 2 }} />About</Link>
        <Link className={styles.nav_buttons} to="projects" spy={true} smooth={true} offset={-64} duration={500}><AiOutlineFundProjectionScreen size={20} style={{ padding: 2 }} />Projects</Link>
        <Link className={styles.nav_buttons} to="contact" spy={true} smooth={true} offset={-64} duration={500}><MdOutlineConnectWithoutContact size={20} style={{ padding: 2 }} /> Contact </Link>
        <a className={styles.nav_buttons} href="https://github.com/UnisLTU"><RiGithubLine size={24} style={{ padding: 2 }} />GitHub</a>
      </nav >
    </div >
  );
}

export default NavBar;
