import React, { useEffect } from 'react';
import Task from './Task';

import { connect } from "react-redux";
import { getData } from "../actions";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DisplayList({ tasks, dispatch }) {

  useEffect(() => {
    dispatch(getData());
  }, [dispatch])

  return (
    <Container>
      <Row className='mt-4 no-gutters' id="tasks-container">
        <Col>
          {tasks.length > 0 ? tasks.map(item => {
            return (
              <Task 
                item={item}
                key={item.id}
              />
            )
          }) : null}
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

export default connect (
  mapStateToProps
)(DisplayList);