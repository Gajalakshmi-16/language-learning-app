import React from 'react';
import { Container, Carousel, Row, Col, Card, Button, ProgressBar, Badge } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h2 className="my-4">Dashboard</h2>
      
      <Carousel className="mb-5">
        <Carousel.Item>
          <div style={{ height: '400px', background: '#f8f9fa' }}>
            <Carousel.Caption>
              <h3 className="text-dark">Keep Learning</h3>
              <p className="text-dark">Continue your progress in Spanish.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ height: '400px', background: '#f8f9fa' }}>
            <Carousel.Caption>
              <h3 className="text-dark">New Lessons Available</h3>
              <p className="text-dark">Check out the new lessons on advanced grammar.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

      <h3>Your Progress</h3>
      <p>You have completed <Badge bg="success">2 lessons</Badge>!</p>
      <ProgressBar now={40} label="40%" className="mb-4" />

      <Row>
        <Col>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>French Intermediate <Badge bg="info">New</Badge></Card.Title>
              <Card.Text>Start your intermediate French lessons now.</Card.Text>
              <Button variant="primary" href="/lessons">Continue Learning</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Spanish Advanced <Badge bg="warning">Hot</Badge></Card.Title>
              <Card.Text>Dive into advanced Spanish grammar and vocabulary.</Card.Text>
              <Button variant="primary" href="/lessons">Continue Learning</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
