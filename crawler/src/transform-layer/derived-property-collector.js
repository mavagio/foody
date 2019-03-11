"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const load_agent_1 = require("../fetch-layer/load-agent");
const recipeModel_1 = require("../../../shared/models/recipeModel");
class DerivedPropertyCollector {
    static collectDerivedProperties(ingredients, recipeTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredientsInfo = yield load_agent_1.LoadAgent.loadIngredientInfo();
            const collectedDerivedProperties = {
                priceOnAverage: this.derivePriceOnAverage(ingredients),
                nutritionCategory: this.deriveNutritionCategory(ingredients, ingredientsInfo),
                allergenics: this.deriveAllergenics(ingredients, ingredientsInfo),
                youtubeId: this.deriveYoutubeId(recipeTitle),
            };
            return collectedDerivedProperties;
        });
    }
    static deriveNutritionCategory(ingredients, ingredientsInfo) {
        let defaultReturnValue = recipeModel_1.NutritionCategory.vegan;
        for (let ingredient of ingredients) {
            const ingredientInfo = ingredientsInfo[ingredient.name];
            if (!ingredientInfo) {
                return recipeModel_1.NutritionCategory.na; // Unknown ingredient, return not available
            }
            if (ingredientInfo.nutrition_category === recipeModel_1.NutritionCategory.everything) {
                return recipeModel_1.NutritionCategory.everything; // At least on ingredient is everything than the category is everything
            }
            if (ingredientInfo.nutrition_category === recipeModel_1.NutritionCategory.vegetarian) {
                defaultReturnValue = recipeModel_1.NutritionCategory.vegetarian;
            }
        }
        return defaultReturnValue;
    }
    static derivePriceOnAverage(ingredients) {
        return 0; // Future work
    }
    static deriveAllergenics(ingredients, ingredientsInfo) {
        let resultedAllergenics = [];
        for (let ingredient of ingredients) {
            const ingredientInfo = ingredientsInfo[ingredient.name];
            if (ingredientInfo && ingredientInfo.allergenics) {
                resultedAllergenics = [...ingredientInfo.allergenics, ...resultedAllergenics];
            }
        }
        return resultedAllergenics;
    }
    static deriveYoutubeId(recipeTitle) {
        return null; //TODO is possible to use youtube API to search by name and find if availalbe
    }
}
exports.DerivedPropertyCollector = DerivedPropertyCollector;
