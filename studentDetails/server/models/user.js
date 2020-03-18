const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    LastName: String,
    email: String ,
    phno: String ,
    gender: String , 
    photo: String  
});

module.exports = mongoose.model('anything', userSchema, 'student');

//Third parameter is very important because you are providing Schema 
//to the Collection defined in the MongoDB