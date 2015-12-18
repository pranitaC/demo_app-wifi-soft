var express = require('express');
var router = express.Router();
var Employee = require("../models/employee");

/* GET employees listing. */
router.get('/', function(req, res, next) {
    	Employee.find({}, function(err,employees){
    	if(err){
      		res.send(err.message);
	}else{
		res.render("employees/index",{
		employees: employees
	});
	}

	});
	
});

router.get('/new', function(req, res, next) {
  res.render("employees/new");
});

router.post('/', function(req, res, next) {
  var employee = new Employee(req.body.employee);
  employee.save(function(err){
    if(err){
      res.render("employees/new");
    }else{
      res.render("employees/show",{
        employee: employee
      });
    }
  });
});



module.exports = router;
