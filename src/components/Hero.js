import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.contentDiv}>
        <h1 className={styles.tagline}>
          <span className={styles.firstLine}>The platform for connecting</span>{" "}
          <br className={styles.space} />
          Top talent <span className={styles.firstLine}>to </span>Top clients
        </h1>

        <img className={styles.heroImg} src="/workergrp.png" />
      </div>
    </div>
  );
}

export default Hero;
