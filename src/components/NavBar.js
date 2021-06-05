import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import TasksListContext from '../context/TasksListContext';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function NavBar() {

  const { setData } = useContext(TasksListContext);

  let history = useHistory();

  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    setData([]);
    history.push("/");
  };

  return (
    // <div>
    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Text>
          Signed in as {localStorage.getItem("username")}
        </Navbar.Text>
        <Button variant="light" onClick={handleLogout}>Logout</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;