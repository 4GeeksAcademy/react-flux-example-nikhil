import React, { useContext, useState } from 'react'
import MyContext from '../../GlobalContext'
// import TaskContext from '../TaskContext';

const AddItem = () => {

    const [newTask, setNewTask] = useState('')

    const context = useContext(MyContext);
    // const {taskActions} = useContext(TaskContext);

    const addNewTask = () => {
        if(newTask !== '') {
            // taskActions({ type: 'add', payload: newTask })
            context.actions.addTask(newTask)
            setNewTask('')
        } else {
            alert('Task can not be empty!')
        }
    }

    return (
        <div>
            <input 
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            />
            <button onClick={addNewTask}>Add</button>
        </div>
    )
}

export default AddItem