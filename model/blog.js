const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    image: String,
    title: String,
    details: String,
    date: {
        type: Date,
        default: Date.now
    },
})

const Blog = mongoose.model("blog", blogSchema);

module.exports =  Blog;