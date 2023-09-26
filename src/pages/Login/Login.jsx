import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
const {signIn}=useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/';

const handleLogin =event =>{
  event.preventDefault()
  const email = event.target.email.value;
  const password = event.target.password.value;
  signIn(email , password)
  .then((loggeduser)=>{
    const user = loggeduser.user;
    navigate(from, {replace: true})
  })
  .catch(error=>{
    console.log(error)
  })
}
  return (
    <div className="container w-25 mx-auto">
      <Form onSubmit={handleLogin}>
        <h2>Please Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text>
          Don't have an account ?<Link to="/register"> Register</Link>
        </Form.Text>{" "}
        <br />
        <Form.Text className="text-danger mt-2">Error</Form.Text>
        <Form.Text className="text-success mt-2">Success</Form.Text>
      </Form>
    </div>
  );
};

export default Login;
<h2>Login Page</h2>;
