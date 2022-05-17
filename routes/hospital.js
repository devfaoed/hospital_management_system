const mongoose = require("mongoose");
const express = require("express");
const { Route } = require("express");
const routes = express.Router();

//importing contact database schema
const Contact = require("../model/contact");

//importing blog database schema
const Blog = require("../model/blog");

//importing blog database schema
const Service = require("../model/service");

routes.get("/", function (req, res) {
    res.render("index");
})

routes.get("/home", function (req, res) {
    res.redirect("/");
})

routes.get("/create_services", function (req, res) {
    res.render("create_services");
})

// routes to post Services 
routes.post("/create_services", function (req, res) {
    const service = {
        image: req.body.image,
        disease: req.body.disease,
        cure: req.body.cure,
        details: req.body.details
    };
    Service.create(service, function (err, blog) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("services created succesfully")
            res.redirect("/services");
        }
    })
})

// route to read more about a particular services
routes.get("/services/:id/show", function (req, res) {
    Service.findById(req.params.id, function (err, services) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("more_services");
        }
    })
})


// route to show services
routes.get("/services", function (req, res) {
    Service.find({}, function (err, services) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("services", { services: services });
        }
    })
})


// route to show blog
routes.get("/blog", function (req, res) {
    Blog.find({}, function (err, blog) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("blog", { blog: blog });
        }
    })
})

// routes to write blog
routes.get("/write", function (req, res) {
    res.render("create_blog");
})

// routes to post blog
routes.post("/write", function (req, res) {
    const blog = {
        image: req.body.image,
        title: req.body.title,
        details: req.body.details
    };
    Blog.create(blog, function (err, blog) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("blog created succesfully")
            res.redirect("/blog");
        }
    })
})

// route to show blog
routes.get("/blog", function (req, res) {
    Blog.find({}, function (err, blog) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("blog", { blog: blog });
        }
    })
})

// routees to create about
routes.get("/about", function (req, res) {
    res.render("about");
})

//routes to create contact
routes.get("/contact", function (req, res) {
    res.render("contact");
})

//routes to write contact message
routes.post("/contact", function (req, res) {
    const contact = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        message: req.body.message
    };
    Contact.create(contact, function (err, contact) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("contact message created successfully");
            res.redirect("/contact");
        }
    })
})

// routees to create research
routes.get("/research", function (req, res) {
    console.log(req.query, "query")
    let search = {}
    const {xample} = req.query
    // if (xample) {
        search = {disease: xample}
    // }
    Service.find(search, function (err, search) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("search successful");
            res.render("research", { search: search });
            // console.log(search);
        }
    })
})

module.exports = routes;



