import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Submit from './pages/Submit';

import { RouterProvider } from 'react-router';
import
{
    createBrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter
(
    [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/Search",
            element: <Search/>,
        },
        {
            path: "/Submit",
            element:  <Submit/>
        }
    ]
);

root.render(
  <React.StrictMode>   
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
