import React from 'react';

function Task({ item, removeTask }) {  
  const handleClick = e => {
    e.preventDefault();
    removeTask(item.id);
  }

  return (
    <div>
      <p>{item.task}</p>
      <p>{item.completed ? "Completed" : "Not Completed"}</p>
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default Task;