const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null,
        required: true,
    },
    lastName: {
        type: String,
        default: null,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contact_no: {
        type: String,
        unique: true,
        required: true,
        maxLength: 10,
        minLength: 10
    },
    branch: {
        type: String,
        required: true,
    },
    batch: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    role: {
        type: Number,
        default: 0,
    },
    profilePicture: {
        type: String,
    },
    event: {
        type: Array,
    },
    uid: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    count: { type: Number }
});

module.exports = mongoose.model("user", userSchema);
