const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    lname :{
        type :"String"
    },
    fname :{
        type :"String"
    },

    // shortform : {
    //     type: String,
    //     unique: true,
    //    trim:true,
    //    UpperCase : true

    // },

    // fullform : {
    //     type: [String],
    //     trim:true,
    //     default: 0

    // }


}, { timestamps: true });
const Post = mongoose.model('short', Schema);
module.exports = Post;