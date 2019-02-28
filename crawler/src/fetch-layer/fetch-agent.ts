import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';

export class FetchAgent {
  public static async getRecipeObject(recipeUrl: string, scriptSectionName: string =  "script[type='application/ld+json']") {
    const recipeRaw = await this.getRawRecipe(recipeUrl);
    const recipeDom = this.convertStringToHtmlDom(recipeRaw)
    const recipeSection = this.getSectionFromHtml(recipeDom, scriptSectionName);
    const recipeSectionObject = JSON.parse(recipeSection.innerHTML);
    return recipeSectionObject;
  }

  public static async getRawRecipe(recipeUrl: string) {
    let options = { uri: recipeUrl };
    const result = await request.get(options);
    return result;
  }

  private static convertStringToHtmlDom( html: string) {
    let dom = new JSDOM(html);
    return dom;
  }

  private static getSectionFromHtml(dom: any, selectorName: string) {
    const sourceData = dom.window.document.querySelectorAll(selectorName)[0];
    return sourceData;
  }

  // getIngredientsFromHtml(html: string) {
  //   let dom = new JSDOM(html);
  //   const ingredientsDom = dom.window.document.querySelectorAll('.ingredients-prep')[0].getElementsByTagName("li");
  //   for(let ingredient of ingredientsDom) {
  //     const measurment: any = ingredient.querySelector('.non-us-measuremessnt');
  //     console.log('measurement, ', measurment);
  //   }
  //   console.log('measurement, ', measurment.innerHTML.trim());
  // }
}