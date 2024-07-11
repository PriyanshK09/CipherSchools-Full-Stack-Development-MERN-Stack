import React, { useState } from 'react'

const AddTask = (props) => {
    
    const [task,setTask]=useState({title:'',description:''}); 

    let handleInputChange=(e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value,
        });
        console.log("hello")
    }

    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);

    }

    
    

  return (
    <div className="form">
        <h2 className="ui heading center">Add New Task</h2>
        <from className="ui form" >
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" onChange={handleInputChange} placeholder="Task Title"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" name='description' onChange={handleInputChange} placeholder="Task Description"></textarea>
            </div>
            <button type="submit" onClick={onFormSubmit} className="ui primary button" >Submit</button>
        </from>
    </div>
  )
}

export default AddTask;
