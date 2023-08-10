const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.findAll({});
    res.json(allRestaurants);
});

app.get('/restaurants/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const particularRest = await Restaurant.findByPk(id);
    res.json(particularRest);

});





module.exports = app;