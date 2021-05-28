import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import TasksListContext from '../context/TasksListContext';


function Login() {
  const [ credentials, setCredentials ] = useState({
    username: "",
    password: ""
  });

  const { refresh, setRefresh } = useContext(TasksListContext);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
  //       .then(res => {
  //         setData(res.data);
  //       })
  // }, []);

  let history = useHistory();

  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, (credentials))
      .then(res => {
        localStorage.setItem("token", res.data.jwt_token);
        localStorage.setItem("user_id", res.data.user_id);
        toggleRefresh();
        history.push("/dashboard");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login", err);
      });
    setCredentials({
      username: "",
      password: ""
    })
  };

  return (
    <div>
      <h2>To-do List</h2>
      <h3>Sign-in</h3>
      <form onSubmit={handleLogin}>
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
        <button>Sign-in</button>
      </form>
      <h4>Create an account?</h4>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
}

export default Login;