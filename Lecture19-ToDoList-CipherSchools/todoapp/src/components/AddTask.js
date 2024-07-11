import React from 'react'

const AddTask = (props) => {
    var increment=props.increment;
    

  return (
    <div className="form">
        <h2 className="ui heading center">Add New Task</h2>
        <from className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" placeholder="Task Title"/>
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" placeholder="Task Description"></textarea>
            </div>
            <button className="ui primary button" onClick={increment}>Submit</button>
        </from>
    </div>
  )
}

export default AddTask;
