import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoForm from './components/ToDoForm.js';
import './App.css';
import DisplayList from './components/DisplayList.js';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [ toDoList, setToDoList ] = useState([]);
  const addNewItem = (newTask) => {
    const newItem = [
      ...toDoList,
      {
      task : newTask,
      id: Date.now(),
      completed: false
      }
    ]
    setToDoList(newItem);
  }

  const removeTask = (itemId) => {
    const newList = toDoList.filter(item => {
      return item.id !== itemId;
    })
    setToDoList(newList);
  }

  const toggleCompleted = (itemId) => {
    const newList = toDoList.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    setToDoList(newList);
  }

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
                  <ToDoForm {...props} addNewItem={addNewItem} />
                  <DisplayList 
                    {...props}
                    toDoList={toDoList}
                    removeTask={removeTask}  
                    toggleCompleted={toggleCompleted}
                  />
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