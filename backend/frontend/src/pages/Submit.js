import React from "react";
import axios from 'axios';
import Base from "../components/Base";
import "./styles/Form.css";

// import express router
import router from "../../../routes/Article-routes.js";

class Submit extends Base
{
    constructor()
    {
        super();

        // Create references for the values holding the form
        this.title = React.createRef();
        this.authors = React.createRef();
        this.source = React.createRef();
        this.pubyear = React.createRef();
        this.volume = React.createRef();
        this.pages = React.createRef();
        this.doi = React.createRef();

        // dunno what this does but it's required
        this.onSubmit = this.onSubmit.bind(this);
    }

    splitTags(string)
    {
        var tags = string.split(',');

        return tags;
    }

    lobster()
    {
        var img = require("./images/lob.png"); // need require so webpack accesses resource
        var lobster = document.getElementById("lobster");
        var i = document.createElement("img");
        i.src = img;

        lobster.appendChild(i);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    onSubmit(e)
    {
        e.preventDefault();

        // Ensure fields are not empty
        const reqBibliographicDetails = [this.title, this.authors, this.source, this.pubyear, this.pages];
        for (let i = 0; i < reqBibliographicDetails.length; i++) {
            if (!reqBibliographicDetails[i].current.value) {
                alert("Please fill in all required fields.");
                return;
            }
        }
        
        // CODE TO BACKEND GOES HERE I HOPE SOMEONE ELSE IS MONITORING.
        // console.log("submitted");
        // Turn the input from the fields into json
        const data = {
            title: this.title.current.value,
            authors: this.authors.current.value,
            source: this.source.current.value,
            pubyear: this.pubyear.current.value,
            volume: this.volume.current.value,
            pages: this.pages.current.value,
            doi: this.doi.current.value
        };

        const result = JSON.stringify(data);
        // Testing purposes
        alert(result);
        
        axios
            .post('http://localhost:8082/routes/Article-routes', result)
            .then( (res) => {
                alert("Successful!");
//                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err.response);
                alert('An error occurred! Try submitting the form again.');
            });

        this.lobster();
    }

    render()
    {
        return(
            <div>
                <h2>Submit an article</h2>
                {super.getBaseComponents()}

                <div class="formDiv">
                    <form class="textForm" onSubmit={this.onSubmit}>
                        <label>
                            *Title:
                            <input type="text" ref={this.title} placeholder="Title"/>
                        </label>
                        <label>
                            *Author(s), comma-separated:
                            <input type="text" ref={this.authors} placeholder="e.g. Strat, J., Jackson, F. M."/>
                        </label>
                        <label>
                            *Source:
                            <input type="text" ref={this.source} placeholder="Journal/Conference name"/>
                        </label>
                        <label>
                            *Year of Publication:
                            <input type="text" ref={this.pubyear} placeholder="Publication Year"/>
                        </label>
                        <label>
                            Volume number:
                            <input type="text" ref={this.volume} placeholder="Volume"/>
                        </label><label>
                            *Page(s):
                            <input type="text" ref={this.pages} placeholder="e.g., 15-17"/>
                        </label>
                        <label>
                            DOI:
                            <input type="text" ref={this.doi} placeholder="e.g., http://doi.org/1234/xxxx/xxxx"/>
                        </label>
                        <input type="submit" label="SUBMIT"/>
                    </form>
                </div>
                <div id="lobster" class="lob"></div>
            </div>
        );  
    }
}

export default Submit;