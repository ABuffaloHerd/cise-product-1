const express = require("express");
const router = express.Router();
const articleController = require("../controllers/Article-controllers");

router.get("/", articleController.getAllArticles);
router.post("/", articleController.addArticle);
router.get("/:title", articleController.getArticleByTitle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
