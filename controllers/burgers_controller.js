const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        const dataObject = {
            burgers: data
        };
        console.log(dataObject);
        res.render("index", dataObject);
    });
});