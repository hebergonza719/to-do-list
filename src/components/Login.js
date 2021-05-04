import React, { useState } from 'react';

function Login() {
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
      <h3>Sign-in</h3>
      <form>
        <label>
          Username
          <input
            type='text'
            // this is very important for handleChange to identify the <input>
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Login;