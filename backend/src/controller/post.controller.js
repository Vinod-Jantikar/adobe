const express = require("express");

const router = express.Router();
const Post = require("../models/post.model");

router.post("/", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (error) {
    res.status(500).send({ message: "Sorry, could not create post." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send({ message: "No post found." });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body.content,
      { new: true }
    );
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send({ message: "Could not update post" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedPost);
  } catch (error) {
    res.status(500).send({ message: "Could not delete post" });
  }
});

router.post("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send({ messagge: "Post not found" });
    }

    post.likes++;

    await post.save();

    return res.status(200).send(post);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});



router.post("/:id/unlike", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).send({ messagge: "Post not found" });
      }
  
      post.likes--;
  
      await post.save();
  
      return res.status(200).send(post);
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  });
  


module.exports = router;
