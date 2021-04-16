
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_steps').insert([
        { step_id: 1, ingredient_id: 1, quantity: "1kg" },
        { step_id: 2, ingredient_id: 2, quantity: "1kg" },
        { step_id: 3, ingredient_id: 3, quantity: "1kg" },
        { step_id: 4, ingredient_id: 4, quantity: "1kg" },
        { step_id: 5, ingredient_id: 5, quantity: "1kg" },
        { step_id: 5, ingredient_id: 6, quantity: "14kg" },
        { step_id: 5, ingredient_id: 7, quantity: "143kg" },
        { step_id: 5, ingredient_id: 8, quantity: "51kg" },
        { step_id: 5, ingredient_id: 9, quantity: "1543kg" },
        { step_id: 6, ingredient_id: 10, quantity: "143kg" },
        { step_id: 7, ingredient_id: 11, quantity: "1123kg" },
        { step_id: 8, ingredient_id: 12, quantity: "1123kg" },
        { step_id: 9, ingredient_id: 13, quantity: "14kg" },
        { step_id: 10, ingredient_id: 14, quantity: "231kg" },
        { step_id: 11, ingredient_id: 15, quantity: "111kg" },
        { step_id: 13, ingredient_id: 11, quantity: "14kg" },
        { step_id: 13, ingredient_id: 12, quantity: "11kg" },
        { step_id: 14, ingredient_id: 13, quantity: "14kg" },
        { step_id: 15, ingredient_id: 14, quantity: "13kg" },
        { step_id: 1, ingredient_id: 15, quantity: "11kg" },
        { step_id: 3, ingredient_id: 6, quantity: "13kg" },
        { step_id: 3, ingredient_id: 7, quantity: "12kg" },
        { step_id: 2, ingredient_id: 7, quantity: "11kg" },
        { step_id: 7, ingredient_id: 7, quantity: "10kg" },
        { step_id: 9, ingredient_id: 4, quantity: "9kg" },
        { step_id: 6, ingredient_id: 6, quantity: "6kg" },
        { step_id: 11, ingredient_id: 8, quantity: "14kg" },
        { step_id: 10, ingredient_id: 9, quantity: "13kg" },
        { step_id: 13, ingredient_id: 10, quantity: "12kg" },
        { step_id: 16, ingredient_id: 15, quantity: "10kg" },
        { step_id: 15, ingredient_id: 14, quantity: "9kg" },
        { step_id: 17, ingredient_id: 13, quantity: "8kg" },
        { step_id: 18, ingredient_id: 12, quantity: "4kg" },
        { step_id: 5, ingredient_id: 11, quantity: "5kg" },
        { step_id: 16, ingredient_id: 10, quantity: "3kg" },
        { step_id: 17, ingredient_id: 9, quantity: "2kg" },
        { step_id: 18, ingredient_id: 7, quantity: "10kg" },
      ]);
    });
};
