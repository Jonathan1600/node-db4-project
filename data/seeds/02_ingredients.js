
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "ingredient_1" },
        { ingredient_name: "ingredient_2" },
        { ingredient_name: "ingredient_3" },
        { ingredient_name: "ingredient_4" },
        { ingredient_name: "ingredient_5" },
        { ingredient_name: "ingredient_6" },
        { ingredient_name: "ingredient_7" },
        { ingredient_name: "ingredient_8" },
        { ingredient_name: "ingredient_9" },
        { ingredient_name: "ingredient_10" },
        { ingredient_name: "ingredient_11" },
        { ingredient_name: "ingredient_12" },
        { ingredient_name: "ingredient_13" },
        { ingredient_name: "ingredient_14" },
        { ingredient_name: "ingredient_15" },
      ]);
    });
};
