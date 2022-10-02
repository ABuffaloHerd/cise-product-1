import React, { Component } from "react";
import Navbar from "./Navbar";
import "../pages/styles/Default.css";

// !! ABSTRACT !!
class Base extends Component
{
    constructor()
    {
        super();
        if(this.constructor === Base)
        {
            throw new Error("This is an abstract class what do you think you're doing?");
        }
    }

    getBaseComponents()
    {
        return(
            <div>
                {/* put components to be rendered in all child components */}

                <Navbar/>
            </div>
        );
    }
    
    render()
    {
        return(
            <div>
                <h2>Base Element</h2>
            </div>
        );  
    }
}

export default Base;