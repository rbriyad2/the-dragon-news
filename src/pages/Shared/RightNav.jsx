import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitterSquare,FaYoutube } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from './QZone';
import bgaddimg from '../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary mb-2"> <FaGoogle></FaGoogle> Login With Gogle</Button>
      <Button variant="outline-secondary"> <FaGithub></FaGithub> Login With Github</Button>
      <div>
        <h4 className='mt-4'>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitterSquare></FaTwitterSquare>Twitter</ListGroup.Item>
      <ListGroup.Item><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
    </ListGroup>
      </div>
      <QZone></QZone>
      <div className='w-100 cover'>
        <img src={bgaddimg} alt="" />
      </div>
        </div>
    );
};

export default RightNav;<h2>Right Nav</h2>