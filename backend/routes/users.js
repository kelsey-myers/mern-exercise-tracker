const router = require('express').Router();
let User = require('../models/user.model'); //requiring the mongoose model

router.route('/').get((req, res) => { //first route for incoming http get requests
    User.find() //mongoose method gets all mongodb users in db
    .then(users => res.json(users)) //return in json format
    .catch(err => res.status(400).json('Error: ' + err)); //return error in json
});

router.route('/add').post((req, res) => { //handles post requests
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() //adds user to database
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;