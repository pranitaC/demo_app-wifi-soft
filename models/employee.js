var mongoose = require("../db/connection");
var EmployeeSchema = mongoose.Schema({
  name: String,
  dob: String,
  designation: String,
  salary: String,
  date_of_joining: String
}); 

var Employee = mongoose.model("employee", EmployeeSchema); 
module.exports = Employee; 
