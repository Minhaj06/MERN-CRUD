const studentsModel = require("../models/studentsModel");

// Create Student
exports.createStudent = (req, res) => {
  let reqBody = req.body;
  studentsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// Read Students
exports.readStudents = (req, res) => {
  let Query = {};
  let Projection = "firstName lastName email mobile department semester shift";

  studentsModel.find(Query, Projection, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data });
    }
  });
};

// Update Students
exports.updateStudent = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;

  studentsModel.updateOne(Query, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data });
    }
  });
};

// Delete Students
exports.deleteStudent = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };

  studentsModel.remove(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data });
    }
  });
};
