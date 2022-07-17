import React from 'react'
import me1 from '../../Assets/me1.jpg';
import me2 from '../../Assets/me2.jpg';

const About = () => {
  return (
    <div>
      <section className='about'>
        <div className='about-me'>
          <p>Hi, I am <font color="#fc0e49" >Ugnius Tyla</font>  from Vilnius, Lithuania</p>
          <p>I have Civil engineering background and currently working as civil engineer, but I am trying to improve myself by learning <font color="#fc0e49" >Web development.</font></p>
          <p>Currently I'm learning <font color="#fc0e49" >React.js</font> framework.</p>
        </div>
        <img src={me1} alt="me1" className='image-cont' />
        <img src={me2} alt="me2" className='image-cont' />
      </section>
      <section>
        <div>Feeling good programming in this:</div>
      </section>
      <section>
        <div>Still learning programming in:</div>
      </section>

    </div>

  )
}

export default About