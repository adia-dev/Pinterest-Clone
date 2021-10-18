const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
    },
    description: String,
    url: String,
    links: Array,
    tags: Array,
    _author: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("pin", pinSchema);
