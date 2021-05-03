import React from 'react';

function Task({ item, removeTask, toggleCompleted }) {  
  const handleClick = e => {
    e.preventDefault();
    removeTask(item.id);
  }

  const handleToggle = e => {
    e.preventDefault();
    toggleCompleted(item.id);
  }

  return (
    <div>
      <p>{item.task}</p>
      <p onClick={handleToggle}>Status: {item.completed ? "Done" : "Pending"}</p>
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default Task;