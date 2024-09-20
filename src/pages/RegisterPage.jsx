import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LoginSVG from "../assets/robot-checking-user-profile.svg";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate password === confirm password

    if (password !== confirmPassword) {
      toast.error("Passwords must match");
    } else {
      // 5000/api/auth/login
      // POST
      // username,password
      axios
        .post("http://localhost:5000/api/auth/register", {
          username,
          password,
        })
        .then((response) => {
          console.log(response.data);

          toast.success("Registered!, Login to proceed");
          navigate("/login");
        })
        .catch((error) => {
          toast.error("Something went wrong!");
        });
    }

    // "http://localhost:5000/api/auth/register"
    // toast.success("Registered");
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="h-100">
        <Col
          style={{ backgroundColor: "#51a7ddce" }}
          className="d-flex justify-content-center align-items-center"
        >
          {" "}
          <img src={LoginSVG} alt="" />
        </Col>
        <Col className="d-flex flex-column gap-4 justify-content-center align-items-center">
          <h3>Register</h3>
          <Form onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter Password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="link" type="button" as={Link} to="/">
              Home
            </Button>
          </Form>
          <Button variant="link" type="button" as={Link} to="/login">
            Already have an account?{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
