import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './compinents/layout/HOme/Main.';
import Home from './compinents/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Anchor } from 'react-bootstrap';
import Contact from './compinents/pages/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "About",
        element: <Anchor></Anchor>
      },
      {
        path: "Career",
        element: <Contact></Contact>
      },

    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
