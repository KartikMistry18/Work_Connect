import React from "react";
import styles from "./services.module.css";
function services() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Services</h1>
        <div className={styles.mainDiv}>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
              Plumber<br />
            </h1>
            <img className={styles.falticonimg} src="/plumber.png" />
            {/* <p className={styles.divContent}>
              <br/>Plumbers install and repair pipes and fixtures that carry water, gas, or other fluids in homes and businesses
            </p> */}
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
              Electrician
            </h1>
            {/* <p className={styles.divContent}>
            <br/>Installs and repairs electrical wiring, systems, and fixtures in buildings. Installs conduits and pipes to house electrical wires and cables. Ensures piping complies with electrical codes.
            </p> */}
              <img className={styles.falticonimg} src="/electrician.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
            Janitor work
            </h1>
            {/* <p className={styles.divContent}>
            <br/>Janitor is an entry-level job. It is the role responsible for maintaining the workplace by fixing broken instruments, cleaning the surroundings, etc. It also includes tasks like responding to complaints, conducting regular check-ups and keeping an inventory of supplies.
            </p> */}
             <img className={styles.falticonimg} src="/janitor.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
             labour work
            </h1>
            {/* <p className={styles.divContent}>
            <br/>The work done by a group of workers or by a particular worker is referred to as their labour. Every man should receive a fair price for the product of his labour
            </p> */}
             <img className={styles.falticonimg} src="/labour-day.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
            Maid Work
            </h1>
            {/* <p className={styles.divContent}>
            <br/>Maid is a female who works as a servant in a hotel or in someone's home. Maid is responsible for cleaning, but can also do a variety of other tasks such as ironing, grocery shopping and cooking.
            </p> */}
            <img className={styles.falticonimg} src="/maid.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
            AC technician
            </h1>
            {/* <p className={styles.divContent}>
            <br/>Installing, maintaining and repairing ventilation and air conditioning systems and equipment. Identifying maintenance risks on equipment. Diagnosing electrical and mechanical faults for HVAC systems. Cleaning, adjusting and repairing systems, and performing warranty services.
            </p> */}
             <img className={styles.falticonimg} src="/air-conditioner.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
            home painting
            </h1>
            {/* <p className={styles.divContent}>
            <br/>A house painter and decorator is a tradesman responsible for the painting and decorating of buildings, and is also known as a decorator or house painter. The purpose of painting is to improve the appearance of a building and to protect it from damage by water, corrosion, insects and mould.
            </p> */}
            <img className={styles.falticonimg} src="/paint.png" />
          </div>
          <div className={styles.element}>
            <h1 className={styles.divHeading}>
            Carpenter job
            </h1>
            {/* <p className={styles.divContent}>
            <br/>The Construction Carpenter will build, erect, install, and repair forms, structures, and other fixtures made from wood and other materials as needed to assist with various types of construction projects.
            </p> */}
             <img className={styles.falticonimg} src="/carpenter.png" />s
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default services;
