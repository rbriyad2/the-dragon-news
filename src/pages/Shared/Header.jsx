import React from "react";
import logo from "../../assets/logo.png";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";

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
      
    </div>
  );
};

export default Header;
