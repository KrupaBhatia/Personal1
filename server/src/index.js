const express = require('express');
const bodyParser = require('body-parser');
const  mongoose  = require('mongoose');
const route = require('./Routes/route');
const env = require('dotenv').config()
const cors = require('cors')
const app = express();
// const multer=require('multer')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use( multer().any())


mongoose.set('strictQuery', false);
const monngodb_url = "mongodb+srv://syedfaizanali798:rlnFn4Moke4sjhW4@securedcluster.6achcxf.mongodb.net/e_visa";


mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mongodb not connected", error);
  
});

app.use('/', route);

port = process.env.PORT


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});