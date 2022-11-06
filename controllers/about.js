// Dependencies
const express = require("express");
const router = express.Router();
const About = require("../models/about")

// I N D U C E S

// Index
router.get("/", (req, res) => {
  About.find({}, (err, foundAbout) => {
    if (err) console.log(err);
    res.render("about/index.ejs", {
      about: foundAbout,
    });
  });
});



module.exports = router;