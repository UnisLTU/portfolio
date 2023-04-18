import React, { useEffect } from 'react'
import me1 from '../../Assets/me1.jpg';
import me2 from '../../Assets/me2.jpg';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiGit } from 'react-icons/di'
import { SiTypescript, SiTailwindcss, SiStrapi } from "react-icons/si"
import { TbBrandFirebase, TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import GitHubCalendar from 'react-github-calendar';
import Aos from 'aos';
import "aos/dist/aos.css"
import styles from "./About.module.css";



const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200, once: true })
  })


  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.about_me}>
          <p>Hi, I am <font color="#fc0e49">Ugnius Tyla</font> self taught developer from Vilnius, Lithuania</p>
          <p>I have Civil engineering background and currently working as civil engineer. Beside full-time job I am trying to improve myself by learning <font color="#fc0e49" >Web development.</font></p>
          <p>Currently I'm learning <font color="#fc0e49" >TypeScript</font>, but I'm <font color="#fc0e49" >always ready</font> to learn more in web development field.</p>
        </div>
        <img src={me1} alt="me1" className={styles.image_container} />
        <img src={me2} alt="me2" className={styles.image_container} />
      </section>
      <section className={styles.skillset}>
        <div data-aos="zoom-out-up">
          <div style={{ display: "flex", justifyContent: "center" }}>Skillset</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.skillset_container}><AiFillHtml5 size={50} />HTML5</div>
            <div className={styles.skillset_container}><DiCss3 size={50} />CSS3</div>
            <div className={styles.skillset_container}><DiJavascript1 size={50} />JavaScript(ES6)</div>
            <div className={styles.skillset_container}><DiGit size={50} />Git</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}><div className={styles.skillset_container}><DiReact size={50} />React</div>
            <div className={styles.skillset_container}><SiTailwindcss size={50} />TailwindCSS</div>
            <div className={styles.skillset_container}><TbBrandNextjs size={50} />Next.js</div>
            <div className={styles.skillset_container}><TbBrandFirebase size={50} />Firebase</div>
          </div>
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="500">
          <div style={{ display: "flex", justifyContent: "center" }}>Learning ATM</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.skillset_container}><SiTypescript size={50} />Typescript</div>
            <div className={styles.skillset_container}><SiStrapi size={50} />Strapi</div>
          </div>
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="500" style={{ display: "flex", justifyContent: "center" }}>
          <div id={styles.calender}>
            <div id={styles.contributions}>My contributions</div>
            <GitHubCalendar username="UnisLTU" color="#fc0e49" />
          </div>
        </div>
      </section>
    </>

  )
}

export default About