const router = require("express").Router();

const Pin = require("../models/pin");

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

router.route("/add").post((req, res) => {
  const newPin = new Pin();

  newPin.title = req.body.title;
  newPin.description = req.body.description;
  newPin.url = req.body.url;
  newPin.links = [...Array(10).map(() => "eheh")];
  newPin.tags = [...Array(10).map(() => "eheh")];
  newPin._author = req.body._author;

  newPin
    .save()
    .then(() => res.json("Pin added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
