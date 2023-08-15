const express = require('express');
const restaurantRouter = express.Router();
const {Restaurant} = require('../models/index');

//TODO: Create your GET Request Route Below: 
restaurantRouter.get('/', async (req, res) => {
    const allRestaurants = await Restaurant.findAll({});
    res.json(allRestaurants);
});

restaurantRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const particularRest = await Restaurant.findByPk(id);
    res.json(particularRest);

});

restaurantRouter.post('/', async (req, res) => {
    const newRes = await Restaurant.create({name:'new-food', location: 'NYC', cuisine: 'African'});
    res.json(newRes);
});

restaurantRouter.put('/:id', async (req, res) => {
    const currRes = req.params.id;
    const updateRes = await Restaurant.update({name:'super-new-food'},{where:{id:currRes}});
    res.json(updateRes);

});

restaurantRouter.delete('/:id', async (req, res) => {
    const pkId = req.params.id;
    const resToDelete = req.params.body;
    const deleteRes = await Restaurant.destroy({where:{id:pkId}});
    res.json(deleteRes);

});

module.exports = restaurantRouter;