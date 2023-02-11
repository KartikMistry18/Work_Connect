import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div>
      <div>
        <h1 className={styles.tagline}>
          GitHub repository should be private and the link should be sent on
          your specific team channel.
        </h1>
      </div>

      <img className={styles.heroImg} src="/workers.png" />
    </div>
  );
}

export default Hero;
