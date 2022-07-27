import React from "react";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.collumn_center}>
        <div className={styles.intro} style={{fontSize: 24}}>Hi there!</div>
        <div className={styles.intro} style={{fontSize: 32}}>I'm Ugnius Tyla</div>
        <div className={styles.web_dev} style={{fontSize: 24}}>Beginner web developer...</div>
      </div>
    </div>
  );
}

export default Home;
