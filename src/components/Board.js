
import React, { Fragment, useContext } from 'react'
import './Board.scss';
import List from './List';
import { TaskContext } from '../context/TaskContext'


function Board(props) {


  const { tasks } = useContext(TaskContext)
  const statusList = ["Candidates", "In progress", "QA/Code review", "Completed"]

  return (
<div className="board">
<h1 className="board-header">{props.title}</h1>
<div className="board-content">
      {statusList.map(status =>
        <List key={status} status={status} tasks={[...tasks.filter(task => task.status === status)] || null}
        />
      )}
  </div>


    </div>

  );
}

export default Board;
