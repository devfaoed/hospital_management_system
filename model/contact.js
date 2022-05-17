const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    },
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports =  Contact;