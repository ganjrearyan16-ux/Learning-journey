const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('public'));


// Define a route for the root URL
// app.get or app.post or app.put or app.delete(path, handler)
app.get("/home", (req, res) => {
  res.send("Hello World homeeee!");
});
app.get("/More", (req, res) => {
  res.send("Hello World!moreeee");
});
app.get("/contact", (req, res) => {
  res.send("Hello Worlds contatc here!");
});
app.get("/About", (req, res) => {
  res.send("Hello zup About!");
});
app.get("/blog/:slug", (req, res) => {
    // logic to fetch {slug} from the db
    // for url this http://localhost:3000/blog/Aryan
    console.log(req.params)//will output {slug : "hello aryan"}
    console.log(req.query)//will output {query 'mode=dark',}
  res.send(`Hello ${req.params.slug}`);
});

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//   res.send('Hello JavaScript!');
// });
// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to python from the db
//   res.send('Hello python!');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
