import React from 'react'
import me1 from '../../Assets/me1.jpg';
import me2 from '../../Assets/me2.jpg';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiGit } from 'react-icons/di'
import { SiTypescript, SiTailwindcss, SiStrapi } from "react-icons/si"
import { TbBrandFirebase, TbBrandNextjs } from 'react-icons/tb'
import GitHubCalendar from 'react-github-calendar';
import "aos/dist/aos.css"
import styles from "./About.module.css";

const About = () => {
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
        <div>
          <title className={styles.skillsetCenter}>Skillset</title>
          <div className={styles.skillsetCenter}>
            <figure className={styles.skillset_card}><AiFillHtml5 size={50} />HTML5</figure>
            <figure className={styles.skillset_card}><DiCss3 size={50} />CSS3</figure>
            <figure className={styles.skillset_card}><DiJavascript1 size={50} />JavaScript(ES6)</figure>
            <figure className={styles.skillset_card}><DiGit size={50} />Git</figure>
          </div>
          <div className={styles.skillsetCenter}><div className={styles.skillset_card}><DiReact size={50} />React</div>
            <figure className={styles.skillset_card}><SiTailwindcss size={50} />TailwindCSS</figure>
            <figure className={styles.skillset_card}><TbBrandNextjs size={50} />Next.js</figure>
            <figure className={styles.skillset_card}><TbBrandFirebase size={50} />Firebase</figure>
          </div>
        </div>
        <div>
          <title className={styles.skillsetCenter}>Learning ATM</title>
          <div className={styles.skillsetCenter}>
            <figure className={styles.skillset_card}><SiTypescript size={50} />Typescript</figure>
            <figure className={styles.skillset_card}><SiStrapi size={50} />Strapi</figure>
          </div>
        </div>
        <div className={styles.skillsetCenter}>
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