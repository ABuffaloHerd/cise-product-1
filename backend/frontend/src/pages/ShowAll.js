import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Base from "../components/Base";

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
class ShowAll extends Base {
  render() {
    console.log(this.props.articles);

    return (
      <div>
        <h2>View all articles</h2>
        {super.getBaseComponents()}
        {this.props.articles.map((a, _i) => {
          return <Article obj={a} />;
        })}
      </div>
    );
  }
}

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: props.obj,
      key: props.obj.key,
      title: props.obj.title,
      description: props.obj.description,
      tags: props.obj.tags,
      status: props.obj.status,
      rating: props.obj.rating,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/articles/")
      .then((response) => {
        this.setState({ articles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  articleList() {
    return this.state.articles.map((currentarticle) => {
      return (
        <Article
          article={currentarticle}
          deleteArticle={this.deleteArticle}
          key={currentarticle._id}
        />
      );
    });
  }

  render() {
    console.log("fuckinwork");

    return (
      <div>
        <h1>{this.props.obj.title}</h1>
        <h2>{this.props.obj.status}</h2>
        <h3>{this.props.obj.rating} / 10</h3>
        <p>{this.props.obj.description}</p>
      </div>
    );
  }
}

export default ShowAll;
