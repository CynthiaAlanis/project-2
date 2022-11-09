// Dependencies
const mongoose = require("./connection");

// Destructure schema and model from mongoose
const { Schema, model } = mongoose;

// Define author schema
const aboutSchema = mongoose.Schema({
    name: String,
  },
  { timestamps: true }
);


const About = mongoose.model("About", aboutSchema)


// Export model
module.exports = About;
