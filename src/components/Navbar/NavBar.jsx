import React, { useState, useEffect } from "react"
import { Link } from 'react-scroll'
import { RiGithubLine } from 'react-icons/ri'
import styles from "./NavBar.module.css"

const NavBar = () => {
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1d1d1d") : setnavColor("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  const links = [
    {
      to: "home",
      offset: -100,
      title: "Home"
    },
    {
      to: "about",
      offset: -64,
      title: "About"
    },
    {
      to: "projects",
      offset: -64,
      title: "Projects"
    },
    {
      to: "contact",
      offset: -64,
      title: "Contact"
    },
  ];


  return (
    <div className={styles.navbar_container} style={{ backgroundColor: navColor }} >
      <a className={styles.logo} href="/">Ut.</a>
      <nav className={styles.navbar}>
        {links.map(link => (<Link className={styles.nav_buttons} to={link.to} spy={true} smooth={true} offset={link.offset} duration={500} >{link.title}</Link>))}
        <a className={styles.nav_buttons} href="https://github.com/UnisLTU"><RiGithubLine size={24} style={{ padding: 2 }} />GitHub</a>
      </nav >
    </div >
  );
}

export default NavBar;
