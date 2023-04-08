const express = require("express");

const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Sorry, could not create user." });
  }
});

router.get("/", async(req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Sorry, data not found." });
  }
})

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "Invalid user id" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Could not update user" });
  }
});

module.exports = router;
