import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Navbars = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={styles.navMain}>
        <Container>
          <Navbar.Brand href="/">
            <img className={styles.logo} src="/logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.navText} href="/">
                HOME
              </Nav.Link>
              <Nav.Link className={styles.navText} href="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link className={styles.navText} href="/paj">
                POST A JOB
              </Nav.Link>
              <Nav.Link className={styles.navText} href="/faj">
                FIND A JOB
              </Nav.Link>
              <Nav.Link className={styles.navText} href="/customercare">
                CUSTOMER CARE
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                className={styles.navText2}
                href="/signupnav"
                variant="light"
              >
                LOGIN/SIGNUP
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
