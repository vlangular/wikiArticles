var express = require('express');
var router = express.Router();

var Category = require('../models/categories.model');

router.get('/', function(req, res, next) {
  Category.getCategories(function(err, category) {
      if(err) {
          console.log(err);
      } else {
          res.json(category);
      }
  });
});

module.exports = router;
