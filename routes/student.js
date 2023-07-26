var express = require("express");
var router = express.Router();
const Student = require('../models/student')

// handler fxn
const respHandler= (res, student) => {
  console.log(student)
  return res.json({ status: "ok", student})
}



const errorHandler = (res, err) => { 
    let errorMsg = "An error occured: " + err
    console.log(errorMsg)
    return res.json({"status" : errorMsg}).status(500)
}


/* GET student listing. */
router.get('/', function(req, res){
  res.send('respond with a resource')
})



/*Post creat student. */
router.post("/", async function (req, res) {
  let student = new Student(req.body.student)
   student
     .save()
     .then((resp) => respHandler(res, resp))
     .catch((err) => errorHandler(res, err));
});


//Get a single student by _id
router.get('/:id', function(req, res){
  let id = req.params.id
 
  Student.findById(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errorHandler(res, err));

})

// Updating a the student
// router.post('/:id', function(req, res{
//   Student.
// }))


module.exports = router;
