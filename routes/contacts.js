var express = require('express');
var router = express.Router(); // get an instance of the express Router
var Contact = require('../models/contact');

router.route('/')

.post(function(req, res) {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.lastname = req.body.lastname;
    contact.address = req.body.address;
    contact.email = req.body.email;
    contact.dob = req.body.dob;
    contact.title = req.body.title;
    contact.country = req.body.country;
    console.log("it's working")
    contact.save(function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'New Contact Created' });
        }
    });
});


router.route('/all')

.get(function(req, res) {
    Contact.find(function(err, contacts) {
        if (err) {
            res.send(err);
        } else {
            res.json({ data: contacts });
        }

    })
});


router.route("/:id")

.get(function(req, res) {
    Contact.find({
        _id: req.params.id
    }, function(err, contacts) {
        if (err) {
            res.send(err);
        } else {
            res.json({ data: contacts });
        }
    });
})

//update user
.put(function(req, res) {
    console.log(req.params.id)
    Contact.findById({
        _id: req.params.id
    }, function(err, bear) {
        if (err) {
            res.json(err);
        } else {
            contact.name = rep.body.name;
            contact.lastname = req.body.lastname;
            contact.address = req.body.address;
            contact.email = req.body.email;
            contact.dob = req.body.dob;
            contact.title = req.body.title;
            contact.country = req.body.country;
            contact.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Contact updated!' })
            })

        }
    })
});

router.route('/delete/:id')
    .delete(function(req, res) {
        console.log(req.params.id)
        Contact.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err) {

                res.send(err);
            } else {
                res.json({ message: 'Successfully deleted' });
            }
        });
    });
module.exports = router
