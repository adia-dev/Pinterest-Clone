const router = require("express").Router();

const Pin = require("../models/pin");
const Board = require("../models/board");

router.route("/").get((req, res) => {
  Pin.find()
    .then((pins) => res.json(pins))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Pin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pin deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Pin.findById(req.params.id)
    .then((pin) => res.json(pin))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const newPin = new Pin();

  newPin.id = req.body.id;
  newPin.title = req.body.title;
  newPin.description = req.body.description;
  newPin.url = req.body.url;
  newPin.links = [];
  newPin.tags = [];
  newPin._author = req.body._author;

  newPin
    .save()
    .then(() => {
      Board.findById(req.body.board)
        .then((board) => {
          if (board.pins.length == 0) {
            board.thumbnail = newPin.url;
          }
          board.pins.push(newPin._id.toString());

          board
            .save()
            .then(() => res.json({ newPin, board }))
            .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
