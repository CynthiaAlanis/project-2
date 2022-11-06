// Dependencies
const express = require("express");
const router = express.Router();
const Detox = require("../models/detox")

// I N D U C E S

// Index
router.get("/", (req, res) => {
  Detox.find({}, (err, foundDetox) => {
    if (err) console.log(err);
    res.render("detox/index.ejs", {
      detox: foundDetox,
    });
  });
});

// // New
// router.get("/new", (req, res) => {
//   res.render("detox/new.ejs");
// });

// // Delete
// router.delete("/:id", (req, res) => {
//   Detox.findByIdAndRemove(req.params.id, () => {
//     res.redirect("/detox");
//   });
// });

// // Update
// router.put("/:id", (req, res) => {
//   Detox.findByIdAndUpdate(req.params.id, req.body, () => {
//     res.redirect("/detox");
//   });
// });




module.exports = router;