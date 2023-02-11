import React from "react";
import styles from "./Works.module.css";
function Works() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>How Work-Connect Works</h1>
      <div className={styles.mainDiv}>
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Client <br />
            registration
          </h1>
          <p className={styles.divContent}>
            Clients create an account on the web app, providing information such
            as their name, location, and the type of work they need done.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Worker <br />
            registration
          </h1>
          <p className={styles.divContent}>
            Workers also create an account on the web app, providing information
            such as their skills, experience, and availability.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Job <br />
            posting
          </h1>
          <p className={styles.divContent}>
            Clients can post job listings on the web app, specifying the type of
            work they need done, the location, and the budget.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Matching <br />
            algorithm
          </h1>
          <p className={styles.divContent}>
            The web app uses a matching algorithm to connect clients with
            workers who have the right skills and are available to complete the
            job.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Worker
            <br /> bidding
          </h1>
          <p className={styles.divContent}>
            {" "}
            Workers can bid on job listings that match their skills and
            interests.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Client <br />
            selection
          </h1>
          <p className={styles.divContent}>
            {" "}
            Clients can review the bids from workers and choose the worker they
            want to hire for the job.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow} />
        <div className={styles.element}>
          <h1 className={styles.divHeading}>
            Job <br />
            completion
          </h1>
          <p className={styles.divContent}>
            Once a worker is hired, they complete the job and submit it to the
            client for review.
          </p>
        </div>
        <img src="/rightarrow.png" className={styles.arrow2} />
      </div>
    </div>
  );
}

export default Works;
