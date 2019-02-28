import { LoadAgent } from './fetch-layer/load-agent';
import { FetchAgent } from './fetch-layer/fetch-agent';
import { TransformAgent } from './transform-layer/transform-agent';

export class Main {
  public static async start() {
    const sourceUrls = await LoadAgent.loadSourceUrls();
    const getJsonRecipe = await FetchAgent.getRecipeObject(sourceUrls[0]);
    TransformAgent.transformRecipe(getJsonRecipe);
  }
}

Main.start();