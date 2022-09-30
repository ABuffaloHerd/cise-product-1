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
import ShowAll from './pages/ShowAll';

const root = ReactDOM.createRoot(document.getElementById('root'));

const samplearticles =
[
    {
        key: 0,
        title: "Defenestration for the classroom teacher",
        description: "asdf",
        rating: 10,
        tags: ["high school", 'ms lal', "JACKSON I'M GOING TO THROW YOU OUT THE WINDOW"],
        status: "Accepted"
    },
    {
        key: 1,
        title: "Domestic terrorism for dummies",
        description: "asdf",
        rating: 10,
        tags: ["high school", 'ms lal', "I FUCKING HATE THIS SHIT LANGUAGE"],
        status: "Accepted"
    },
    {
        key: 2,
        title: "the code is reachable you fucking liar.",
        description: "asdf",
        rating: 10,
        tags: ["high school", 'ms lal', "I FUCKING HATE THIS SHIT LANGUAGE"],
        status: "Accepted"
    }
]
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
        },
        {
            path:"/ShowAll",
            element: <ShowAll articles = {samplearticles}/>
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
