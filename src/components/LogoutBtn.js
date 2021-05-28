import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TasksListContext from '../context/TasksListContext';

function LogoutBtn() {

  const { setData } = useContext(TasksListContext);

  let history = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setData([]);
    history.push("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutBtn;