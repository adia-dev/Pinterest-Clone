const router = require("express").Router();

const User = require("../models/user");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/test").get((req, res) => {
  res.json("eeh");
});

router.route("/create").post((req, res) => {
  const newUser = new User();

  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.age = req.body.age;
  newUser.password_hash = req.body.password;
  newUser.status = -1;
  newUser.pins = [];
  newUser.boards = [];

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
