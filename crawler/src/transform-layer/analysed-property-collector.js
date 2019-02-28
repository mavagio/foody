"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = __importStar(require("moment"));
const helper_1 = require("../helper");
class AnalysedPropertyCollector {
    static collectAnalysedProperties(sourceRecipeObject) {
        return {
            preparationSteps: this.transformPreparationSteps(sourceRecipeObject),
            ingredients: this.transformIngredients(sourceRecipeObject),
            preparationTimeInMinuts: this.transformPreparationDuration(sourceRecipeObject)
        };
    }
    static transformPreparationSteps(sourceRecipeObject) {
        const sourcePreparationSteps = sourceRecipeObject.recipeInstructions;
        const targetPreparationSteps = sourcePreparationSteps.map((step) => step.text);
        //remove last element, "Enjoy!"
        targetPreparationSteps.pop();
        return targetPreparationSteps;
    }
    static transformIngredients(sourceRecipeObject) {
        const sourceIngredients = sourceRecipeObject.recipeIngredient;
        const targetIngredients = sourceIngredients.map((ingredient) => this.generateIngredientTarget(ingredient));
        return targetIngredients;
    }
    static generateIngredientTarget(sourceIngredient) {
        const targetIngredient = {
            name: this.filterIngredientName(sourceIngredient),
            amount: this.filterIngredientAmount(sourceIngredient),
            state: this.filterIngredientState(sourceIngredient),
            required: this.filterIngredientRequired(sourceIngredient),
        };
        return targetIngredient;
    }
    static filterIngredientName(sourceIngredient) {
        const ingredientMap = helper_1.Helper.extractIngredientNamesToMap();
        for (let name of Array.from(ingredientMap.keys())) {
            //console.log(sourceIngredient.toLocaleLowerCase().includes(name), ' sourceIngredient: ', sourceIngredient.toLocaleLowerCase(), ' name: ',name);
            if (sourceIngredient.toLocaleLowerCase().includes(name)) {
                return name;
            }
        }
        return sourceIngredient;
    }
    static filterIngredientAmount(sourceIngredient) {
        // TODO take anythign that is within breakets, if no breaket then take what is left after name and state
        // take number followed by keyword combinations [tablespoon, large, teaspoon, tbs, cups, cup ... ]
        // If there is plus difind it into two parts and apply the save before and after plus
        return '';
    }
    static filterIngredientState(sourceIngredient) {
        const indexOfLastComma = sourceIngredient.indexOf(',');
        let result = '';
        if (indexOfLastComma !== -1) {
            result = sourceIngredient.substring(indexOfLastComma + 1).trim();
        }
        return result;
    }
    static filterIngredientRequired(sourceIngredient) {
        //TODO if option exits between breakets then return true, otherwise return false
        return true;
    }
    static transformPreparationDuration(sourceRecipeObject) {
        return moment.duration(sourceRecipeObject.prepTime).as('minutes') + moment.duration(sourceRecipeObject.cookTime).as('minutes');
    }
}
exports.AnalysedPropertyCollector = AnalysedPropertyCollector;
