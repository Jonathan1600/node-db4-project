

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'recipe1' },
        { recipe_name: 'recipe2' },
        { recipe_name: 'recipe3' },
        { recipe_name: 'recipe4' },
        { recipe_name: 'recipe5' },
        { recipe_name: 'recipe6' }
      ]);
    });
};