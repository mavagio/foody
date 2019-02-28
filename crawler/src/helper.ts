import { recipes } from '../../shared/assets/recipes';
import { IRecipe, IIngredient } from '../../shared/models/recipeModel';

export class IngredientHelper {
  static extractIngredientNamesMap(): Map<string, boolean> {
    let ingredientNames: Map<string, boolean> = new Map<string, boolean>();
    for(let recipe of recipes) {
      for(let ingredient of recipe.ingredients) {
        ingredientNames.set(ingredient.name.toLowerCase(), true);
      }
    }
    return ingredientNames;
  }

  static extractIngredientNamesArray(): string[] {
    let ingredientNames: string[] = [];
    for(let recipe of recipes) {
      for(let ingredient of recipe.ingredients) {
        ingredientNames.push(ingredient.name.toLowerCase());
      }
    }
    return ingredientNames;
  }
}