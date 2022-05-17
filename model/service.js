const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
    image: String,
    disease: String,
    cure: String,
    details: String,
    date:{
        type: Date,
        default: Date.now
    }
})

const Service = new mongoose.model("Service", serviceSchema);

module.exports =  Service;