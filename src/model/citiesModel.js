const mongoose = require("mongoose")
const citiesSchema = new mongoose.Schema(
    {
        citiesName : {
            type :"String", 
            required : true,
            unique: true},
        subName : {
            type: "String", 
            required : true,
            unique: true},
        theaterName: {
            type: "String", 
            required : true,  
        },
        address: {
            street: {type:String,required:true},
            pincode: {type:Number, required:true}
          },
        phone : {
            type: "String", 
            required : true,
            unique: true},
        emailId : {
            type: "String",
            required : true,
            unique: true}
    },{timestamps: true},
        );
        
        module.exports = mongoose.model("cities", citiesSchema )