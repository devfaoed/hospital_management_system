const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    disease: String,
    details: String,
    cure: String,
})

const About = new mongoose.model("About", serviceSchema);

module.exports =  About;