import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import { modCompleted } from "../actions";
import { deleteTask } from "../actions";


function Task({ item, tasks, modCompleted, deleteTask }) {  
  const handleRemove = e => {
    e.preventDefault();
    deleteTask(item.id);
  }

  const handleToggle = e => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      completed: !item.completed
    };
    modCompleted(item.id, updatedItem);
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

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect (
  mapStateToProps,
  { modCompleted, deleteTask }
)(Task);