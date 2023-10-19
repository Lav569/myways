// App.js
import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import OngoingTasks from './components/OnGoingTask';
import CompletedTasks from './components/CompletedTasks';


function App() {
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setOngoingTasks([...ongoingTasks, task]);
  };

  const completeTask = (index) => {
    const completedTask = ongoingTasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    setOngoingTasks(ongoingTasks.filter((task, i) => i !== index));
  };

  return (
    <div className="App">
      <div>
      </div>
      <div>
        <h1>Task Board</h1>
        <div className="container">
          <AddTask addTask={addTask} />
          <OngoingTasks ongoingTasks={ongoingTasks} completeTask={completeTask} />
          <CompletedTasks completedTasks={completedTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
