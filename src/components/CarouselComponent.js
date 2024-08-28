import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Start Learning Spanish</h3>
          <p>Immerse yourself in the Spanish language with our comprehensive lessons.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Engaging Exercises</h3>
          <p>Practice what you’ve learned with interactive exercises and quizzes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Track Your Progress</h3>
          <p>Monitor your improvement and achievements as you progress through the lessons.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
