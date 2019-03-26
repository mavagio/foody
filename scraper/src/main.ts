import { LoadAgent } from './fetch-layer/load-agent';
import { FetchAgent } from './fetch-layer/fetch-agent';
import { TransformAgent } from './transform-layer/transform-agent';
import { SaveAgent } from './save-layer/save-agent';
import {Helper} from './helper';

export class Main {
  public static async start() {

    // const ans = await Helper.askQuestion("Press enter to continue, press [no] to exit: ");
    // if(ans === ''){
    //   console.log('continue');
    // }
    // return 0;
    const sourceUrls = await LoadAgent.loadSourceUrls();
    const rawRecipe = await FetchAgent.getRawRecipe(sourceUrls[0]);

    const getJsonRecipe = await FetchAgent.getRecipeObject(rawRecipe);
    const htmlIngredients = await FetchAgent.getIngredientsFromHtml(rawRecipe);

    const targetRecipe = await TransformAgent.transformRecipe(getJsonRecipe, htmlIngredients, sourceUrls[0]); 

    console.log(targetRecipe.allergenics);

    SaveAgent.saveTargetToFile(targetRecipe);

    // const ans = await Helper.askQuestion("Press enter to continue, press [no] to exit: ");
    // if(ans === '')
    await SaveAgent.saveToDbFromFile();
  }
}

Main.start();