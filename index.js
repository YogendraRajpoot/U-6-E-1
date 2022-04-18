const express = require("express");
const app = express();
const http = require("http");
const PORT = 9001;

app.use((req, res, next) => {
  console.log("This is loggermiddlewares made globally");
  const time = new Date();
  console.log("url",req.url);
  console.log("path",req.path);
  console.log("Log at this time :-", time);
  next();
});

const checkPermission = (role) => {
  return function (req, res) {
    if (role == "librarian") {
      res.send({ route: "/libraries", permission: true });
    } else if (role == "author") {
      res.send({ route: "/authors", permission: true });
    }else{
        res.send(`Error at ${req.url},Please check URL `);
    }
  };
};
app.get("/", (req, res) => {
    res.send("Welcome to Home page my book api");
  });
app.get("/books", (req, res) => {
  res.send({ route: "/books" });
});
app.get("/libraries", checkPermission("librarian"));
app.get("/authors", checkPermission("author"));
app.get("/*", checkPermission(""));

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
