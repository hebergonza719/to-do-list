import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      <h2>To-do List</h2>
      <h3>Register</h3>
      <form>
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