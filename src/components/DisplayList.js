import React, { useContext } from 'react';
import Task from './Task';
import TasksListContext from '../context/TasksListContext';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DisplayList() {
  const { data, refresh, setRefresh } = useContext(TasksListContext);

  return (
    <Container>
      <Row className='mt-4 no-gutters' id="tasks-container">
        <Col>
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
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayList;