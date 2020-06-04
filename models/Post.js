const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
})

const Posts = mongoose.model('Post', postSchema);

module.exports = Posts;