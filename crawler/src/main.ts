import { LoadAgent } from './fetch-layer/load-agent';
import { FetchAgent } from './fetch-layer/fetch-agent';
import { TransformAgent } from './transform-layer/transform-agent';
import { SaveAgent } from './save-layer/save-agent';

export class Main {
  public static async start() {
    const sourceUrls = await LoadAgent.loadSourceUrls();
    const rawRecipe = await FetchAgent.getRawRecipe(sourceUrls[0]);

    const getJsonRecipe = await FetchAgent.getRecipeObject(rawRecipe);
    const htmlIngredients = await FetchAgent.getIngredientsFromHtml(rawRecipe);

    const targetRecipe = await TransformAgent.transformRecipe(getJsonRecipe, htmlIngredients); 

    console.log(targetRecipe.nutritionCategory);

    SaveAgent.saveObjectToFile(targetRecipe, './src/assets/crawler_recipe.json');
  }
}

Main.start();