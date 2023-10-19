// CompletedTasks.js
import React from 'react';

function CompletedTasks({ completedTasks }) {
  return (
    <div className="task-card">
      <h2>Done</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
