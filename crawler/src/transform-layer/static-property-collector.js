"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
class StaticPropertyCollector {
    static collectStaticProperties(recipeObject) {
        return {
            title: this.getSourceRecipeTitle(recipeObject),
            approval: this.getSourceRecipeRatingValue(recipeObject),
            amountOfPeople: this.getSourceRecipeYield(recipeObject),
            videoURL: this.getSourceRecipeVideoUrl(recipeObject),
            imageURL: this.getSourceRecipeThumbnail(recipeObject),
        };
    }
    static getSourceRecipeTitle(recipeObject) {
        return recipeObject.name;
    }
    static getSourceRecipeRatingValue(recipeObject) {
        return +recipeObject.aggregateRating.ratingValue;
    }
    static getSourceRecipeYield(recipeObject) {
        return this.getNumberFromString(recipeObject.recipeYield);
    }
    static getSourceRecipeVideoUrl(recipeObject) {
        return recipeObject.video[0].contentUrl;
    }
    static getSourceRecipeThumbnail(recipeObject) {
        return recipeObject.video[0].thumbnailUrl;
        ;
    }
    static getNumberFromString(dataWithNumber) {
        let numberFromString = dataWithNumber.match(/\d+/);
        if (numberFromString !== null && numberFromString[0]) {
            return +(numberFromString[0]);
        }
        console.error("The string did not contain number: ", dataWithNumber);
        helper_1.Helper.terminateProgram();
        return -1;
    }
}
exports.StaticPropertyCollector = StaticPropertyCollector;
