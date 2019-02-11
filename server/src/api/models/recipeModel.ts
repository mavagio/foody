import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
import {IIngridient, IRecipe} from '../../../../shared/models/recipeModel';
export {IRecipe, IIngridient};

// interface IIngridient {
//    name: string;
//    amount: string;
//    state: string;
//    required: boolean;
// }

// export interface IRecipe {
//     title: string;
//     approval: number
//     amountOfPeople: number;
//     priceOnAverage: number,
//     nutritionCategory: string;
//     allergenics?: [string];
//     preparationSteps: [string];
//     ingridients: [IIngridient];
//     preparationTimeInMinuts: number,
//     videoURL: string;
//     imageURL: string;
// }

const IngridientSchema: Schema = new Schema({
    name: String,
    amount: String,
    state: String,
    required: Boolean,
});

const RecipeSchema: Schema = new Schema({
    title: String,
    approval: Number,
    amountOfPeople: Number,
    priceOnAverage: Number,
    nutritionCategory: String,
    allergenics: [String],
    preparationSteps: [String],
    ingridients: [IngridientSchema],
    preparationTimeInMinuts: Number,
    videoURL: String,
    imageURL: String,
});

export interface IRecipeModel extends IRecipe, Document {};

export const RecipeModel = mongoose.model<any>('Recipe', RecipeSchema);
