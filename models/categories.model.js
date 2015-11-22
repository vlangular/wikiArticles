var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name:  String,
  description: String
});

var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback) {
        Category.find(callback);
}
