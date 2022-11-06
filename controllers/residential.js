// Dependencies
const express = require("express");
const router = express.Router();
const Residential = require("../models/residential")

// I N D U C E S

// Index
router.get("/", (req, res) => {
  Residential.find({}, (err, foundResidential) => {
    if (err) console.log(err);
    res.render("residential/index.ejs", {
      residential: foundResidential,
    });
  });
});

module.exports = router;