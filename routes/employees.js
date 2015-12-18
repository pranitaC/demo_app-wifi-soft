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
	console.log(req.body.employee);
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

router.get('/edit', function(req, res, next) {
  res.render("employees/edit");
});

router.put("/:id", function(req, res, next) {
  Employee.findById(req.params["id"], function(err, employee) {
    if(err) {
      res.redirect("/employees");
    } else {
      Employee.update({ _id: req.params["id"]}, req.body.employee, {multi: true}, function(err, raw){
        if(err){
          res.render("employees/edit",{ employee: employee });
        }else{
          res.redirect("/employees/"+employee._id);
        }
      });
    }
  })
});

router.delete('/:id', function(req, res, next) {
  Employee.findOne({ _id: req.params['id'] }, function(err, employee) {
    
    if(err) {
      res.redirect('/employees');
    } else {
      employee.remove(function(err, employee){
        if (err) {
          res.redirect('/employees');
        } else {
          res.redirect('/employees');
        }
      });
    }
  });
});

module.exports = router;



module.exports = router;
