import React from 'react';
import LessonCard from '../components/LessonCard';

const Lessons = () => {
  const lessons = [
    { title: 'Lesson 1', description: 'Introduction to Spanish' },
    { title: 'Lesson 2', description: 'Basic Spanish Phrases' },
    { title: 'Lesson 3', description: 'Spanish Grammar Essentials' },
    // Add more lessons here
  ];

  return (
    <div>
      <h2>Lessons</h2>
      <div>
        {lessons.map((lesson, index) => (
          <LessonCard key={index} title={lesson.title} description={lesson.description} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
