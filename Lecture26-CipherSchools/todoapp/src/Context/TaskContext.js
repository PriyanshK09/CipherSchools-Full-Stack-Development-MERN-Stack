import {createContext, useState } from "react";


const TaskContext = createContext();

const TaskProvider=({children})=>{
    const [taskList,setTaskList]=useState([]);

    const addNewTask=(task)=>{
        alert("New Task is Added");
        setTaskList(taskList=>[...taskList,{...task,date:Date.now()}]);
    }
    return <TaskContext.Provider value={{addNewTask,taskList}}>
        {children}
    </TaskContext.Provider>
}

export {TaskProvider};
export default TaskContext;