import React, { useState } from 'react';

function Todo( {addNewItem} ) {
  const [ newItem, setNewItem ] = useState("");

  const handleChange = e => {
    setNewItem(e.target.value)
    console.log(newItem);
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

export default Todo;