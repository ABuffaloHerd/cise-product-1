import React, { Component } from "react";
import axios from "axios";
import Base from "../components/Base";
import "./styles/Table.css"

// requires props to function. 
/**
 * I want an object with these attributes and they have to be named like this understand???
 * Please see index.js for an example
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
                <table class="funnytable">
                    <th>Title</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Status</th>
                {
                    this.props.articles.map((a, _i) =>
                        {
                            return(<Article obj={a}/>)
                        })
                }
                </table>
            </div>
        );  
    }
}

class Article extends Component
{
    componentDidMount() {
        axios.get('http://localhost:8082/routes/Article-routes')
            .then(response => {
                this.setState()
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    render()
    {
        console.log("fuckinwork");

        return(
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.rating} / 10</td>
                <td>{this.props.obj.status}</td>
            </tr>
        )
    }
}

export default ShowAll;