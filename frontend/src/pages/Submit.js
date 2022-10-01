import React from "react";

import Base from "../components/Base";

class Submit extends Base
{
    constructor()
    {
        super();

        this.key =          React.createRef();
        this.title =        React.createRef();
        this.description =  React.createRef();
        this.rating =       React.createRef();
        this.tags =         React.createRef();
        this.status =       React.createRef();
        this.value =        React.createRef();
    }

    render()
    {
        return(
            <div>
                <h2>Submit an article</h2>
                {super.getBaseComponents()}

                <form>
                    <label>
                        Title:
                        <input type="text" ref={this.title}/>
                    </label>
                    <label>
                        Description:
                        <input type="text" ref={this.title}/>
                    </label>
                </form>
            </div>
        );  
    }
}

export default Submit;