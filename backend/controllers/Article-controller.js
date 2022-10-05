const Article = require("../model/Article");

// Get all articles
const getAllArticles = async (req, res, next) => {
  let articles;
  try {
    articles = await Article.find();
  } catch (err) {
    console.log(err);
  }

  if (!articles) {
    return res.status(404).json({ message: "No articles found" });
  }

  res.status(200).json({ articles });
};

// Add an article
const addArticle = async (req, res, next) => {
  const { title, authors, source, pubyear, volume, pages, doi } = req.body;
  let article;
  try {
    article = new Article({
      title,
      authors,
      source,
      pubyear,
      volume,
      pages,
      doi,
    });
    await article.save((err) => {
      if (err) {
        return console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
  //checks to see if the article was added
  if (!article) {
    return res.status(500).json({ message: "Article not added" });
  }
  res.status(201).json({ article });
};

// Update an article by title
const updateArticle = async (req, res, next) => {
  const articleTitle = req.params.title;
  const { title, authors, source, pubyear, volume, pages, doi } = req.body;
  let article;
  console.log("mooooooo");
  try {
    article = await Article.findOneAndUpdate(articleTitle, {
      title,
      authors,
      source,
      pubyear,
      volume,
      pages,
      doi,
    });
    await article.save();
  } catch (err) {
    console.log(err);
  }
  //checks to see if the article exists
  if (!article) {
    return res.status(404).json({ message: "Article not updated" });
  }
  res.status(201).json({ article });
};

// Delete an article by title
const deleteArticle = async (req, res, next) => {
  const articleTitle = req.params.title;
  let article;
  try {
    article = await Article.findOneAndDelete(articleTitle);
    await article.save();
  } catch (err) {
    console.log(err);
  }
  //checks to see if the article exists
  if (!article) {
    return res.status(404).json({ message: "Article not deleted" });
  }
  res.status(201).json({ article });
};

exports.getAllArticles = getAllArticles;
exports.addArticle = addArticle;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
