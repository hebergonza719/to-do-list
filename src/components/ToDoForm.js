import React, { useState, useContext } from 'react';
import TasksListContext from '../context/TasksListContext';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { axiosWithAuth } from '../utils/axiosWithAuth';


// function ToDoForm( {addNewItem} ) {
function ToDoForm() {
  const [ newItem, setNewItem ] = useState("");
  const [ newNotes, setNewNotes ] = useState("");

  const { refresh, setRefresh } = useContext(TasksListContext);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  const addNewItem = () => {
    const newTask = {
      user_id: localStorage.getItem("user_id"),
      description: newItem,
      notes: newNotes,
      completed: false
    }
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BACKEND_URL}/tasks`, newTask)
      // .then((response) => {
      //   console.log(response)
      // })
      .catch(err => {
        console.log(err);
      });
    toggleRefresh();
  }

  const handleChangeTask = e => {
    setNewItem(e.target.value);
  }

  const handleChangeNote = e => {
    setNewNotes(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    addNewItem(newItem);
  }

  return (
    <div>
      <div className="bg-light text-dark">
        <h2 className="p-1">My List</h2>
      </div>
      <form className="mt-4" id="dashboard-form" onSubmit={handleSubmit}>
        <Row className="no-gutters">
          <Col xs={6} md={12} className="d-flex" id="dashboard-field-cont">
            <label>
              Task:
              <input 
                id="dashboard-task-input"
                onChange={handleChangeTask}
                type="text"
                name="newTodo"
                value={newItem}
              />
            </label>
          </Col>
          <Col xs={6} md={12} className="d-flex" id="dashboard-field-cont-right">
            <label>
              Notes:
              <input 
                id="dashboard-task-notes"
                type="text"
                name="notes"
                onChange={handleChangeNote}
                value={newNotes}
              />
            </label>
          </Col>
        </Row>
        <Row className="no-gutters mt-3">
          <Col xs={12}>
            <Button className="ml-4" type="submit">Add New Task</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ToDoForm;