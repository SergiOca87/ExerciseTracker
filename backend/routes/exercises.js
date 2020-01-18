const router = require('express').Router();

// We require the exercise Schema
let Exercise = require('../models/exercise.model');

// Endpoint that handles this route ( {root}/exercise/ )
router.route('/').get((req, res) => {

    //Find is a moongose method, it lists the USers from the db
    //it returns a promise in JSON with the db "users"
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});


//This endpoint handles POST requests at {root}/exercises/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    //Mongoose save() method, allows us to add data to our db
    //It returns a promise in json format informing us about the result
    newExercise.save()
        .then(() => res.json('Exercise Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;