import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./signupnav.module.css";
function signupnav() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>
        <h1 className={styles.heading}>SIGNUP OR LOGIN AS</h1>
      </div>
      <div className={styles.button}>
        <Button className={styles.buttonsubmit} variant="primary" href="/login">
          WORKER
        </Button>
        <Button className={styles.buttonsubmit} variant="primary" href="/login">
          CLIENT
        </Button>
      </div>
    </div>
  );
}

export default signupnav;
