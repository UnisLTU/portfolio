import React from 'react'
import styles from "./Projects.module.css"
import portfolio from '../../Assets/port.PNG';

function Projects() {
  return (
    <>
      <div className={styles.projects_container} id="projects">
        Projects' timeline:
      </div>
      <div className={styles.project_name}> My first portfolio</div>
      <div className={styles.project_date}>2022.08</div>
      <div className={styles.divider_container}>
      <img src={portfolio} alt="image1" />
        <div className={styles.divider}></div>
        <div className={styles.text_container}>
          <p>My first personal portfolio website created with React.js and CSSModules.
          </p>
          <a className={styles.alternate1} href="/">To Project</a>
          <div className={styles.frameworks}> React | CSSModules </div>
        </div>
      </div>
      <div className={styles.project_name}>Second project</div>
      <div className={styles.project_date}>2022....</div>
      <div className={styles.divider_container}>
        <div className={styles.text_container}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae perferendis sint molestias consequuntur dolorum blanditiis quaerat doloribus harum distinctio, quo, laborum enim, dolores tempore? In libero excepturi consequatur molestias a.</p>
          <a className={styles.alternate2} href="/">To Project</a>
          <div className={styles.frameworks}> React | CSSModules </div>
        </div>
        <div className={styles.divider}></div>
        <img src={portfolio} alt="image1" />
      </div>
    </>
  )
}

export default Projects