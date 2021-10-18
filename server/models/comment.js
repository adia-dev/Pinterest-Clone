const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
    date: Date,
    _author: Number,
    _pin: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
