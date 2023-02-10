const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const path = require("path");
require("dotenv").config();

// Security Middlewares
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const morgan = require("morgan");

// Database
const mongoose = require("mongoose");

// Security Middlewares Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(morgan("dev"));
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });

// DB Connetion
const URI =
  "mongodb+srv://<username>:<password>@cluster0.qkmfuva.mongodb.net/?retryWrites=true&w=majority";
const OPTION = { user: "MINHAJ", pass: "88336MMK", autoIndex: true };
mongoose.connect(URI, OPTION, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("DB Connected Successfully");
  }
});

// Routing Implement
app.use("/api/v1", router);

// Add REact Front End Routing
app.use(express.static("client/build"));
app.get("*", function (req, res) {
  req.sendFile(path.resolve(--__dirname, "client", "build", "index.html"));
});

module.exports = app;
