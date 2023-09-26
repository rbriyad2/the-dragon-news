import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}= useContext(AuthContext)

    const handleLogout =()=>{
      logOut()
      .then((result)=>{
        console.log(result)
      })
      .catch(error =>{
        console.log(error)
      })
    }
    return (
        <div>
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto">
            <Link className="ps-3" to='/'>Home</Link>
            <Link className="ps-3" to='/'>About</Link>
            <Link className="ps-3" to='/'>Career</Link>
          </Nav>
          <Nav className="align-items-center">
            {user && <> <span>{user.email}</span> <FaUserCircle className="me-2" style={{fontSize: '30px'}}></FaUserCircle></>}
            {user ? <Link to='/'><Button onClick={handleLogout} variant="secondary">Logout</Button></Link> : <><Link to='/login'><Button variant="secondary">Login</Button></Link> <Link to='/register'><Button variant="secondary">SignUp</Button></Link></>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavigationBar;