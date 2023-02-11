import React from "react";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import styles from "./signupnav.module.css";
function signupnav() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>
        <h1 className={styles.heading}>SIGNUP OR LOGIN AS</h1>
      </div>
      <div className={styles.button}>
        <Link className={styles.link} href="/signup">
          <img className={styles.imgsignup} src="/workersignup.png" />
          <h2>Workers</h2>
        </Link>
        <h3 className={styles.option}>OR</h3>
        <Link className={styles.link} href="/signup2">
          <img className={styles.imgsignup} src="/client.png" />
          <h2>Client</h2>
        </Link>
      </div>
    </div>
  );
}

export default signupnav;
