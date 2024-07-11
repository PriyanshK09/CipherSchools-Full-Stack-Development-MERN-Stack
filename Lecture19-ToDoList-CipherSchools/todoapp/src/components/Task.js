import React from 'react'
import {options} from '../utils/formatDate';

export const Task = (props) => {
  
  const { title, description,date }=props.task;

  const currentDate = new Date(date);
  
const localeDateString = currentDate.toLocaleString('en-GB', options);// 'en-GB' to get DD/MM/YYYY format

  return (

    <div className="card">
      <div className="content">
        <div className="header">
          {title}
        </div>
        <div class="meta">
        Created Date: {localeDateString}
        </div>
        <div className="description">
          {description }<b> best friends</b>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Edit</div>
          <div className="ui basic red button">Delete</div>
        </div>
      </div>
    </div>
  )
}

export default Task;