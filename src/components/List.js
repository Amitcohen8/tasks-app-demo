import React, { useContext } from 'react';
import './List.scss';
import Card from './Card'
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton, Button } from '@material-ui/core';
import { TaskContext } from '../context/TaskContext';

const List = ({ status, tasks }) => {
    const { addNewTask } = useContext(TaskContext)
    const cards = tasks && tasks.length ?
        tasks.map(item => <Card key={item.id} description={item.description} id={item.id} status={item.status}
        />) :
        <div />
    return (
        <div className="list">
            <div className="list-header">
                <h2>{status}</h2>
                <IconButton><AddIcon /></IconButton>
                <IconButton><MoreHorizIcon /></IconButton>
            </div>
            {cards}

            <div className="list-add-task">
                <Button
                    onClick={() => { addNewTask(status) }}
                    size="large"
                    color="default"
                    startIcon={<AddIcon />}
                >
                    Add task
                </Button>
            </div>

        </div>
    );
}

export default List;
