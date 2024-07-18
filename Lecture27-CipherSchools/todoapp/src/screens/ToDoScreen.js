import React, { useContext } from 'react'
import Task from '../components/Task';
import TaskContext from '../Context/TaskContext';
import { Link } from 'react-router-dom';
export const ToDoScreen = () => {
    const {taskList}=useContext(TaskContext);
    

    return (
        <div>
            <h1 className="ui heading center">TO DO List</h1>
            <div className='btn-addTask'>
                <Link to='/add-task'>
                    <button 
                        className="ui secondary button">Add Task
                    </button>
                </Link>
            </div>
            <section>
                <div className='ui cards cardContainer'>
                    {taskList.map((task) => (<Task task={task} key={task.taskId}/>))}
                </div>
            </section>
        </div>
    )
}

export default ToDoScreen;
