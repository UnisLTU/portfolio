import React from 'react'
import styles from "./Projects.module.css"
import portfolio from '../../Assets/port.PNG';
import cocktail from '../../Assets/cocktail.PNG'
import utchat from '../../Assets/utchat.PNG'

function Projects() {

  const projects = [{
    name: "My first portfolio",
    flexDirection: true,
    date: "2022.08",
    src: portfolio,
    alt: "portfolio",
    p_tag: "My first personal portfolio website created with React.js and CSSModules.",
    href: "https://unisltu.github.io/portfolio/",
    libraries: "React | CSSModules | React-Icons | GitHub Calender | NPM",
  },
  {
    name: "Random cocktail generator",
    flexDirection: false,
    date: "2022.08",
    src: cocktail,
    alt: "cocktail",
    p_tag: "Random cocktail generator made using TheCocktailDB API. ",
    href: "https://unisltu.github.io/cocktails/",
    libraries: "React | CSSModules | Axios | API",
  },
  {
    name: "Ut. chat",
    flexDirection: true,
    date: "2022.09",
    src: utchat,
    alt: "utchat",
    p_tag: "A simple chat website where you can chat in real time. It uses Firebase API to manage massages and accounts. The website has features like: Google authentication, emoji picker, sending and editing messages.",
    href: "https://unisltu.github.io/portfolio/",
    libraries: "React | Typescript | CSSModules | Firebase",
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
            <img src={link.src} alt={link.alt} />
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