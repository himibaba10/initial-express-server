const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Hello Home!");
});

app.get("/bcrypt", (req, res) => {
  const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUND, 10);
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash("hello123", salt, function (err, hash) {
      res.send(hash);
    });
  });
});

app.use("*", (req, res) => {
  res.send("Route not found!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
