"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipes_1 = require("../../shared/assets/recipes");
class IngredientHelper {
    static extractIngredientNamesMap() {
        let ingredientNames = new Map();
        for (let recipe of recipes_1.recipes) {
            for (let ingredient of recipe.ingredients) {
                ingredientNames.set(ingredient.name.toLowerCase(), true);
            }
        }
        return ingredientNames;
    }
    static extractIngredientNamesArray() {
        let ingredientNames = [];
        for (let recipe of recipes_1.recipes) {
            for (let ingredient of recipe.ingredients) {
                ingredientNames.push(ingredient.name.toLowerCase());
            }
        }
        return ingredientNames;
    }
}
exports.IngredientHelper = IngredientHelper;
