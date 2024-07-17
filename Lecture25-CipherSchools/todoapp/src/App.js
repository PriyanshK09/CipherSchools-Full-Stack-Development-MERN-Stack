
import './App.css';
import ToDoScreen from './screens/ToDoScreen';
import AddTask from './components/AddTask'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:'/',element:<ToDoScreen/>},
  {path:'/add-task',element:<AddTask/>},
])

function App(){
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
