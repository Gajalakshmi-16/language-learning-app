import React from 'react';

const LessonCard = ({ title, description }) => {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Start Lesson</button>
    </div>
  );
};

export default LessonCard;
