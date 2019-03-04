"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DerivedPropertyCollector {
    static collectDerivedProperties(ingredients, recipeTitle) {
        const collectedDerivedProperties = {
            priceOnAverage: this.derivePriceOnAverage(ingredients),
            nutritionCategory: this.deriveNutritionCategory(ingredients),
            allergenics: this.deriveAllergenics(ingredients),
            youtubeId: this.deriveYoutubeId(recipeTitle),
        };
        return collectedDerivedProperties;
    }
    static deriveNutritionCategory(ingredients) {
        return '';
    }
    static derivePriceOnAverage(ingredients) {
        return 0;
    }
    static deriveAllergenics(ingredients) {
        return [];
    }
    static deriveYoutubeId(recipeTitle) {
        return null; //TODO is possible to use youtube API to search by name and find if availalbe
    }
}
exports.DerivedPropertyCollector = DerivedPropertyCollector;
