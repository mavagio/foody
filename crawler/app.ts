import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';
import {IRecipe} from '../shared/models/recipeModel';

export class Crawler {
  constructor(){
  }

  async getRecipes() {
    const tatsy_url = 'https://tasty.co/recipe/one-pan-fall-chicken-dinner';
    var options = {
        uri: tatsy_url,
    };
    const result = await request.get(options);
    console.log("things go here");

    let dom = new JSDOM(result);
    let the_json = dom.window.document.querySelectorAll("script[type='application/ld+json']")[0];
    console.log(JSON.parse(the_json.innerHTML));
  }

  transformRecipe(rawRecipe: any): IRecipe {
    const newRecipe: IRecipe = {
      title: rawRecipe.name,
      approval: rawRecipe.aggregateRating.ratingValue,
      amountOfPeople: rawRecipe.recipeYield
    }
    return newRecipe;
  }

  getNumberFromString(dataWithNumber: string): number {
    let result =  +(dataWithNumber.match(/\d+/)[0]);
  }
}

const smth = new Crawler();
smth.getRecipes();