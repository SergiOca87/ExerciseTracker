const router = require('express').Router();

// We require the user Schema
let User = require('../models/user.model');

// Endpoint that handles this route ( {root}/users/ )
router.route('/').get((req, res) => {

    //Find is a moongose method, it lists the USers from the db
    //it returns a promise in JSON with the db "users"
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


//This endpoint handles POST requests at {root}/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    //Mongoose save() method, allows us to add data to our db
    //It returns a promise in json format informing us about the result
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;