const Article = require("../models/Article");

//gets all current articles that have passed the review process
const getAllArticles = async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({ articles });

  if (!articles) {
    return res.status(400).json({ msg: "cannot get articles" });
  }
  return res.status(200).json({ articles });
};

//adds a new article to the database
const addArticle = async (req, res, next) => {
  const { title, author, doi, date, pages, url, summary } = req.body;
  const newArticle = new Article({
    title,
    author,
    doi,
    date,
    pages,
    url,
    summary,
  });
  await newArticle.save();
  res.status(201).json({ newArticle });

  if (!title || !author || !date || !pages || !url || !summary) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (pages < 0) {
    return res
      .status(400)
      .json({ msg: "Please enter a valid number of pages" });
  }
  if (!url.includes("http://") && !url.includes("https://")) {
    return res.status(400).json({ msg: "Please enter a valid URL" });
  }
  if (!date.includes("-")) {
    return res.status(400).json({ msg: "Please enter a valid date" });
  }
  if (!articles) {
    return res.status(400).json({ msg: "cannot add articles" });
  }
  return res.status(201).json({ articles });
};

//gets a specific article by id
const getArticleById = async (req, res, next) => {
  const { id } = req.params.id;
  const article = await Article.findById(id);

  if (!article) {
    return res.status(400).json({ msg: "cannot get article" });
  }
  return res.status(200).json({ article });
};

//gets article by title
const getArticleByTitle = async (req, res, next) => {
  const { title } = req.params.title;
  const article = await Article.find({ title: title });

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

  if (!article) {
    return res.status(400).json({ msg: "cannot update article" });
  }
  return res.status(200).json({ article });
};

//deletes an article by id
const deleteArticle = async (req, res, next) => {
  const { id } = req.params.id;
  const article = await Article.findByIdAndDelete(id);

  if (!article) {
    return res.status(400).json({ msg: "cannot delete article" });
  }
  return res.status(200).json({ article });
};

exports.deleteArticle = deleteArticle;
exports.getArticleByTitle = getArticleByTitle;
exports.updateArticle = updateArticle;
exports.getArticleById = getArticleById;
exports.addArticle = addArticle;
exports.getAllArticles = getAllArticles;
