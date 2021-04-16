
exports.up = function (knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments("recipe_id")
            tbl.string("recipe_name", 128).notNullable()
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable("ingredients", tbl => {
            tbl.increments("ingredient_id")
            tbl.string("ingredient_name", 128).notNullable().unique()
        })
        .createTable("steps", tbl => {
            tbl.increments("step_id")
            tbl.integer("step_number").notNullable()
            tbl.string("step_instructions").notNullable()
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipe_id") //FOREIGN KEY CONNECTION!!
                .inTable("recipes")
                .onDelete("RESTRICT") //RESTRICT
        })
        .createTable("ingredients_steps", tbl => {
            tbl.increments("step_ingredient_id")
            tbl.string("quantity").notNullable();
            tbl.integer("step_id")
                .unsigned()
                .notNullable()
                .references("step_id") //FOREIGN KEY CONNECTION!!
                .inTable("steps")
                .onDelete("RESTRICT") //RESTRICT
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("ingredient_id") //FOREIGN KEY CONNECTION!!
                .inTable("ingredients")
                .onDelete("RESTRICT") //RESTRICT
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("ingredients_steps")
        .dropTableIfExists("steps")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};
