import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request-promise-native';
import {LoadAgent} from '../fetch-layer/load-agent';

export class SaveAgent {

  public static saveObjectToFile(data: any, fileName: string) {
    const fullPath = path.resolve(__dirname, fileName);
    console.log(fileName);
    console.log(fullPath);
    const finalJson = JSON.stringify(data);
    return fs.writeFileSync(fullPath, finalJson, 'utf8');
  }

  public static async saveToDbFromFile() {
    const newRecipe = LoadAgent.loadScrapedRecipe();
    console.log(newRecipe);
    let  options = {
      method: 'POST',
      uri: 'http://localhost:3000/api/recipe',
      body: newRecipe,
      json: true,
    };
    const result = await request.post(options);
    // this.updateIngredientsInfoList();
    this.updateRecipeList(newRecipe);

    return result;
  }

  public static async updateRecipeList(recipeObject: any) {
    const recipes = LoadAgent.loadRecipes();
    recipes.push(recipeObject);
    this.saveObjectToFile(recipeObject, '../../../shared/assets/recipes.json');
  }

  public static saveTargetToFile(targetObject: any) {
    this.saveObjectToFile(targetObject, '../assets/scraper_recipe.json');
  }

  // public static async updateIngredientsInfoList() {
  //   const ingredientsMap = LoadAgent.loadIngredientInfo();
  //   if(ingredientsMap['sfsdfsdf']) {
  //     console.log('not working');
  //   }
  //   if(ingredientsMap['cucumber']) {
  //     console.log('not working');
  //   }
  // }
}
