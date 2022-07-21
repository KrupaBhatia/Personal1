const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
{
name : {
    type :"String", 
    required : true},
phone : {
    type: "String", 
    required : true,
    unique: true},
emailId : {
    type: "String",
    required : true,
    unique: true},
password : { 
    type: "String", 
    required: true}
},
{timestamps: true},
);

module.exports = mongoose.model("signUp", userSchema )