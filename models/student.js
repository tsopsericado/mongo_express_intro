const mongoose =require('../db')

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  firsName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: String,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  sex: String,
  level: String,
  address: String,
  town: String,
  region: String,
  country: String,
  score: Number,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student