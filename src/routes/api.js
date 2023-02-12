const express = require("express");
const router = express.Router();

// Controllers
const {
  createStudent,
  readStudents,
  updateStudent,
  deleteStudent,
  readStudentById,
} = require("../controllers/studentsController");

router.post("/createStudent", createStudent);
router.get("/readStudents", readStudents);
router.get("/readStudentById/:id", readStudentById);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudent/:id", deleteStudent);

module.exports = router;
