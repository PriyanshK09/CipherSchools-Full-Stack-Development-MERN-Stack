
import './App.css';
import ToDoScreen from './screens/ToDoScreen';
import AddTask from './components/AddTask'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { TaskProvider } from './Context/TaskContext';

const router = createBrowserRouter([
  {path:'/',element:<ToDoScreen/>},
  {path:'/add-task',element:<AddTask/>},
])

function App(){
  return (
    <TaskProvider>
      <RouterProvider router={router}/>
    </TaskProvider>
  );
}

export default App;
