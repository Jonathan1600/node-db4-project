const express = require('express');
const Recipes = require("./model");

const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getRecipeById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                stack: err.stack,
            })
        })
});

module.exports = router;