import React from "react";
import styles from "./about.module.css";

function about() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <img className={styles.banner} src="/aboutimg.png" />
        <div className={styles.content1}>
          <p className={styles.contentLeft}>
            A web app that connects workers to clients is a platform that
            provides a simple and convenient way for clients to find workers for
            specific projects and for workers to find clients for work. It
            typically involves clients posting job listings, and workers bidding
            on those jobs, and then the app uses a matching algorithm to connect
            the two. The app provides communication tools for clients and
            workers to discuss the details of the job, and it also handles
            payment processing to ensure that the transaction is secure.
          </p>
        </div>
        <img className={styles.imageRight} src="/about1.jpeg" />
        <div className={styles.content2}>
          <p className={styles.contentRight}>
            The app also has a feedback and ratings system, allowing clients and
            workers to rate each other, building a reputation system and
            improving the overall quality of the service. This technology makes
            it easier for clients and workers to find each other and get work
            done, making it a valuable resource for both.
          </p>

          <img className={styles.imageLeft} src="/about2.jpeg" />
        </div>
        <div className={styles.footerDiv}>
          <h2 className={styles.footerHeading}> Team</h2>

          <div className={styles.teamDiv}>
            <div className={styles.element}>
              <h1 className={styles.divHeading}>
                Krishay <br />
                Nair
              </h1>
              <img className={styles.profileimg} src="/krishay.jpeg" />
            </div>
            <div className={styles.element}>
              <h1 className={styles.divHeading}>Shantanu Gondane</h1>
              <img className={styles.profileimg} src="/shantanu.jpeg" />
            </div>
            <div className={styles.element}>
              <h1 className={styles.divHeading}>
                Om <br />
                Bhambale
              </h1>
              <img className={styles.profileimg} src="/om.jpeg" />
            </div>
            <div className={styles.element}>
              <h1 className={styles.divHeading}>
                Kartik <br />
                Mistry
              </h1>
              <img className={styles.profileimg} src="/kartik.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
