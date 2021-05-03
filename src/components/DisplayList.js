import React from 'react';
import Task from './Task';

function DisplayList({ toDoList, removeTask, toggleCompleted }) {
  return (
    <div className='to-do-list'>
      {toDoList.map(item => {
        return (
          <Task 
            item={item}
            key={item.id}
            removeTask={removeTask}
            toggleCompleted={toggleCompleted}
          />
        )
      })}
    </div>
  )
}

export default DisplayList;