var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports = studentSchema;