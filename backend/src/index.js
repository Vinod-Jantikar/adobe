const express = require("express");
const app = express();
const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller")

app.use(express.json());
app.use("/users", userController);
app.use("/posts", postController)

module.exports = app;
