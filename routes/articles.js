var express = require('express');
var router = express.Router();

var Article = require('../models/articles.model');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
  	if(err){
  		console.log(err);
  	}
  	res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
  	if(err){
  		console.log(err);
  	}
  	res.json(article);
  });
});

router.get('/:cat', function(req, res, next) {
  Article.getArticleByCat(req.params.cat, function(err, article){
  	if(err){
  		console.log(err);
  	}
  	res.json(article);
  });
});



module.exports = router;
