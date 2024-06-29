// Dependencies
const express = require("express")

const router = express.Router()

const workoutArray  = require("../models/workout")

// Index Route
router.get("/", (req, res) => {
    res.status(200).send(workoutArray)
})

// Show Route
router.get("/:id", (req, res) => {
    const { id } = req.params
    const workout = workoutArray.find(el => el.id === +id)
    if (workout) {
        res.status(200).send(workout)
    } else {
        res.status(404).json({error: `Workout with id: ${id} not found!`})
    }
})

// Create Route
router.post("/", (req, res) => {
    const currentWorkout = {id: workoutArray.length + 1, ...req.body}
    workoutArray.push(currentWorkout)
    res.status(201).send(workoutArray[workoutArray.length - 1])
})

module.exports = router;