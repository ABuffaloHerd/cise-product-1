import React from "react";

import Base from "../components/Base";

class Submit extends Base
{
    constructor()
    {
        super();

        // Thank fuck these exist
        this.title =        React.createRef();
        this.description =  React.createRef();
        this.tags =         React.createRef();

        // dunno what this does but it's required
        this.onSubmit = this.onSubmit.bind(this);
    }

    splitTags(string)
    {
        var tags = string.split(',');

        return tags;
    }

    onSubmit(e)
    {
        e.preventDefault();
        
        // validate that all fields are filled
        if(!this.title.current.value)
        {
            alert("Empty title field.");
            return;
        }
        else if (!this.description.current.value)
        {
            alert("Empty description field.");
            return;
        } 
        else if (!this.tags.current.value)
        {
            alert("Empty tags field");
            return;
        }

        // tags in a nice array for backend to work with~
        var tags = this.splitTags(this.tags.current.value);
        console.log(tags)
        
        // CODE TO BACKEND GOES HERE I HOPE SOMEONE ELSE IS MONITORING.
        console.log("submitted");
    }

    render()
    {
        return(
            <div>
                <h2>Submit an article</h2>
                {super.getBaseComponents()}

                <form onSubmit={this.onSubmit}>
                    <label>
                        Title:
                        <input type="text" ref={this.title}/>
                    </label>
                    <label>
                        Description:
                        <input type="text" ref={this.description}/>
                    </label>
                    <label>
                        Tags:
                        <textarea ref={this.tags}/>
                    </label>

                    <input type="submit" label="SUBMIT"/>
                </form>
            </div>
        );  
    }
}

export default Submit;