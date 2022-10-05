import React from "react";
import axios from "axios";
import Base from "../components/Base";
import "./styles/Form.css";

class Submit extends Base {
  constructor() {
    super();

    // Thank fuck these exist
    this.title = React.createRef();
    this.description = React.createRef();
    this.tags = React.createRef();

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

  onSubmit(e) {
    e.preventDefault();

    // validate that all fields are filled
    if (!this.title.current.value) {
      alert("Empty title field.");
      return;
    } else if (!this.description.current.value) {
      alert("Empty description field.");
      return;
    } else if (!this.tags.current.value) {
      alert("Empty tags field");
      return;
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
