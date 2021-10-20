const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("~MongoDB connection established~");
});

const comment = require("./routes/comments");
const board = require("./routes/board");
const pin = require("./routes/pin");
const user = require("./routes/user");

app.use("/comment", comment);
app.use("/board", board);
app.use("/pin", pin);
app.use("/user", user);

app.listen(port, () => {
  console.log("Server listening on the port : " + port);
});
