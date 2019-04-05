import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request-promise-native';
import {LoadAgent} from '../fetch-layer/load-agent';
import {Helper} from '../helper';

export class SaveAgent {
  public static saveObjectToFile(data: any, fileName: string) {
    const fullPath = path.resolve(__dirname, fileName);
    const finalJson = JSON.stringify(data);
    return fs.writeFileSync(fullPath, finalJson, 'utf8');
  }

  public static async saveTargetAndSync() {
    const newRecipe = LoadAgent.loadScrapedRecipe();
    await this.saveRecipeFromFile(newRecipe);
    return this.updateIngredientsInfoList(newRecipe);
  }

  public static async updateIngredientsInfoList(newRecipe: any) {
    const ingredientNames = Helper.extractIngredientNamesToMap([newRecipe]);
    const ingredientsMap = LoadAgent.loadIngredientInfo();
    for(let ingredientName of ingredientNames) {
      if('undefined' === typeof(ingredientsMap[ingredientName])) {
        ingredientsMap[ingredientName] = this.generateIngredientInfoObject();
      }
    }
    this.saveObjectToFile(ingredientsMap, '../assets/ingredients_info.json');
  }

  private static generateIngredientInfoObject() {
    return {
      "nutrition_category": 1,
      "validation_required": true,
    };
  }

  public static async saveRecipeFromFile(newRecipe: any){
    await this.saveToDb(newRecipe);
    return await this.updateRecipeList(newRecipe);
  }

  public static async saveToDb(newRecipe: any) {
    let  options = {
      method: 'POST',
      uri: 'http://localhost:3000/api/recipe',
      body: newRecipe,
      json: true,
    };
    const result = await request.post(options);
    return result;
  }

  public static async updateRecipeList(recipeObject: any) {
    const recipes = LoadAgent.loadRecipes();
    recipes.push(recipeObject);
    this.saveObjectToFile(recipes, '../../../shared/assets/recipes.json');
  }

  public static saveTargetToFile(targetObject: any) {
    this.saveObjectToFile(targetObject, '../assets/scraper_recipe.json');
  }
}
