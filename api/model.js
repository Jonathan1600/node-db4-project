const db = require("../data/db-config");

const getRecipeById = async (id) => {
    const raw = await db('recipes as r')
        .select(
            'r.recipe_id',
            'r.recipe_name',
            'r.created_at',
            's.step_id',
            's.step_number',
            's.step_instructions',
            'i.ingredient_id',
            'i.ingredient_name',
            'is.quantity'
        )
        .leftJoin("steps as s", 's.recipe_id', "r.recipe_id")
        .leftJoin("ingredients_steps as is", 'is.step_id', "s.step_id")
        .leftJoin("ingredients as i", "i.ingredient_id", "is.ingredient_id")
        .where("r.recipe_id", id)
        .orderBy("s.step_number")

    const cleaned = {
        "recipe_id": raw[0].recipe_id,
        "recipe_name": raw[0].recipe_name,
        "created_at": raw[0].created_at,
        "steps": raw[0].step_id === null ? [] : raw.reduce((acc, cur) => {
            if (cur.ingredient_id === null) {
                return acc.concat({
                    step_id: cur.step_id,
                    step_number: cur.step_number,
                    step_instructions: cur.step_instructions,
                    ingredients: []
                })
            } else if (cur.ingredient_id && !acc.find(step => step.step_id === cur.step_id)) {
                return acc.concat({
                    step_id: cur.step_id,
                    step_number: cur.step_number,
                    step_instructions: cur.step_instructions,
                    ingredients: [{
                        ingredient_id: cur.ingredient_id,
                        ingredient_name: cur.ingredient_name,
                        quantity: cur.quantity
                    }]
                })
            }
            const currentStep = acc.find(step => step.step_id === cur.step_id);
            currentStep.ingredients.push({
                ingredient_id: cur.ingredient_id,
                ingredient_name: cur.ingredient_name,
                quantity: cur.quantity
            })

            return acc
        }, [])
        // [
        //     {
        //         "step_id": 11,
        //         "step_number": 1,
        //         "step_instructions": "Put a large saucepan on a medium heat",
        //         "ingredients": []
        //     },
        //     {
        //         "step_id": 12,
        //         "step_number": 2,
        //         "step_instructions": "Add 1 tbsp olive oil",
        //         "ingredients": [
        //             { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
        //         ]
        //     },
        // ]

    };

    return cleaned
}

module.exports = {
    getRecipeById
}