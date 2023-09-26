import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleCreateAccount = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((createuser) => {
        const user = createuser.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleaccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div className="container w-25 mx-auto">
      <Form onSubmit={handleCreateAccount}>
        <h2>Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Your Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Photo URL"
            name="photoURL"
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleaccepted}
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and Condisitons</Link>
              </>
            }
          />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text>
          Alredy have an account ?<Link to="/login"> Login</Link>
        </Form.Text>{" "}
        <br />
        <Form.Text className="text-danger mt-2">Error</Form.Text>
        <Form.Text className="text-success mt-2">Success</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
