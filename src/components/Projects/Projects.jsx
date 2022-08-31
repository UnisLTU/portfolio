import React from 'react'
import styles from "./Projects.module.css"
import portfolio from '../../Assets/port.PNG';
import blog from '../../Assets/blog.PNG'
import cocktail from '../../Assets/cocktail.PNG'




function Projects() {

  const projects = [{
    name: "My first portfolio",
    flexDirection : true,
    date: "2022.08",
    src: portfolio,
    alt: "portfolio",
    p_tag: "My first personal portfolio website created with React.js and CSSModules.",
    href: "https://unisltu.github.io/portfolio/",
    libraries: "React | CSSModules",
  },
  {
    name: "Ut Blog",
    flexDirection : false,
    date: "2022.08",
    src: blog,
    alt: "blog",
    p_tag: "Small blog where I document my journey as a developer. It has search engine. All posts are generated dinamicaly from JSON file.",
    href: "",
    libraries: "React | CSSModules | JSON",
  },
  {
    name: "Random cocktail generator",
    flexDirection : true,
    date: "2022.08",
    src: cocktail,
    alt: "cocktail",
    p_tag: "",
    href: "https://unisltu.github.io/cocktails/",
    libraries: "React | CSSModules | Axios | API",
  },
]

  

  return (
    <>
      <div className={styles.projects_container} id="projects">
        Projects' timeline:
      </div>
      {projects.map(link =>
        <>
          <div className={styles.project_name}>{link.name}</div>
          <div className={styles.project_date}>{link.date}</div>
          <div className={[link.flexDirection ? styles.divider_container : styles.divider_container_reverse]}>
            <img src={link.src} alt={link.alt}/>
            <div className={styles.divider}></div>
            <div className={styles.text_container}>
              <p>{link.p_tag}
              </p>
              <a className={styles.alternate1} href={link.href}>To Project</a>
              <div className={styles.frameworks}>{link.libraries}</div>
            </div>
          </div>
        </>)}
    </>
  )
}

export default Projects