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

// Delete Route
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const workoutToDeleteIndex = workoutArray.findIndex((workout) => workout.id === +id)
    if(workoutToDeleteIndex !== -1) {
        workoutArray.splice(workoutToDeleteIndex, 1)
        res.redirect("/workouts")
    } else {
        res.status(404).send({error: `Workout with id: ${id} not found!`})
    }
})

// Update Route
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const workoutToUpdateIndex = workoutArray.findIndex((workout) => workout.id === +id)
    if (workoutToUpdateIndex !== -1) {
        workoutArray[workoutToUpdateIndex] = req.body
        res.status(200).json(workoutArray[workoutToUpdateIndex])
    } else {
        res.status(404).send({error: `Workout with id: ${id} not found!`})
    }
})

module.exports = router;