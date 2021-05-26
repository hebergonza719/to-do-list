import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutBtn() {
  let history = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutBtn;