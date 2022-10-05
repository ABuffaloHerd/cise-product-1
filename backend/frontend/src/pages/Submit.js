import React from "react";
import axios from "axios";
import Base from "../components/Base";
import "./styles/Form.css";

class Submit extends Base {
  constructor() {
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

  splitTags(string) {
    var tags = string.split(",");

    return tags;
  }

  lobster() {
    var img = require("./images/lob.png"); // need require so webpack accesses resource
    var lobster = document.getElementById("lobster");
    var i = document.createElement("img");
    i.src = img;

    lobster.appendChild(i);
  }

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

        this.lobster();
        
        // CODE TO BACKEND GOES HERE I HOPE SOMEONE ELSE IS MONITORING.
        // console.log("submitted");
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

    //this.lobster();

    // tags in a nice array for backend to work with~
    var tags = this.splitTags(this.tags.current.value);
    // console.log(tags)

    // CODE TO BACKEND GOES HERE I HOPE SOMEONE ELSE IS MONITORING.
    // console.log("submitted");

    const newBook = {
      title: this.title.current.value,
      description: this.description.current.value,
      tags: tags,
    };

    axios
      .post("http://localhost:8082/books/add", newBook)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      description: "",
      tags: "",
    });
  }

  render() {
    return (
      <div>
        <h2>Submit an article</h2>
        {super.getBaseComponents()}

        <div class="formDiv">
          <form class="textForm" onSubmit={this.onSubmit}>
            <label>
              Title:
              <input type="text" ref={this.title} placeholder="Sample text" />
            </label>
            <label>
              Description:
              <input
                type="text"
                ref={this.description}
                placeholder="Sample descriptive text"
              />
            </label>
            <label>
              Tags: (comma separated)
              <textarea
                ref={this.tags}
                rows="3"
                cols="50"
                placeholder="asdfmovie1,asdfmovie2"
              />
            </label>

            <input type="submit" label="SUBMIT" />
          </form>
        </div>
        <div id="lobster" class="lob"></div>
      </div>
    );
  }
}

export default Submit;
