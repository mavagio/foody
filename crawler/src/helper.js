"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipes_1 = require("../../shared/assets/recipes");
class Helper {
    static extractIngredientNamesToMap() {
        let ingredientNames = new Map();
        for (let recipe of recipes_1.recipes) {
            for (let ingredient of recipe.ingredients) {
                const nameLowercase = ingredient.name.toLowerCase();
                ingredientNames.set(nameLowercase, true);
            }
        }
        return ingredientNames;
    }
    static terminateProgram() {
        process.exit(-1);
    }
}
Helper.pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
exports.Helper = Helper;
