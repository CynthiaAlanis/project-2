// Dependencies
const mongoose = require("./connection");

// Destructure schema and model from mongoose
const { Schema, model } = mongoose;

const detoxSchema = mongoose.Schema({
    name: String,
  },
  { timestamps: true }
);

const Detox = mongoose.model("Detox", detoxSchema)

module.exports = Detox;