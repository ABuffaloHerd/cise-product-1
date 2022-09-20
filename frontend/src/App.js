import React, {Component} from 'react';
import
{
    NavLink
} from "react-router-dom";

import './App.css';
import Search from "./pages/Search";

class App extends Component
{


    render()
    {
        return(
            <div>
                <h1>Text</h1>
                <NavLink to="/Search">fuckinwork</NavLink>
            </div>

        );
    }
}

export default App;
