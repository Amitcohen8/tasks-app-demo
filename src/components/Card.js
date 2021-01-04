import React, { Fragment, useState, useContext } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { TaskContext } from '../context/TaskContext';
import './Card.scss';

const Card = ({ id, description, status }) => {
    const { handleTaskChange, handleTaskDelete, changeTaskStatus } = useContext(TaskContext)
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(description)
    const [error, setError] = useState(null)

    const handleBlur = (value) => {
        setEdit(!edit)
        handleTaskChange(id, value)
    }

    const handleValidation = (value) => {

        if (value.length < 2) {
            setError("Task description should be atleast 2 char.")
            return false
        }
        setError(null)
        return true
    }

    const handleEdit = () => {
        if (!edit) {
            { setEdit(!edit) }
        }
    }


    return (
        <div className="card" onDoubleClick={() => handleEdit()}>
            <div className="card-navigation card-navigation-left">
                {status !== "Candidates" ?
                    <a  onClick={() => changeTaskStatus('left', status, id)}>
                        <ArrowBackIosIcon color='default' className="card-navigation-icon" />
                    </a> : null
                }

            </div>


            <div className="card-row"><CheckCircleIcon color="primary" />

                {

                    !edit ?

                        <p>{description}</p>

                        :
                        <Fragment>
                            <p><input placeholder="Please enter task description" type="text" value={value} minLength={1} autoFocus
                                onChange={(e) => {

                                    setValue(e.target.value)
                                }
                                }
                                onBlur={(e) => {
                                    const isValid = handleValidation(e.target.value)
                                    if (!isValid) return
                                    handleBlur(e.target.value)

                                }}

                            /></p>

                        </Fragment>

                }
            </div>
            <div className="card-row-error">{error ? <p >{error}</p> : null}</div>
            <div className="card-delete">
                <IconButton onClick={() => { handleTaskDelete(id) }}>
                    <DeleteIcon color='secondary' className="card-delete-icon" />
                </IconButton>
            </div>

            <div className="card-navigation card-navigation-right">

                {
                    status !== "Completed" ?
                        <a  onClick={()=>{ 
                            changeTaskStatus('right', status, id)
                            }} 
                         >
                            <ArrowForwardIosIcon color='default' className="card-navigation-icon" />
                        </a> : null
                }

            </div>
        </div>
    );
}

export default Card;
