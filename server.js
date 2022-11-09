//___________Dependencies___________
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const middleware = require("./utils/middleware")
const PORT = process.env.PORT || 3000;
// Passing app into this function allows us to use it in middleware.js
middleware(app)

// ___________Listener____________
app.listen(PORT, () =>
  console.log(`You are listening to port ${PORT}...`)
);