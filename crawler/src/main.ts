import { LoadAgent } from './fetch-layer/load-agent';
import { FetchAgent } from './fetch-layer/fetch-agent';
import { TransformAgent } from './transform-layer/transform-agent';

export class Main {
  public static async start() {
    //const sourceUrls = await LoadAgent.loadSourceUrls();
    //const rawRecipe = await FetchAgent.getRawRecipe(sourceUrls[0]);
    // const getJsonRecipe = await FetchAgent.getRecipeObject(rawRecipe);
    // TransformAgent.transformRecipe(getJsonRecipe);

    const measurementName = await LoadAgent.loadSingularMeasurements();

    let myString = 'cup<li class="xs-mb1 xs-mt0"> <section class="measurement 0 pinch us-measurement xs-inline-block"> 4 tablespoons</section>sesame oil, plus 2 tablespoons, 4 ewwewe divided</li>3 bunch, sdsdsad,sds ripe, sdsd 4, clove';
    const expression = '\\d+\\s*' + '(' + measurementName.join("|") + ')';
    // const expression2 = '\d+\s*/ + '|' + measurementName.join("|") + '|' +/\/';
    console.log(expression);
    var finalRegex = new RegExp(expression, 'gi');
    let matches = myString.match(finalRegex) || [];
    for(var i = 0; i < matches.length; i++)
      console.log("Found:", matches[i]);    
  }

  async playgroudIngerdients(rawRecipe: any) {
    const htmlIngredients = await FetchAgent.getIngredientsFromHtml(rawRecipe);
    console.log(htmlIngredients[3].innerHTML);
    for(let ingredient of htmlIngredients) {
      const measurment = ingredient.querySelector('.non-us-measurement');
      if(measurment){
        console.log('measurement, ', measurment.innerHTML.trim());
      }
    }
  }

}

Main.start();