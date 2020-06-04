const express = require('express');
const router = express.Router();
const Posts = require('../models/Post.js');

router.get('/', (req, res) => {

    Posts.find({}, (err, foundPosts) => {
        res.json(foundPosts);
    })
});

router.delete('/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id, (err, deletedPost) => {
        res.json(deletedPost);
    })
})

router.post('/', (req, res) => {

    Posts.create(req.body, (err, createdPost) => {
        res.json(createdPost);
    });
})

router.put('/:id', (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
        res.json(updatedPost)
    })
})

module.exports = router;