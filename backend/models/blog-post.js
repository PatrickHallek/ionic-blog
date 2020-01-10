var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
    title: String,
    user: String,
    timestamp: Date,
    comments: [{
        user: String,
        comment: String,
        timestamp: Date
    }]
});

module.exports = mongoose.model('users', userSchema);