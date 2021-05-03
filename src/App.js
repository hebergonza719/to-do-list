import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm.js';
import './App.css';
import DisplayList from './components/DisplayList.js';

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
    <div className="App">
      <ToDoForm addNewItem={addNewItem} />
      <DisplayList 
        toDoList={toDoList}
        removeTask={removeTask}  
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;