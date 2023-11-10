// Sidebar.js
import React from 'react';

const Sidebar = ({ totalQuestions, markedForReview }) => {
  return (
    <div>
      <h2>Sidebar</h2>
      <p>Total Questions: {totalQuestions}</p>
      <ul>
        {/* Display a list of questions with marks for review */}
        {markedForReview.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
