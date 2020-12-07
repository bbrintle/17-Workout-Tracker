const Workout = require("../models/workout.js");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.put("/api/workouts/:id", ({ body, url }, res) => {
        Workout.findByIdAndUpdate(
            url.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        });
    });
}