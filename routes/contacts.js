var express = require('express');
var router = express.Router(); // get an instance of the express Router
var Contact = require('../models/contact');

router.route('/')
.get(function(req, res){
console.log("it's working")
res.json({message: 'the contact is working' })

})
module.exports = router