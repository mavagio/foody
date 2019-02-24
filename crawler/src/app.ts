import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';
import {IRecipe, IIngredient} from '../../shared/models/recipeModel';
import { AnyRecord } from 'dns';
import * as moment from 'moment';
import {IngredientExtractor} from './ingredientExtractor';
import * as fs from 'fs';

export class Crawler {
  private ingredientMap: Map<string, boolean>;
  private ingredientArray: string[];
  private saveFileName: string;

  constructor(){
    this.ingredientMap = IngredientExtractor.extractIngredientNamesMap();
    this.ingredientArray = IngredientExtractor.extractIngredientNamesArray();
    this.saveFileName = '../shared/assets/crawler_recipes.json';
  }

  async recipeConstructor() {
    // const recipeUrl = 'https://tasty.co/recipe/one-pan-fall-chicken-dinner';
    const recipeUrl = 'https://tasty.co/recipe/chicken-bibimbap';
    const sourceRecipe = await this.getJsonRecipes(recipeUrl);
    const targetRecipe = this.transformRecipe(sourceRecipe);
    console.log(targetRecipe);
    this.saveRecipeAsJson(targetRecipe, this.saveFileName);
  }

  saveRecipeAsJson(recipeJson: any, fileName: string): void {
    let finalJson = JSON.stringify(recipeJson);
    fs.writeFile(fileName, finalJson, 'utf8', err => {console.error(err)});
  }

  /**
   * Given @param url, get the recipe data in json format
   * */
  async getJsonRecipes(recipeUrl: string) {
    const tatsy_url = recipeUrl;
    var options = { uri: tatsy_url };

    const result = await request.get(options);

    const recipeDataSelector = "script[type='application/ld+json']";
    const recipeData = this.htmlToJsonConverter(result, recipeDataSelector);
    return recipeData;
  }

  /**
   * Convert string html to 
   */
  htmlToJsonConverter( html: string, selectorName: string) {
    let dom = new JSDOM(html);
    const sourceData = dom.window.document.querySelectorAll(selectorName)[0];
    return JSON.parse(sourceData.innerHTML);
  }

  transformRecipe(sourceRecipe: any): IRecipe {
    const targetRecipe: IRecipe = {
      title: sourceRecipe.name,
      approval: +sourceRecipe.aggregateRating.ratingValue,
      amountOfPeople: this.getNumberFromString(sourceRecipe.recipeYield),
      preparationSteps: this.transformPreparationSteps(sourceRecipe.recipeInstructions),
      ingredients: this.transformIngredients(sourceRecipe.recipeIngredient),
      videoURL: sourceRecipe.video[0].contentUrl,
      imageURL: sourceRecipe.video[0].thumbnailUrl,
      youtubeId: null,
      preparationTimeInMinuts: this.transformPreparationDuration(sourceRecipe.prepTime, sourceRecipe.cookTime), 
      priceOnAverage: 0, //Calculated after ingredients
      nutritionCategory: '',//Calculated after ingredients
      allergenics: [], //Calculated after ingredients
    };
  
    //TODO do calcualted properties here
    return targetRecipe;
  }

  transformPreparationDuration(prepTime: string, cookTime: string) {
    return moment.duration(prepTime).as('minutes') + moment.duration(cookTime).as('minutes');
  }

  transformPreparationSteps(sourcePreparationSteps: any): string[] {
    const targetPreparationSteps: string[] = sourcePreparationSteps.map(
      (step: any) => this.generatePreparationStepTarget(step)
    );
    //remove last element, "Enjoy!"]
    targetPreparationSteps.pop();
    return targetPreparationSteps;
  }

  generatePreparationStepTarget(sourceStep: any): string {
    const targetStep = sourceStep.text;
    return targetStep;
  }

  transformIngredients(sourceIngredients: any): IIngredient[] {
    const targetIngredients: IIngredient[] = sourceIngredients.map(
      (ingredient: string) => this.generateIngredientTarget(ingredient)
    );
    return targetIngredients;
  }

  generateIngredientTarget(sourceIngredient: string): IIngredient {
     const targetIngredient = {
      name: this.filterIngredientName(sourceIngredient),
      amount: this.filterIngredientAmount(sourceIngredient),
      state: this.filterIngredientState(sourceIngredient),
      required: this.filterIngredientRequired(sourceIngredient),
    }
    return targetIngredient;
  }

  filterIngredientName(sourceIngredient: string): string {
    for(let name of this.ingredientArray) {
      //console.log(sourceIngredient.toLocaleLowerCase().includes(name), ' sourceIngredient: ', sourceIngredient.toLocaleLowerCase(), ' name: ',name);
      if(sourceIngredient.toLocaleLowerCase().includes(name)){
        return name;
      }
    }
    return sourceIngredient;
  }

  filterIngredientAmount(sourceIngredient: string): string {
    //TODO take anythign that is within breakets, if no breaket then take what is left after name and state
    return '';
  }

  filterIngredientState(sourceIngredient: string): string {
    //TODO select the content after last comma if exits
    return '';
  }

  filterIngredientRequired(sourceIngredient: string): boolean {
    //TODO if option exits between breakets then return true, otherwise return false
    return true;
  }

  getNumberFromString(dataWithNumber: string): number {
    let numberFromString = dataWithNumber.match(/\d+/);
    if(numberFromString !== null && numberFromString[0]){
      return +(numberFromString[0]);
    }
    console.error("The string did not contain number: ", dataWithNumber);
    this.terminateProgram();
    return -1;
  }

  terminateProgram() {
    process.exit(-1);
  }
}

const crawler = new Crawler();
crawler.recipeConstructor();