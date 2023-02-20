const express = require('express');
const router = express.Router();
const Student = require('../student');

// GET request for retrieving student details by student id


router.get('/:studentId', (req, res) => {

  Student.findOne({ studentId: req.params.studentId })

    .then(student => {
      if (student) {
        res.json(student);
      } 
      
      else {
        res.status(404).json({ message: 'Student not found' });
      }
    })
    .catch(err => res.status(500).json({ message: err.message }));
});



// POST request for storing student details
router.post('/', (req, res) => {
  const student = new Student({
    studentId: req.body.studentId,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address
  });

  student.save()
    .then(result => {
      console.log(result);
      res.status(201).json({ message: 'Student created' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
