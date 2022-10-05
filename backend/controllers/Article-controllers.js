const Article = require("../models/Article");

//gets all current articles that have passed the review process
const getAllArticles = async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({ articles });

  //checks if the articles exists
  if (!articles) {
    return res.status(400).json({ msg: "cannot get articles" });
  }
  return res.status(200).json({ articles });
};

//adds a new article to the review database
const addArticle = async (req, res, next) => {
  const { key, title, description, rating, tags, status } = req.body;
  const article = await Article.create({
    key,
    title,
    description,
    rating,
    tags,
    status,
  });

  await newArticle.save();
  res.status(201).json({ newArticle });
};

//gets article by title
const getArticleByTitle = async (req, res, next) => {
  const { title } = req.params.title;
  const article = await Article.find({ title: title });

  //checks if the article exists
  if (!article) {
    return res.status(400).json({ msg: "cannot get article" });
  }
  return res.status(200).json({ article });
};

//updates an article by id
const updateArticle = async (req, res, next) => {
  const { id } = req.params.id;
  const { title, author, doi, date, pages, url, summary } = req.body;
  const article = await Article.findByIdAndUpdate(id, {
    title,
    author,
    doi,
    date,
    pages,
    url,
    summary,
  });

  //checks if the article exists
  if (!article) {
    return res.status(400).json({ msg: "cannot update article" });
  }
  return res.status(200).json({ article });
};

//deletes an article by id from review database
const deleteArticle = async (req, res, next) => {
  const { id } = req.params.id;
  const article = await Article.findByIdAndDelete(id);
};

//exports all the functions
exports.deleteArticle = deleteArticle;
exports.getArticleByTitle = getArticleByTitle;
exports.updateArticle = updateArticle;
exports.addArticle = addArticle;
exports.getAllArticles = getAllArticles;
