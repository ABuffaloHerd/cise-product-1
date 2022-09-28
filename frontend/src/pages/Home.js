import React, { Component } from "react";

import Base from "../components/Base";

class Home extends Base
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <h2>Home</h2>
                {super.getBaseComponents()}
            </div>
        );  
    }
}

export default Home;