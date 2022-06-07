const express = require("express");
const { readJSON } = require("make/src/util");
const app = express();
const PORT = 3000;

// Middleware
app.use(
  (req, res, next) => {
    console.log("some code");
    next();
  },
  (req, res, next) => {
    console.log("something else");
    next();
  }
);

// Endpoints
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/route", (req, res) => {
  res.send("Cool Route!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
