import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';

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
}

const smth = new Crawler();
smth.getRecipes();