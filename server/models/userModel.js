const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null 
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String 
    },
    role: [{
            type: String
        }],
    token: { 
        type: String 
    },
});

module.exports = mongoose.model("User", userScheme, "user");