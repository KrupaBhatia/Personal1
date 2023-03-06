const mongoose = require("mongoose")


const formSchema = new mongoose.Schema({
    status:{
    // type : String,
    // default: 'pending'
    type: String,
    default: "pending"
    },
    unique_id: {
        type: String,
        // unique: true,
        // lowercase: true,
        trim: true
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    // date_of_birth: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // expected_date_of_journey: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    nationality:{
        type: String,
        required: true,
        trim: true
    },
    passport_type:{
        type: String,
        default: "Ordinary passport",
        required: true,
        trim: true
    },
    port_of_arrival:{
        type: String,
        // enum: ["Banglore","Delhi","Mumbai"],
        // required: true,
        trim: true
    }
    // profileImage: {
    //     type: String,
    //     required: true
    // },
    
    
}, { timestamps: true })

module.exports = mongoose.model('Form', formSchema)
