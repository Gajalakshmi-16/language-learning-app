import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Learn Basic French</Card.Title>
        <Card.Text>
          Discover the fundamentals of French, including essential phrases and grammar rules to get you started.
        </Card.Text>
        <Button variant="primary" href="/lessons">Start Learning</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
