var express = require('express');
var router = express.Router(); // get an instance of the express Router
var Contact = require('../models/contact');

router.route('/')
    .get(function(req, res) {
        Contact.find(function(err, contacts) {
            if (err) {
                res.send(err);
            } else {
                res.json({ data: contacts });
            }

        })
    })
    .post(function(req, res) {
        console.log("it's working")
        res.json({ message: 'create a new user' })

    })

router.route("/:id")
    .get(function(req, res) {
        console.log("it's working")
        res.json({ message: 'get the user by id' })

    })
    .put(function(req, res) {
        console.log("it's working")
        res.json({ message: 'update one user' })
    })
    .delete(function(req, res) {
        console.log("it's working")
        res.json({ message: 'delete user' })

    })


module.exports = router
