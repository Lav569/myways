// OngoingTasks.js
import React from 'react';

function OngoingTasks({ ongoingTasks, completeTask }) {
  return (
    <div className="task-card">
      <h2>In Progress</h2>
      <ul>
        {ongoingTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => completeTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OngoingTasks;
