import { recipes } from '../../shared/assets/recipes';
import { IRecipe, IIngredient } from '../../shared/models/recipeModel';

export class Helper {
  static extractIngredientNamesToMap(): Map<string, any> {
    let ingredientNames: Map<string, any> = new Map<string, any>();
    for(let recipe of recipes) {
      for(let ingredient of recipe.ingredients) {
        const nameLowercase = ingredient.name.toLowerCase()
        ingredientNames.set(nameLowercase, true);
      }
    }
    return ingredientNames;
  }

  public static terminateProgram() {
    process.exit(-1);
  }

  public static pipe = (...fns: any) => (x: any) => fns.reduce((v: any, f: any) => f(v), x);
}