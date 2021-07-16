import React from 'react';

import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Task({ item, setRefresh, refresh }) {  
  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  const toggleCompleted = () => {
    const updatedItem = {
      ...item,
      completed: !item.completed
    };
    axiosWithAuth()
      .put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${item.id}`, updatedItem)
      .then(res => {
        toggleRefresh();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const removeTask = () => {
    axiosWithAuth()
      .delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${item.id}`)
      .then(res => {
        toggleRefresh();
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const handleRemove = e => {
    e.preventDefault();
    removeTask();
    // toggleRefresh();
  }

  const handleToggle = e => {
    e.preventDefault();
    toggleCompleted();
    // toggleRefresh();
  }

  return (
    <Container className="mb-4" id="tasks">
      <Row className='no-gutters'>
        <Col>
          <p>Description: {item.description}</p>
        </Col>
        <Col>
          <p>Notes: {item.notes}</p>

        </Col>
      </Row>
      <Row className='d-flex no-gutters'>
        <Col xs={4} md={3} lg={2}>
          <Button type="submit" onClick={handleToggle}>Status: {item.completed ? "Done" : "Pending"}</Button>
        </Col>
        <Col xs={4} md={3} lg={2}>
          <Button variant="danger" type="submit" onClick={handleRemove}>Remove</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Task;