// Dependencies
const express = require("express");
const cors = require("cors")

// Configuration
const app = express();

// Middleware
app.use(express.json())
app.use(cors())

// Controllers
const workoutsController = require("./controllers/workoutsController")

app.use("/workouts", workoutsController)

// Health Check Route
app.get("/", (req, res) => {
    res.send("Welcome to my fitness app!")
})

// Export App
module.exports = app;
