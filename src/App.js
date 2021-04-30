import React, { useState } from 'react';
import Todo from './components/ToDo.js'
import './App.css';

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

  console.log(toDoList);

  return (
    <div className="App">
      <Todo addNewItem={addNewItem} />
    </div>
  );
}

export default App;