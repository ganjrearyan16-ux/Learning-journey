const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Define a route for the root URL
app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log("Hey its a post request");
  res.send("Hello World post!");
});
app.put("/", (req, res) => {
  console.log("Hey its a put request");
  res.send("Hello World put!");
});

app.get("/index", (req, res) => {
  console.log("Hey its a Index request");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
