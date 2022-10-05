const express = require("express");
const router = express.Router();
const Article = require("../model/Article");
const ArticleController = require("../controllers/Article-controller");
/*
 ** this is all tested and working via Postman and MongoDB Atlas
 ** if you need to add more routes, just copy and paste the code below
 ** and make sure you add the logic to the controller not here
 */
// Get all articles
router.get("/", ArticleController.getAllArticles);
// Add an article
router.post("/", ArticleController.addArticle);
// Update an article by id
router.put("/:title", ArticleController.updateArticle);
// Delete an article by id
router.delete("/:title", ArticleController.deleteArticle);

module.exports = router;
