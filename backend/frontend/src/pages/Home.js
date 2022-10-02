import React, { Component } from "react";

import Base from "../components/Base";

class Home extends Base
{
    render()
    {
        return(
            <div>
                <h1>Home</h1>
                {super.getBaseComponents()}
            </div>
        );  
    }
}

export default Home;