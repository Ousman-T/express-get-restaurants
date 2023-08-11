const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");
app.use(express.json());
app.use(express.urlencoded());

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

app.post('/restaurants', async (req, res) => {
    const newRes = await Restaurant.create({name:'new-food', location: 'NYC', cuisine: 'African'});
    res.json(newRes);
});

app.put('/restaurants/:id', async (req, res) => {
    const currRes = req.params.id;
    const updateRes = await Restaurant.update({name:'super-new-food'},{where:{id:currRes}});
    res.json(updateRes);

});

app.delete('/restaurants/:id', async (req, res) => {
    const pkId = req.params.id;
    const resToDelete = req.params.body;
    const deleteRes = await Restaurant.destroy({where:{id:pkId}});
    res.json(deleteRes);

})





module.exports = app;