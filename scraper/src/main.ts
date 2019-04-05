import { LoadAgent } from './fetch-layer/load-agent';
import { FetchAgent } from './fetch-layer/fetch-agent';
import { TransformAgent } from './transform-layer/transform-agent';
import { SaveAgent } from './save-layer/save-agent';
import {Helper} from './helper';

export class Main {
  public static async start() {
    const sourceUrls = await LoadAgent.loadSourceUrls();
    for(let sourceUrl of sourceUrls){
      //Prep work
      const rawRecipe = await FetchAgent.getRawRecipe(sourceUrl);
      const getJsonRecipe = await FetchAgent.getRecipeObject(rawRecipe);
      const htmlIngredients = await FetchAgent.getIngredientsFromHtml(rawRecipe);
  
      //Transform
      const targetRecipe = await TransformAgent.transformRecipe(getJsonRecipe, htmlIngredients, sourceUrl); 
  
      //Save for manual check
      SaveAgent.saveTargetToFile(targetRecipe);

      //Validation step
      const ans = await Helper.askQuestion("Press enter to save the recipe at url: " + sourceUrl + ", press [no] to exit: ");
      if(ans === ''){
        await SaveAgent.saveTargetAndSync();
      } else {
        return 0;
      }
    }
  }
}

Main.start();