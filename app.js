// Dependencies
const express = require("express");

const app = express();

// Health Check Route
app.get("/", (req, res) => {
    res.send("Welcome to my fitness app!")
})

// Export App
module.exports = app;
