const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      minlength: 3,
      trim: true,
    },
    description: String,
    url: { type: String, required: true },
    links: Array,
    tags: Array,
    _author: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("pin", pinSchema);
