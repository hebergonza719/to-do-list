import React, { useState, useContext } from 'react';
import TasksListContext from '../context/TasksListContext';
import axios from 'axios';

// function ToDoForm( {addNewItem} ) {
function ToDoForm() {
  const [ newItem, setNewItem ] = useState("");

  const { refresh, setRefresh } = useContext(TasksListContext);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  const addNewItem = () => {
    const newTask = {
      user_id: localStorage.getItem("user_id"),
      description: newItem,
      notes: "",
      completed: false
    }
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/tasks`, newTask)
      .catch(err => {
        console.log(err);
      });
    toggleRefresh();
  }

  const handleChange = e => {
    setNewItem(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    addNewItem(newItem);
  }

  return (
    <div>
      <div>
        <h2>To-do List</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input 
            onChange={handleChange}
            type="text"
            name="newTodo"
            value={newItem}
          />
        </label>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default ToDoForm;