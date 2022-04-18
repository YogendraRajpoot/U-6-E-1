const express = require("express");
const app = express();
const http = require("http");
const PORT = 9001;

const loggerMiddleware = (req, res, next) => {
  console.log("This is loggermiddlewares");
  console.log("Request path");
  next();
};
const checkPermission = (req, res, next) => {
  console.log("This is checkPermission");
  
};
app.get("/", loggerMiddleware, (req, res) => {
  res.send("hello");
});
app.get("/books", loggerMiddleware, (req, res) => {
  res.send("hello books");
});
app.get("/libraries", loggerMiddleware, checkPermission, (req, res) => {
  res.send("hello libraries");
});
app.get("/authors", loggerMiddleware, checkPermission, (req, res) => {
  res.send("hello authors");
});

http.createServer(app).listen(PORT, () => {
  console.log(`Listenning at port ${PORT}`);
});
