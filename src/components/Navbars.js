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
      {/* <img className={styles.headerLogo} src="/logobg.png" alt="" />
      <nav>
        <ul>
          <Link className={styles.navElement} href="/">
            <Button variant="light">Home</Button>
          </Link>
          <Link className={styles.navElement} href="/About">
            <Button variant="light">About Us</Button>
          </Link>

          <Link className={styles.navElement} href="/CustomerService">
            <Button variant="light">Customer Service</Button>
          </Link>
        </ul>
      </nav>
      <Button variant="light">Contact Us</Button> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WORK-CONNECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/about">ABOUT</Nav.Link>
              <Nav.Link href="/paj">POST A JOB</Nav.Link>
              <Nav.Link href="/customercare">CUSTOMERCARE</Nav.Link>
            </Nav>
            <Nav>
              <Button href="signup" variant="light">
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
