
import './App.css';
import ToDoScreen from './screens/ToDoScreen';
import AddTask from './components/AddTask'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { TaskProvider } from './Context/TaskContext';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {path:'/',element:<ToDoScreen/>},
  {path:'/add-task',element:<AddTask/>},
])

function App(){
  return (
    <TaskProvider>
      <RouterProvider router={router}/>
      <Toaster />
    </TaskProvider>
  );
}

export default App;
