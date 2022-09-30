import React, { Component } from "react";

import Base from "../components/Base";

// requires props to function. 
/**
 * I want an object with these attributes and they have to be named like this understand???
 * {
 *      key
 *      title
 *      description
 *      tags (list)
 *      status
 *      rating
 * }
 */
class ShowAll extends Base
{
    render()
    {
        console.log(this.props.articles);

        return(
            <div>
                <h2>View all articles</h2>
                {super.getBaseComponents()}
                {
                    this.props.articles.map((a, _i) =>
                        {
                            return(<Article obj={a}/>)
                        })
                }
            </div>
        );  
    }
}

class Article extends Component
{
    render()
    {
        console.log("fuckinwork");

        return(
            <div>
                <h1>{this.props.obj.title}</h1>
                <h2>{this.props.obj.status}</h2>
                <h3>{this.props.obj.rating} / 10</h3>
                <p>{this.props.obj.description}</p>
            </div>
        )
    }
}

export default ShowAll;