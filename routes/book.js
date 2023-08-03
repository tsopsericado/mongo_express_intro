var express = require("express");
var router = express.Router();
const Book = require("../models/book")

//hanler fxn 
const respHandler = (res, book) => {
    console.log(book)
    return res.json({ status: "ok", book})
}

const errorHandler = (res, err) => {
    let errorMsg = "An error occured:" + err
    console.log(errorMsg)
    return res.json({ "status" : errorMsg}).
    status(500)
}

// Getting a book _id
 router.get('/', function(req, res){
    res.send('respond with a resource')
 })

 //Post create book
router.post("/", async function(req, res) {
   let book = new Book(req.body.book)
   book
     .save()
     .then((resp) => respHandler(res, resp))
     .catch((err) => errorHandler(res, err));

});

//Get a single book
router.get('/:id', function(req, res){
    let id = req.params.id

    Book.findById(id)
       .exec()
       .then((resp) => respHandler(res, resp))
       .catch((err) => errorHandler(res, err));
});

//Deleting a book
router.delete('/:id', function(req, res){
  let id = req.params.id
    Book.findByIdAndDelete(id)
      .exec()
      .then((resp) => respHandler(res, resp))
      .catch((err) => errorHandler(res, err));
});


//Updating a book
router.post('/:id', function(req, res){
  let { id } = req.params
  let book = req.body.book
    Book.findByIdAndUpdate(id, book)      
      .exec()
      .then((resp) => respHandler(res, resp))
      .catch((err) => errorHandler(res, err));
})


module.exports =router