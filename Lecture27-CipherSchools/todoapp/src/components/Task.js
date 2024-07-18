import React, { useContext, useState } from 'react'
import {options} from '../utils/formatDate';
import TaskContext from '../Context/TaskContext';

const Task = ({task:incomingTask}) => {
  const {deleteTask,editTask}=useContext(TaskContext);
  const [isEditing,setIsEditing]=useState(false);
  
  const { title, description,date,taskId }=incomingTask;
  
  const currentDate = new Date(date);
  const localeDateString = currentDate.toLocaleString('en-GB', options);// 'en-GB' to get DD/MM/YYYY format
  const [task,setTask]=useState(incomingTask);

  let handleInputChange=(e)=>{
    setTask({
        ...task,
        [e.target.name]:e.target.value,
    });
}

  if(isEditing) {
    return(
      <div className="card">
        <div className="content">
          <div className="ui form" >
            <div className="field">
                <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Task Title"/>
            </div>
            <div class="meta">
            {localeDateString}
            </div>
            <div className="field">
              <textarea rows="2" name='description' value={task.description} onChange={handleInputChange} placeholder="Task Description"></textarea>
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={()=>{
              editTask(task);
              setIsEditing(!isEditing);
            }}>Save</div>
            <div className="ui basic red button" onClick={()=>setIsEditing(false)}>Calcel</div>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {title}
          </div>
          <div class="meta">
          {localeDateString}
          </div>
          <div className="description">
            {description }
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={()=>setIsEditing(true)}>Edit</div>
            <div className="ui basic red button" onClick={()=>deleteTask(taskId)}>Delete</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;