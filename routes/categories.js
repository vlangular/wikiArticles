var express = require('express');
var router = express.Router();

router.get('/categories', function(req, res) {
    var db = req.db;
    var collection = db.get('categorycollection');
    collection.find({},{},function(e,docs){
        res.render('categorycollection', {
            "categorycollection" : docs
        });
    });
});

module.exports = router;
