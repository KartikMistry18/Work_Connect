import styles from "./paj.module.css";
import React, { useState } from "react";

const Paj = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://next-bd518-default-rtdb.firebaseio.com/complaint.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.maincontact}>
        <img className={styles.mainimg} src="/pajbanner2.png" />
      </div>

      <div></div>
      <div className={styles.illus}></div>
      <section className="contactus-section">
        <div className={styles.container}>
          <div className={styles.context}>
            <form method="POST">
              <div className="row">
                <div className={styles.box}>
                  <label className="formTitle">Job Title</label>
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    className="form-control"
                    placeholder="Enter Job Title "
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div className={styles.box}>
                  <label className="formTitle">Job Description</label>
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    className="form-control"
                    placeholder="Enter Job description "
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="row">
                <div className={styles.box}>
                  <label className="formTitle">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id=""
                    className="form-control"
                    placeholder="enter phone number"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
                <div className={styles.box}>
                  <label className="formTitle">Identity Proof</label>
                  <input
                    type="text"
                    name="email"
                    id=""
                    className="form-control"
                    placeholder="Enter any identity proof (Aadhar,Pan card,etc)"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div className={styles.box}>
                  <label className="formTitle">Job salary</label>
                  <input
                    type="text"
                    name="message"
                    id=""
                    className="form-control"
                    placeholder="salary in INR"
                    value={userData.message}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="row">
                <div className={styles.con}>
                  <div className="col-12 contact-input-feild">
                    <label className="formTitle">Job location</label>
                    <input
                      type="text"
                      name="address"
                      id=""
                      className={styles.inputaddress}
                      placeholder="Add Job location"
                      value={userData.address}
                      onChange={postUserData}
                    />
                  </div>
                </div>

                {/* <div className="row">
                        <div className={styles.con2}>
                        <div className="col-12 ">
                          <input
                            type="text"
                            name="message"
                            id=""
                            className={styles.inputaddress2}
                            placeholder="Enter Your Message"
                            value={userData.message}
                            onChange={postUserData}

                          />
                        </div>
                        </div>
                        </div> */}
              </div>
              {/*                       
                      
                      <div class="form-check form-checkbox-style">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          class="form-check-label"
                          className={styles.tick}>
                          I agree that the police department may contact me at the
                          email address or phone number above
                        </label>
                      </div> */}

              <button
                type="submit"
                className={styles.submit}
                onClick={submitData}
              >
                Submit
              </button>
            </form>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Paj;
