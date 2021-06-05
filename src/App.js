import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoForm from './components/ToDoForm.js';
import './App.css';
import DisplayList from './components/DisplayList.js';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import axios from 'axios';
import TasksListContext from './context/TasksListContext';

import Container from 'react-bootstrap/Container';

function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const fetchData = () => {
    if (localStorage.getItem("user_id")) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/tasks/users/${localStorage.getItem("user_id")}`)
          .then(res => {
            setData(res.data);
          })
          .catch(err => {
            console.log(err);
          })
    }
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <TasksListContext.Provider value={{data, setData, refresh, setRefresh}}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute 
              path="/dashboard"
              component={props => {
                return (
                  <div>
                    <NavBar />
                    <div className="d-flex align-items-center vh-100 mb-0">
                      <Container className="rounded border p-0" id="dashboard-container">
                        <ToDoForm />
                        <DisplayList />
                      </Container>
                    </div>
                  </div>
                )
              }} 
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </TasksListContext.Provider>
  );
}

export default App;