import React from 'react'
import styles from "./Projects.module.css"
import { ProjectsData } from '../../utils/data'

function Projects() {

  return (
    <>
      <section className={styles.projects_container} id="projects">
        Projects' timeline
      </section>
      {ProjectsData.map(link =>
        <>
          <div className={styles.project_name}>{link.name}</div>
          <div className={styles.project_date}>{link.date}</div>
          <div className={link.flexDirection ? styles.divider_container : styles.divider_container_reverse}>
            <img src={link.src} alt={link.alt} />
            <div className={styles.divider}></div>
            <div className={styles.text_container}>
              <p>{link.p_tag}</p>
              <a className={styles.alternate1} href={link.href}>To Project</a>
              <div className={styles.frameworks}>{link.libraries}</div>
            </div>
          </div>
        </>)}
    </>
  )
}

export default Projects