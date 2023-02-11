const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
      trim: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: [true, "Email already exists"],
      required: [true, "Email address is required"],
    },
    mobile: {
      type: String,
      validate: [validator.isMobilePhone, "Please provide a valid mobile number"],
      required: [true, "Mobile number is required"],
    },
    department: {
      type: String,
      required: [true, "Please select your department"],
    },
    semester: {
      type: String,
      required: [true, "Please select your semester"],
    },
    shift: {
      type: String,
      enum: ["First", "Second"],
      required: [true, "Please select your shift"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const studentsModel = mongoose.model("students", studentSchema);

module.exports = studentsModel;
