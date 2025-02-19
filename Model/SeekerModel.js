const mongoose = require('mongoose')


const SeekerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    cnic: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    martial: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Seeker = mongoose.model("Seeker", SeekerSchema);

module.exports = Seeker;
