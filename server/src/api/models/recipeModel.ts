import mongoose = require('mongoose');
import {Schema, Document} from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
import {IIngredient, IRecipe} from '../../../../shared/models/recipeModel';
export {IRecipe, IIngredient};

const IngredientSchema: Schema = new Schema({
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
    ingredients: [IngredientSchema],
    preparationTimeInMinuts: Number,
    videoURL: String,
    youtubeId: String,
    imageURL: String,
});

export interface IRecipeModel extends IRecipe, Document {};

export const RecipeModel = mongoose.model<any>('Recipe', RecipeSchema);
