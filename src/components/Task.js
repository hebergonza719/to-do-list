import React from 'react';
import axios from 'axios';

function Task({ item, setRefresh, refresh }) {  
  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  const toggleCompleted = () => {
    const updatedItem = {
      ...item,
      completed: !item.completed
    };
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${item.id}`, updatedItem)
      .catch(err => {
        console.log(err);
      })
  }

  const removeTask = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${item.id}`)
      .catch(err => {
        console.log(err);
      })
  }
  
  const handleRemove = e => {
    e.preventDefault();
    removeTask();
    toggleRefresh();
  }

  const handleToggle = e => {
    e.preventDefault();
    toggleCompleted();
    toggleRefresh();
  }

  return (
    <div>
      <p>Description: {item.description}</p>
      <p>Notes: {item.notes}</p>
      <button onClick={handleToggle}>Status: {item.completed ? "Done" : "Pending"}</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Task;