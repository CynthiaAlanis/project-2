// Dependencies
const mongoose = require("./connection");

// Destructure schema and model from mongoose
const { Schema, model } = mongoose;

const storiesSchema = mongoose.Schema({
    name: String,
    body: String,
  },
  { timestamps: true }
);

const Stories = model("Stories", storiesSchema)

module.exports = Stories;