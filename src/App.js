import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoForm from './components/ToDoForm.js';
import './App.css';
import DisplayList from './components/DisplayList.js';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './components/PrivateRoute';
import LogoutBtn from './components/LogoutBtn';
import axios from 'axios';
import TasksListContext from './context/TasksListContext';


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
                    <LogoutBtn />
                    <ToDoForm />
                    {/* <ToDoForm {...props} addNewItem={addNewItem} /> */}
                    <DisplayList />
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