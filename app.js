// Dependencies
const express = require("express");

const app = express();

// Middleware
app.use(express.json())

// Controllers
const workoutsController = require("./controllers/workoutsController")

app.use("/workouts", workoutsController)

// Health Check Route
app.get("/", (req, res) => {
    res.send("Welcome to my fitness app!")
})

// Export App
module.exports = app;
