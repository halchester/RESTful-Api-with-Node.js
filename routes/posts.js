const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const bodyParser = require("body-parser");

// gets back all the posts
router.get("/", (req, res) => {
  const posts = Post.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// gets a specific post
router.get("/:postId", (req, res) => {
  const post = Post.findById(req.params.postId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// submits a post
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

// delete a specific post
router.delete("/:postId", (req, res) => {
  Post.remove({
    _id: req.params.postId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//update post
router.patch("/:postId", (req, res) => {
  Post.updateOne(
    {
      _id: req.params.postId,
    },
    {
      $set: {
        title: req.body.title,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
