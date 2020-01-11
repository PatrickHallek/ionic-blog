var express = require('express');
var router = express.Router();

var BlogPost = require('../models/blog-post')

/* GET home page. */
router.get('/blog-posts', function (req, res) {
    BlogPost.find({}).then(blogPosts => {
        res.json(blogPosts)
    });
});

router.post('/blog-post', function (req, res, next) {
    var blogPost = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        user: req.body.user,
        timestamp: Date.now(),
        comments: []
    })
    blogPost.save().then(data => {
            res.status(200).json({
                message: "New blog post created",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "Something went wrong"
            });
        });
});

module.exports = router;