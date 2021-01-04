
import React, { useContext } from 'react'
import './App.scss';
import List from './components/List';
import { TaskContext } from './context/TaskContext'


function App() {


  const { tasks } = useContext(TaskContext)
  const statusList = ["Candidates", "In progress", "QA/Code review", "Completed"]

  return (

    <div className="App">
      {statusList.map(status =>
        <List key={status} status={status} tasks={[...tasks.filter(task => task.status === status)] || null}
        />
      )}
    </div>

  );
}

export default App;
