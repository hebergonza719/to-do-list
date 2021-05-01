import React, { useState } from 'react';
import Todo from './components/ToDo.js';
import './App.css';
import DisplayList from './components/DisplayList.js';

function App() {
  const [ toDoList, setToDoList ] = useState([]);

  const addNewItem = (newTask) => {
    const newItem = [
      ...toDoList,
      {
      task : newTask.toUpperCase(),
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

  return (
    <div className="App">
      <Todo addNewItem={addNewItem} />
      <DisplayList 
        toDoList={toDoList}
        removeTask={removeTask}  
      />
    </div>
  );
}

export default App;