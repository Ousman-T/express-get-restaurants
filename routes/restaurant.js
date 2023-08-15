const express = require('express');
const restaurantRouter = express.Router();
const {Restaurant} = require('../models/index');
const {check, validationResult} = require('express-validator');

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

restaurantRouter.post('/', [check('name').not().isEmpty().trim(), check('location').not().isEmpty().trim(), check('cuisine').not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    }else{
        const newRes = await Restaurant.create({name:req.body.name, location: req.body.location, cuisine: req.body.cuisine});
        res.json(newRes);
    }
    
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