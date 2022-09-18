import React, {Component} from 'react';
import
{
    createBrowserRouter,
    RouterProvider,
    Route
} from "react-router-dom";

import './App.css';
import Search from "./pages/Search";

class App extends Component
{
    render()
    {
        const router = createBrowserRouter
        (
            [
                {
                    path: "/",
                    element: <h2>LAKSDHFLKESRJHNF</h2>
                },
                {
                    path: "/Search",
                    element: <Search/>,
                }
            ]
        )

        return(
            <RouterProvider router={router}/>
        );
    }
}

export default App;
