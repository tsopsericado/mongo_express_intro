
const mongoose = require('../db')

const Schema = mongoose.Schema;
const bookSchema = new Schema({
   author: { type: String, required: true},
   title: { type: String, required: true},
   dop: String,
   language: String,
   edition: Number 
});


const Book = mongoose.model("book", bookSchema);

module.exports = Book

