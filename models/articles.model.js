var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type:String,
		required: true
	},
	category: {
		type:String,
		index: true,
		required: true
	}
});

var Article = module.exports = mongoose.model('Article', articleSchema);

module.exports.getArticles = function(callback) {
    Article.find(callback);
};

module.exports.getArticleById = function(id, callback) {
    Article.findById(id, callback);
};

module.exports.getArticleByCat = function(cat, callback) {
	var query = { category: cat };
	Category.find(query, callback);
};
