const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
    description: String,
    pins: Array,
    innerBoards: Array,
    secret: Boolean,
    thumbnail: String,
    _author: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("board", boardSchema);
