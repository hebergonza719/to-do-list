import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Register() {
  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
  });

  let history = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = e => {
    e.preventDefault();
    axiosWithAuth()
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
    <div>
      <h2>To-do List</h2>
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <label>
          Username
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      <NavLink to="/">Or sign in</NavLink>
    </div>
  );
}

export default Register;