import React, { useContext, useState } from 'react'
import TaskContext from '../Context/TaskContext';
import { Link, useNavigate } from 'react-router-dom';

const AddTask = () => {
    const navigate=useNavigate();
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
        // console.log(task);
        addNewTask(task);
        setTask({title:'',description:''});
        navigate('/')
        }
    }   


  return (
    <div className="form">
        <Link to='/'><h1 className="ui secondary button">Go to Home</h1></Link>
        <h2 className="ui heading center">Add New Task</h2>
        <div className="ui form" >
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Task Title"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" name='description' value={task.description} onChange={handleInputChange} placeholder="Task Description"></textarea>
            </div>
            <button type="submit" onClick={onFormSubmit} className="ui primary button" >Submit</button>
        </div>
    </div>
  )
}

export default AddTask;
