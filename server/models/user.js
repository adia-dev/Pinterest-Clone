const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: 3,
      trim: true,
      required: true,
      unique: true,
    },
    email: { type: String, unique: true },
    age: Number,
    password_hash: String,
    profile_picture: String,
    link: String,
    status: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
