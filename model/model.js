const { default: mongoose, Schema } = require("mongoose");

// Schema
const BookSchema = new Schema({
    title: {type: String, required: true},
    commentcount: Number
});

const CommentSchema = new Schema({
    book_id: {type: String, required: true},
    comment: {type: String, required: true}
});

// Model
const Book = new mongoose.model('Book', BookSchema);
const Comment = new mongoose.model('Comment', CommentSchema);

module.exports = {Book,Comment};
