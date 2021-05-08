const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creates a record schema for the type of data we are working with
const recordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    country: {
        type:String,
        required: true
    }
});

//creates a model called record that listens to the "record" collection in the database
const record = mongoose.model("Record", recordSchema); 

//exports the file to be used in index.js
module.exports = record;