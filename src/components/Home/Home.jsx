import React from 'react'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home} id='home'>
            <header className={styles.collumn_center}>
                <h1 className={styles.intro}>Hi there!</h1>
                <h2 className={styles.intro_name}>I'm Ugnius Tyla</h2>
                <h2 className={styles.web_dev}>Beginner web developer...</h2>
            </header>
        </section>
    )
}

export default Home
