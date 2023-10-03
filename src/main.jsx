import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootCompo from './RootCompo/RootCompo';
import Home from './RootCompo/Home';
import Login from './RootCompo/Login';
import Register from './RootCompo/Register';
import AuthProvider from './providers/AuthProvider';
import Orders from './RootCompo/Orders';
import Private from './RootCompo/Private';
import Dasboard from './RootCompo/Dasboard';
import Profile from './RootCompo/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootCompo></RootCompo>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/orders',
        element:<Private><Orders></Orders></Private>
      },
      {
        path:'/dashboard',
        element:<Private><Dasboard></Dasboard></Private>
      },
      {
        path:'/profile',
        element:<Private><Profile></Profile></Private>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
