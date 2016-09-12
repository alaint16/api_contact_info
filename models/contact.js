var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    name: String,
    lastname: String,
    address: String,
    email: String,
    dob: Date,
    title: String,
    country: String,

});

module.exports = mongoose.model('contact', ContactSchema);