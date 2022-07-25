import React, { useEffect } from 'react'
import me1 from '../Assets/me1.jpg';
import me2 from '../Assets/me2.jpg';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiSass, DiNpm } from 'react-icons/di'
import { FaNode, FaBootstrap } from 'react-icons/fa'
import GitHubCalendar from 'react-github-calendar';
import Aos from 'aos';
import "aos/dist/aos.css"


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200, once: true })
  })
  return (
    <>
      <section className='about' id="about">
        <div className='about-me'>
          <p>Hi, I am <font color="#fc0e49" >Ugnius Tyla</font>  from Vilnius, Lithuania</p>
          <p>I have Civil engineering background and currently working as civil engineer, but I am trying to improve myself by learning <font color="#fc0e49" >Web development.</font></p>
          <p>Currently I'm learning <font color="#fc0e49" >React.js</font> framework.</p>
        </div>
        <img src={me1} alt="me1" className='image-cont' />
        <img src={me2} alt="me2" className='image-cont' />
      </section>
      <section className='skillset'>
        <div data-aos="zoom-out-up">
          <div style={{ display: "flex", justifyContent: "center" }}>Skillset:</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AiFillHtml5 className='skillsetcon' />
            <DiCss3 className='skillsetcon' />
            <DiJavascript1 className='skillsetcon' />
            <DiNpm className='skillsetcon' />
            <FaBootstrap className='skillsetcon' />
          </div>
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="500">
          <div style={{ display: "flex", justifyContent: "center" }}>Learning atm:</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DiReact className='skillsetcon' />
            <FaNode className='skillsetcon' />
            <DiSass className='skillsetcon' />
          </div>
        </div>
        <div data-aos="zoom-out-up" data-aos-delay="500" style={{ display: "flex", justifyContent: "center"}}>
          <div id='calender'>
            <div id='contributions'>My contributions</div>
            <GitHubCalendar username="UnisLTU" color="#fc0e49" />
          </div>
        </div>
      </section>
    </>

  )
}

export default About