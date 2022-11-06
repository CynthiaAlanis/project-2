// Dependencies
const express = require("express");
const router = express.Router();
const Stories = require("../models/stories");

// I N D U C E S

// Index
router.get("/", (req, res) => {
  Stories.find({}, (err, foundStories) => {
    if (err) console.log(err);
    res.render("stories/index.ejs", {
      stories: foundStories,
    });
  });
});

// New
router.get("/new", (req, res) => {
  res.render("stories/new.ejs");
});

// Delete
router.delete("/:id", (req, res) => {
  Stories.findByIdAndRemove(req.params.id, () => {
    res.redirect("/stories");
  });
});

// Update
router.put("/:id", (req, res) => {
  Stories.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/stories");
  });
});

// Create
router.post("/", (req, res) => {
  Stories.create(req.body, (err, createdStories) => {
    if (err) console.log(err);
    res.redirect("/stories");
  });
});

// Edit
router.get("/:id/edit", (req, res) => {
  Stories.findById(req.params.id, (err, foundStories) => {
    if (err) console.log(err);
    res.render("stories/edit.ejs", {
      stories: foundStories,
    });
  });
});

// Show
router.get("/:id", (req, res) => {
  Stories.findById(req.params.id, (err, foundStories) => {
    if (err) console.log(err);
    res.render("stories/show.ejs", {
      stories: foundStories,
    });
  });
});

module.exports = router;