import { NutritionCategory } from './recipeModel';

export interface IUserSettings {
  numberOfPeople: number;
  budgetPerDay: number;
  allergenics: string[];
  nutritionCategory: NutritionCategory,
}