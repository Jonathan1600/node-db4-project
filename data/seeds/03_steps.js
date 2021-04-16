

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('steps').del()
        .then(function () {
            // Inserts seed entries
            return knex('steps').insert([
                { recipe_id: 1, step_instructions: "Cook it", step_number: 1 },
                { recipe_id: 1, step_instructions: "Cook it", step_number: 2 },
                { recipe_id: 1, step_instructions: "Cook it", step_number: 3 },
                { recipe_id: 1, step_instructions: "Cook it", step_number: 4 },
                { recipe_id: 2, step_instructions: "Cook it", step_number: 1 },
                { recipe_id: 3, step_instructions: "Cook it", step_number: 1 },
                { recipe_id: 3, step_instructions: "Cook it", step_number: 2 },
                { recipe_id: 3, step_instructions: "Cook it", step_number: 3 },
                { recipe_id: 4, step_instructions: "Cook it", step_number: 1 },
                { recipe_id: 4, step_instructions: "Cook it", step_number: 2 },
                { recipe_id: 4, step_instructions: "Cook it", step_number: 3 },
                { recipe_id: 4, step_instructions: "Cook it", step_number: 4 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 1 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 2 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 3 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 4 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 5 },
                { recipe_id: 5, step_instructions: "Cook it", step_number: 6 },
            ]);
        });
};