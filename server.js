//___________Dependencies___________
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const middleware = require("./utils/middleware")
const PORT = process.env.PORT || 3000;
middleware(app)

// ___________Listener____________
app.listen(PORT, () =>
  console.log(`You are listening to port ${PORT}...`)
);