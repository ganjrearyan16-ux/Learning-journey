console.log("server started");
const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog");
const fs = require("fs");

// app.use(express.static("public"));
app.use("/blog", blog);
// Middleware 1 - Logger for our application
app.use((req, res, next) => {
  console.log(req.headers);
  req.aryan = "I am Aryan";
  fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by middleware 1")
  next();
});

//Middleware 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello World!" + req.aryan);
});
app.get("/about", (req, res) => {
  res.send("Hello About");
});
app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
