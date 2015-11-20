var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res) {
    var db = req.db;
    var collection = db.get('articlecollection');
    collection.find({},{},function(e,docs){
        res.render('articlecollection', {
            "articlecollection" : docs
        });
    });
});

module.exports = router;
