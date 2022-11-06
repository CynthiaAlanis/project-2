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
  app.use(methodOverride("_method")); // override for put and delete requests from forms
  app.use(express.urlencoded({ extended: true })); // body parser for express
  app.use(express.static("public")); // serve static css & js files from public
  app.use("/", homeRouter); 
  app.use("/about", aboutRouter); 
  app.use("/detox", detoxRouter); 
  app.use("/residential", residentialRouter); 
  app.use("/stories", storiesRouter); 
};

// Export middleware function to be called from server
module.exports = middleware;