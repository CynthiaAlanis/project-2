// Dependencies
const mongoose = require("./connection");

// Destructure schema and model from mongoose
const { Schema, model } = mongoose;

const residentialSchema = mongoose.Schema({
    name: String,
  },
  { timestamps: true }
);

const Residential = mongoose.model("Residential", residentialSchema)

module.exports = Residential;