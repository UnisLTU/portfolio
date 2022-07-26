import React from "react";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.home} id={styles.home}>
      <div className={styles.collumn_center}>
        <h2 className={styles.intro}>Hi there!</h2>
        <h1 className={styles.intro}>I'm Ugnius Tyla</h1>
        <h1 className={styles.web_dev}>Beginner web developer...</h1>
      </div>
    </div>
  );
}

export default Home;
