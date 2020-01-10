var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
    title: String,
    content: String,
    user: String,
    timestamp: Date,
    comments: [{
        user: String,
        content: String,
        timestamp: Date
    }]
});

module.exports = mongoose.model('blogPost', blogPostSchema);