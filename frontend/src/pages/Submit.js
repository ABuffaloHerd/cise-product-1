import React, { Component } from "react";

import Base from "../components/Base";

class Submit extends Base
{
    render()
    {
        return(
            <div>
                <h2>Submit an article</h2>
                {super.getBaseComponents()}


            </div>
        );  
    }
}

export default Submit;