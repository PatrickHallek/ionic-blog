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

router.put('/blog-post-comment', function (req, res, next) {

    console.log(req.body)
    var conditions = {
        _id: req.body.id
    }
    var update = {
        $push: {
            comments: {
                user: req.body.user,
                content: req.body.content,
                timestamp: Date.now()
            }
        }
    }

    BlogPost.update(conditions, update).then(data => {
            res.status(200).json({
                message: "New comment created",
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