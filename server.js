const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Set static folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware
// app.use(
//   (req, res, next) => {
//     console.log("some code");
//     next();
//   },
//   (req, res, next) => {
//     console.log("something else");
//     next();
//   }
// );

// Endpoints
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/route", (req, res) => {
  res.send("Cool Route!");
});

app.post("/update", (req, res) => {
  // res.send({ msg: "Hello" });
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
