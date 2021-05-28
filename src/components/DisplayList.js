import React, { useContext } from 'react';
import Task from './Task';
import TasksListContext from '../context/TasksListContext';

function DisplayList() {
  const { data, refresh, setRefresh } = useContext(TasksListContext);

  return (
    <div className='to-do-list'>
      {data.map(item => {
        return (
          <Task 
            item={item}
            key={item.id}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )
      })}
    </div>
  )
}

export default DisplayList;