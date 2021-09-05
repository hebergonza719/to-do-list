import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/ToDoosLogo.jpg';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Register() {
  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
  });

  let history = useHistory();

  const handleGuestLogin = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    history.push("/dashboard-guest");
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = e => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, (credentials))
      .then(res => {
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <Jumbotron className="d-flex align-items-center min-vh-100 mb-0 bg-white">
      <Container className="login-container">
        <Row className="align-items-center no-gutters">
          <Col md={6} id="login-register-logo-container">
            {/* <h2 className="text-center">My To-do</h2> */}
            <img className="logo" src={logo} alt="ToDoos Logo"/>
          </Col>
          <Col md={6} id="login-register-form-container">
            <form onSubmit={handleRegister}>
              <Row className="no-gutters" id="sign-register-in-container">
                <Col md={12}>
                  <h3 className="text-center">Register</h3>
                </Col>
              </Row>
              <Row 
                className="align-items-center no-gutters"
                id="login-register-fields-container"
              >
                <Col md={3}>
                  <label>
                    Username
                  </label>
                </Col>
                <Col md={7}>
                  <input 
                    className="login-register-input"
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row 
                className="align-items-center no-gutters"
                id="login-register-fields-container"
              >
                <Col md={3}>
                  <label>
                    Password
                  </label>
                </Col>
                <Col md={7}>
                  <input 
                    className="login-register-input"
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="no-gutters text-center" id="login-register-button-container">
                <Col xs={6} md={3}>
                  <Button type="submit">Submit</Button>
                </Col>
                <Col xs={6} md={3}>
                  <Button onClick={handleGuestLogin}>Guest</Button>
                </Col>
              </Row>
            </form>
          </Col>          
        </Row>      
        <Row className="no-gutters">
          <Col className="text-center mt-1">
            <h5>Already registered?</h5>
            <NavLink to="/">Sign-in</NavLink>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Register;