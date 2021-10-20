const router = require("express").Router();
const mongoose = require("mongoose");

const Board = require("../models/board");
const Pin = require("../models/pin");

router.route("/").get((req, res) => {
  Board.find()
    .then((boards) => res.json(boards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Board.findById(req.params.id)
    .then((board) => res.json(board))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/search/:query").get((req, res) => {
  const query = req.params.query;
  Board.findOne({ title: query })
    .then((board) => res.json(board))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Board.findByIdAndDelete(req.params.id)
    .then(() => res.json("Board deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/pins/:id").get((req, res) => {
  Board.findById(req.params.id)
    .then((board) => {
      Pin.find({
        _id: {
          $in: board.pins.map((id) => mongoose.Types.ObjectId(id)),
        },
      })
        .then((pins) => res.json({ board, pins }))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const newBoard = new Board();

  console.log(req.body);

  newBoard.title = req.body.title;
  newBoard.description = req.body.description;
  newBoard.innerBoards = [];
  newBoard.pins = [];
  newBoard.secret = req.body.secret;
  newBoard.thumbnail = req.body.thumbnail;
  newBoard._author = req.body._author;

  newBoard
    .save()
    .then(() => res.json(newBoard))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
