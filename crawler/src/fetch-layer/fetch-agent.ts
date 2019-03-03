import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';

export class FetchAgent {
  public static async getRecipeObject(recipeRaw :any, scriptSectionName: string =  "script[type='application/ld+json']") {
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

  public static getIngredientsFromHtml(html: string) {
    let dom = new JSDOM(html);
    let measurment: any;
    const ingredientsDoms: any = dom.window.document.querySelectorAll('.ingredients__section')[0].getElementsByTagName("li");
    // const allIngredientListingsArray = Object.values(ingredientsDoms).map((ingredientDom:any) => ingredientDom.getElementsByTagName("li"));
    // const allIngredientsArray = allIngredientListingsArray.join();
    // console.log(allIngredientsArray)
    // // const ingredientListing = ingredientsDom.getElementsByTagName("li");
    return Object.values(ingredientsDoms);
  }
}