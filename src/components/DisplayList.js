import React from 'react';
import Task from './Task';

function DisplayList({ toDoList, removeTask }) {
  return (
    <div className='to-do-list'>
      {toDoList.map(item => {
        return (
          <Task 
            item={item}
            key={item.id}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}

export default DisplayList;