import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Carousel */}
      <Row className="mb-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://c8.alamy.com/comp/PPNG3T/learn-spanish-education-and-business-background-PPNG3T.jpg"
                alt="Learn Spanish"
              />
              <Carousel.Caption>
                <h3>Learn Spanish</h3>
                <p>Start your journey with basic Spanish phrases and grammar.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.shutterstock.com/shutterstock/photos/1043962963/display_1500/stock-vector-design-concept-of-word-english-website-banner-1043962963.jpg"
                alt="Engaging Exercises"
              />
              <Carousel.Caption>
                <h3>Engaging Exercises</h3>
                <p>Interactive lessons and quizzes to solidify your learning.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.dribbble.com/userupload/11353684/file/original-34cddfe9ee4daae9475a6cf20b20248f.png?resize=2048x1536&vertical=center"
                alt="Track Your Progress"
              />
              <Carousel.Caption>
                <h3>Track Your Progress</h3>
                <p>Monitor your improvement over time.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Lesson Cards */}
      <Row className="mt-4">
        <Col>
          <h3>Popular Lessons</h3>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Learn Basic French</Card.Title>
              <Card.Text>Discover the fundamentals of French language.</Card.Text>
              <Button variant="primary" href="/lessons">Start Learning</Button>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Learn Basic Spanish</Card.Title>
              <Card.Text>Introduction to Spanish phrases and grammar.</Card.Text>
              <Button variant="primary" href="/lessons">Start Learning</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
