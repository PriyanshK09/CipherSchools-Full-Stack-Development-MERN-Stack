import {createContext, useState } from "react";
import toast from "react-hot-toast";
import {v4 as randomUUID} from "uuid";


const TaskContext = createContext();
const TASK_EDITABLE_FIELD_LIST=['title','description'];

const TaskProvider=({children})=>{
    const [taskList,setTaskList]=useState([]);

    const addNewTask=(task)=>{
        toast.success('New Task Added Successfully!!');
        setTaskList(taskList=>[...taskList,{...task,date:Date.now(),taskId:randomUUID()}]);
    }

    const deleteTask=(taskId)=>{
        setTaskList(taskList=>taskList.filter((task)=>task.taskId !== taskId));
        toast.error('Task is Deleted Successfully!!');

    }

    const editTask=(task)=>{
        let tempTasklist=[...taskList];
        for(let t of tempTasklist){
            if(t.taskId===task.taskId){
                TASK_EDITABLE_FIELD_LIST.forEach((field)=>(t[field]=task[field]));
            }
        }
        setTaskList(taskList)
        toast.success('Task Saved Successfully!!');
    }


    return <TaskContext.Provider value={{addNewTask,taskList,deleteTask,editTask}}>
        {children}
    </TaskContext.Provider>
}

export {TaskProvider};
export default TaskContext;




