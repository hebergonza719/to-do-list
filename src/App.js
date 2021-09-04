import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoForm from './components/ToDoForm.js';
import './App.css';
import DisplayList from './components/DisplayList.js';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';



import Container from 'react-bootstrap/Container';

function App() {
  return (
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
          <Route 
            path="/dashboard-guest"
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
  );
}

export default App;