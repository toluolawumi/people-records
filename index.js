
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

//initialize middleware
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended: true}));

//create a basic get request
app.get('/', (req, res) => res.json({message: "Welcome to Peoples Records"}));
