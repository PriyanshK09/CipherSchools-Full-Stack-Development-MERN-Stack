import React, { useState } from 'react'
import Task from '../components/Task';
import AddTask from '../components/AddTask';

export const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([{
                        title: "Title",
                        description: "This is description my Best Friend",
                        date: Date.now()
                    },]);

    const [addTask, setAddTask] = useState(false);

    let addNewTask = (task) => {
        try {
            console.log("Task is ", task);
            setTaskList(taskList => [...taskList, { ...task, date: new Date() }]);
        } catch (error) {
            console.log("Error message: ", error.message);
        }
    }

    return (
        <div>
            <h1 className="ui heading center">TO DO List</h1>
            <div className='btn-addTask'>
                <button onClick={() => setAddTask(!addTask)}
                    className="ui secondary button">Add Task
                </button>
            </div>
            <div>
                {addTask ? <AddTask onSubmit={addNewTask} /> : <div></div>}
            </div>
            <section>
                <div className='ui cards cardContainer'>
                    {taskList.map((task, index) => (<Task task={task} key={index}/>))}
                </div>
            </section>
        </div>
    )
}

export default ToDoScreen;
