import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CardDeckComponent = () => {
  return (
    <div>
      <h3>Popular Lessons</h3>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Introduction to Spanish</Card.Title>
            <Card.Text>
              Start with the basics of Spanish and get introduced to common phrases.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Updated recently</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Basic Spanish Phrases</Card.Title>
            <Card.Text>
              Learn essential phrases and expressions for everyday conversations.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Updated recently</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Spanish Grammar Essentials</Card.Title>
            <Card.Text>
              Understand the key grammar rules and structures used in Spanish.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Updated recently</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CardDeckComponent;
