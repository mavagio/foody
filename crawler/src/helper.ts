import { recipes } from '../../shared/assets/recipes';
import { IRecipe, IIngredient } from '../../shared/models/recipeModel';

export class Helper {
  static extractIngredientNamesToMap(): Map<string, boolean> {
    let ingredientNames: Map<string, boolean> = new Map<string, boolean>();
    for(let recipe of recipes) {
      for(let ingredient of recipe.ingredients) {
        ingredientNames.set(ingredient.name.toLowerCase(), true);
      }
    }
    return ingredientNames;
  }

  public static terminateProgram() {
    process.exit(-1);
  }

  public static pipe = (...fns: any) => (x: any) => fns.reduce((v: any, f: any) => f(v), x);
}

console.log(Helper.extractIngredientNamesToMap());