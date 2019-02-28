import * as request from 'request-promise-native';
import {JSDOM} from 'jsdom';
import {IRecipe, IIngredient} from '../../shared/models/recipeModel';
import { AnyRecord } from 'dns';
import * as moment from 'moment';
import {IngredientHelper} from './helper';

export class Crawler {
  private ingredientMap: Map<string, boolean>;
  private saveFileName: string;

  constructor() {
    this.ingredientMap = IngredientHelper.extractIngredientNamesMap();
    this.saveFileName = '../shared/assets/crawler_recipes.json';
  }

  async recipeConstructor() {
    // const recipeUrl = 'https://tasty.co/recipe/one-pan-fall-chicken-dinner';
    const recipeUrl = 'https://tasty.co/recipe/chicken-bibimbap';
    const sourceRecipe = await this.getJsonRecipes(recipeUrl);
    const targetRecipe = this.transformRecipe(sourceRecipe);
    // console.log(targetRecipe);
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
    return targetRecipe;
  }

  transformPreparationDuration(prepTime: string, cookTime: string) {
    return moment.duration(prepTime).as('minutes') + moment.duration(cookTime).as('minutes');
  }

  transformPreparationSteps(sourcePreparationSteps: any): string[] {
    const targetPreparationSteps: string[] = sourcePreparationSteps.map(
      (step: any) => this.generatePreparationStepTarget(step)
    );
    //remove last element, "Enjoy!"
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
    for(let name of Array.from(this.ingredientMap.keys())) {
      //console.log(sourceIngredient.toLocaleLowerCase().includes(name), ' sourceIngredient: ', sourceIngredient.toLocaleLowerCase(), ' name: ',name);
      if(sourceIngredient.toLocaleLowerCase().includes(name)){
        return name;
      }
    }
    return sourceIngredient;
  }

  filterIngredientAmount(sourceIngredient: string): string {
    // TODO take anythign that is within breakets, if no breaket then take what is left after name and state
    // take number followed by keyword combinations [tablespoon, large, teaspoon, tbs, cups, cup ... ]
    // If there is plus difind it into two parts and apply the save before and after plus
    return '';
  }

  filterIngredientState(sourceIngredient: string): string {
    const indexOfLastComma = sourceIngredient.indexOf(',');
    let result ='';
    if(indexOfLastComma !== -1){
      result = sourceIngredient.substring(indexOfLastComma + 1).trim();
    }
    return result;
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