const router = require("express").Router();

const Comment = require("../models/comment");

router.route("/").get((req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Comment deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newComment = new Comment();

  const date = new Date();

  newComment.content = req.body.content;
  newComment.date = date.toString();
  newComment._author = req.body._author;
  newComment._pin = req.body._pin;

  newComment
    .save()
    .then(() => res.json("Comment added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
