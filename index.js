
//create express server
const express = require('express');

//requiring mongoose
const mongoose = require('mongoose');

//allows us to use all the variables in .env
require('dotenv').config();

const {PORT} = process.env; //bringing out the PORT variable into an object

const {CONNECTIONSTRING} = process.env;//bringing out the CONNECTIONURI variable

//initializing port
const port = process.env.PORT || 8000;

//connection string
const connectionString = process.env.CONNECTIONSTRING || CONNECTIONSTRING;

// imports model and schema from models folder
const Record = require('./models/records');

//connect to DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
.then((result)=> {
    console.log("record db connected")
    //listen to connection only after database connected successfully
    app.listen(port, () => console.log(`app running on port ${port}`));
})
.catch((err)=> {
    console.log(err);
    //exit with failure
    process.exit(1);
})

//initialize express
const app = express();

//middlewares
app.use(express.json());


//all routes below
//get request to "/"
app.get('/', (req, res) => res.json({message: `Welcome to the people database\n App successfully running on ${port} and connected to database`}));

//get request to view all records
app.get('/records',(req, res)=>{
    Record.find({}, (err, records) => {
        if (err){
            return res.status(500).json({message: err })
        }else if (records.length === 0){
            return res.status(404).json({message: "No records in the database" })
        }else{
            return res.status(200).json({message: records})
        }
    })
})

//post request to /records to create a new record
app.post('/records', (req, res) => {
    // fetch record details from request body and save to newRecord
    const newRecord = new Record(req.body); 
    newRecord.save((err, newRecordAdded ) => {
        if (err){
            return res.status(500).json({message: err })
        }else {
            return res.status(200).json({message: "new record created", newRecordAdded})
        }
    })
})

//get request to retrieve a single record
app.get('/records/:id', (req, res) => {
    const id = req.params.id
    Record.findById(id, (err, record) => {
        if (err){
            return res.status(500).json({message: err })
        }else if (!record){
            return res.status(404).json({message: "record not found"})
        }else {
            return res.status(200).json({message: "message retrieved successfully", record})
        }
    })
})

//update a single record
app.put('/records/:id',(req, res)=>{
    Record.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRecord) => {
                if (err){
                    return res.status(500).json({message: err })
                }else if (!updatedRecord){
                    return res.status(404).json({message: "record not found"})
                }else {
                    return res.status(200).json({message: "Record updated successfully", updatedRecord})
                }
            })
    })



//delete a single record
app.delete('/records/:id',(req, res)=>{
    Record.findByIdAndDelete(req.params.id, (err, record) => {
        if (err){
            return res.status(500).json({message: err })
        }else if (!record){
            return res.status(404).json({message: "record not found"})
        }else {
                return res.status(200).json({message: "record deleted successfully"})
            }
    })
})