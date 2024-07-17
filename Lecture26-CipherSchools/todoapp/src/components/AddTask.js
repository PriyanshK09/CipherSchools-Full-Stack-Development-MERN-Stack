import React, { useContext, useState } from 'react'
import TaskContext from '../Context/TaskContext';
import { Link } from 'react-router-dom';

const AddTask = () => {
    
    const {addNewTask} = useContext(TaskContext);

    const [task,setTask]=useState({title:'',description:''}); 

    let handleInputChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value,
        });
    }

    let onFormSubmit=(e)=>{
        e.preventDefault();
        if(task.title==='' && task.description==='') alert("All field are Required!");
        else{
        console.log(task);
        addNewTask(task);
        setTask({title:'',description:''});
        }
    }   


  return (
    <div className="form">
        <Link to='/'><h1 className="ui secondary button">Go to Home</h1></Link>
        <h2 className="ui heading center">Add New Task</h2>
        <from className="ui form" >
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Task Title"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" name='description' value={task.description} onChange={handleInputChange} placeholder="Task Description"></textarea>
            </div>
            <button type="submit" onClick={onFormSubmit} className="ui primary button" >Submit</button>
        </from>
    </div>
  )
}

export default AddTask;
