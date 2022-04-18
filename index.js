const express = require("express");
const app = express();
const http = require("http");
const PORT = 9001;

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/books", (req, res) => {
  res.send("hello books");
});
app.get("/libraries", (req, res) => {
  res.send("hello libraries");
});
app.get("/authors", (req, res) => {
  res.send("hello authors");
});

http.createServer(app).listen(PORT, () => {
  console.log(`Listenning at port ${PORT}`);
});
