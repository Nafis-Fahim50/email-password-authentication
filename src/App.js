import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
    path: '/', element:<Main></Main>,
    children:[
    {
      path: '/', element:<Home></Home>
    },
    {
      path: '/home', element:<Home></Home>
    },
    {
      path: '/signup', element:<Signup></Signup>
    },
    {
      path: '/login', element:<Login></Login>
    }
  ]
  }
])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
