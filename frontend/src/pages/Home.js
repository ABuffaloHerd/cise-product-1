import React, { Component } from "react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

class Home extends Component
{
    render()
    {
        return(
            <div>
                <h2>Links</h2>
                <Navbar/>
            </div>
        );  
    }
}

export default Home;