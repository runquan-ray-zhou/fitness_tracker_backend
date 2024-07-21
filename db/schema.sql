DROP DATABASE IF EXISTS fitness_tracker;
CREATE DATABASE fitness_tracker;

\c fitness_tracker;

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    durationInMinutes INT,
    caloriesBurned INT,
    date DATE
);
