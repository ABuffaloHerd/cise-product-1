import React, {Component} from 'react';
import
{
    NavLink
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Search from "./pages/Search";
import Home from "./pages/Home";

class App extends Component
{

    // TODO: REMOVE
    getComponent()
    {
        var comp;
        console.log("getcomponent");
        switch(this.props.location)
        {
            case "Home":
                comp = <Home/>
                break;

            case "Search":
                comp = <Search/>
                break;
        }

        return comp;
    }

    render()
    {
        console.log("app render");
        return(
            <div>
                <h1>Text</h1>
                <Navbar/>
                {this.getComponent()}
            </div>

        );
    }
}

export default App;
