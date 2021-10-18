const router = require("express").Router();

const Board = require("../models/board");

router.route("/").get((req, res) => {
  Board.find()
    .then((boards) => res.json(boards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Board.find(req.params.id)
    .then((board) => res.json(board))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Board.findByIdAndDelete(req.params.id)
    .then(() => res.json("Board deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const newBoard = new Board();

  newBoard.title = req.body.title;
  newBoard.description = req.body.description;
  newBoard.pinCnt = req.body.pinCnt;
  newBoard.innerLibraries = [...Array(10)].map(() => "ee");
  newBoard.pins = [...Array(10)].map(() => "ee");
  newBoard.status = req.body.status;
  newBoard.thumbnail = req.body.thumbnail;
  newBoard._author = req.body._author;

  newBoard
    .save()
    .then(() => res.json("Board added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
