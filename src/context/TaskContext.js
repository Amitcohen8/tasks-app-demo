
import React, { useState } from 'react'

const TaskContext = React.createContext()

const TaskContextProvider = (props) => {
    const initialState = [{ description: "do Something", status: "Candidates", id: Math.random() }]

    const [tasks, setTasks] = useState(initialState)
    const statusList = ["Candidates", "In progress", "QA/Code review", "Completed"]
    const addNewTask = (currentStatus) => {
        const newTask = { description: "New task", status: currentStatus, id: Math.random() }
        setTasks([...tasks, newTask])
    }

    const handleTaskChange = (id, description) => {
        let tempTasks = [...tasks]
        const currentTaskIndex = tempTasks.findIndex(el => el.id === id)
        tempTasks[currentTaskIndex].description = description;
        setTasks(tempTasks)
    }

    const handleTaskDelete = (id) => {
        let tempTasks = [...tasks]
        const currentTaskIndex = tempTasks.findIndex(el => el.id === id)
        tempTasks.splice(currentTaskIndex, 1)
        setTasks(tempTasks)

    }
    const changeTaskStatus = (side, status, id) => {
        const index = statusList.findIndex(el => el === status)
        let newStatus;

        if (side === 'left') {
            newStatus = statusList[index - 1]
        } else {
            newStatus = statusList[index + 1]
        }

        let tempTasks = [...tasks]
        const currentTaskIndex = tempTasks.findIndex(el => el.id === id)
        tempTasks[currentTaskIndex].status = newStatus;

        setTasks(tempTasks)
    }

    return (

        <TaskContext.Provider
            value={{
                tasks,
                handleTaskChange,
                addNewTask,
                handleTaskDelete,
                changeTaskStatus


            }}
        >
            {props.children}
        </TaskContext.Provider>

    )
}

export {
    TaskContextProvider,
    TaskContext
}







