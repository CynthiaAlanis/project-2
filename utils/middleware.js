// Dependencies
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const homeRouter = require("../controllers/home");
const aboutRouter = require("../controllers/about");
const detoxRouter = require("../controllers/detox");
const residentialRouter = require("../controllers/residential");
const storiesRouter = require("../controllers/stories");

// Tell express to use all middleware here
const middleware = (app) => {
  app.use(methodOverride("_method"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public")); 
  app.use("/", homeRouter); 
  app.use("/about", aboutRouter); 
  app.use("/detox", detoxRouter); 
  app.use("/residential", residentialRouter); 
  app.use("/stories", storiesRouter); 
};

// Export middleware function to be called from server
module.exports = middleware;