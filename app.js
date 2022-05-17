const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/HMS", {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("database connected successfully");
    }
});




// importing hospital route
const hospital = require("./routes/hospital");



app.set("view engine", "ejs"); 

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({extended: true}));

// using hospital routes
app.use(hospital);

// app.get("/", function(req, res){
//     res.render("index");
// })

// app.get("/services", function(req, res){
//     res.render("services");
// })

// app.get("/contact", function(req, res){
//     res.render("contact_us");
// })

// app.get("/about", function(req, res){
//     res.render("about");
// })



app.listen(1010, function(){
    console.log("happy hacking!!!");
})