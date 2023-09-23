import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="latestMarquee d-flex primary bg-body-tertiary p-4">
      <Button variant="danger">Latest</Button>
      <Marquee className="text-danger">
  I can be a React component, multiple React components, or just some text.......          Lorem ipsum dolor sit amet consectetur adipisicing elit.....        Consequuntur nisi autem hic deleniti impedit, omnis repudiandae enim commodi natus ratione...            I can be a React component, multiple React components, or just some text.

</Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link href="#deets"> <Button variant="secondary">Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
