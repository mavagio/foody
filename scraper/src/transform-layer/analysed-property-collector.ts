import { IIngredient } from '../../../shared/models/recipeModel';
import * as moment from 'moment';
import { Helper } from '../helper';
import { LoadAgent } from '../fetch-layer/load-agent';

export class AnalysedPropertyCollector {
  public static async collectAnalysedProperties(sourceRecipeObject: any, htmlIngredients: any) {
    const collectedAnalysedProperties: any = {
      preparationSteps: this.transformPreparationSteps(sourceRecipeObject),
      preparationTimeInMinuts: this.transformPreparationDuration(sourceRecipeObject)
    }
    collectedAnalysedProperties.ingredients = await this.transformIngredients(sourceRecipeObject, htmlIngredients);
    return collectedAnalysedProperties;
  }

  static transformPreparationSteps(sourceRecipeObject: any): string[] {
    const sourcePreparationSteps = sourceRecipeObject.recipeInstructions;
    const targetPreparationSteps: string[] = sourcePreparationSteps.map(
      (step: any) => step.text
    );
    //remove last element, "Enjoy!"
    targetPreparationSteps.pop();
    return targetPreparationSteps;
  }

  private static async transformIngredients(sourceRecipeObject: any, htmlIngredients: any) {
    const sourceIngredients = sourceRecipeObject.recipeIngredient;
    const targetIngredients = await Promise.all(htmlIngredients.map(
      async (ingredient: any) => await this.generateIngredientTarget(ingredient)
    ));
    return targetIngredients;
  }

  private static async findMeasurmentsInText(text: string) {
    const measurementName = await LoadAgent.loadPluralMeasurements();
    const numberSpaceKeywordRegex = '(\\d+|[¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞↉]+)\\s*' + '(' + measurementName.join("|") + ')?';

    var finalRegex = new RegExp(numberSpaceKeywordRegex, 'gi');
    let matches = text.match(finalRegex) || [];

    return matches.join(', ');
  }

  private static getSourceMeasurment(htmlIngredient: any) {
    return htmlIngredient.querySelector('.non-us-measurement');
  }

  private static async generateIngredientTarget(sourceHtmlIngredient: any) {
    const sourceTextIngredient: string = Helper.pipe(this.getHtmlInnerText, this.trimInnerOuterWhiteSpace)(sourceHtmlIngredient);
    const targetIngredient = {
      name: this.filterIngredientName(sourceTextIngredient),
      amount: '',
      state: this.filterIngredientState(sourceTextIngredient),
      required: this.filterIngredientRequired(sourceTextIngredient),
    }
    targetIngredient.amount = await this.filterIngredientAmount(sourceHtmlIngredient);
    return targetIngredient;
  }

  private static trimInnerOuterWhiteSpace(text: string): string {
    return text.replace(/\s\s+/g, ' ');
  }

  private static getHtmlInnerText(html: any): string {
    if (html == null) {
      return '';
    }
    return html.innerText || html.textContent;
  }

  private static filterIngredientName(sourceIngredient: string): string {
    const recipes: any = LoadAgent.loadRecipes();
    const ingredientsMap = Helper.extractIngredientNamesToMap(recipes);
    for (let name of ingredientsMap) {
      if (sourceIngredient.toLocaleLowerCase().includes(name)) {
        return name.trim();
      }
    }
    return sourceIngredient.trim();
  }

  private static async filterIngredientAmount(sourceHtmlIngredient: any) {
    const ingredientText = this.getHtmlInnerText(sourceHtmlIngredient);
    const finalIngredientAmount: string[] = []

    const implicitMeasurement: string = Helper.pipe(this.getSourceMeasurment, this.getHtmlInnerText, this.trimInnerOuterWhiteSpace)(sourceHtmlIngredient);
    const analysedMeasuremnt: string = await this.trimInnerOuterWhiteSpace(await this.findMeasurmentsInText(ingredientText));
    const findToTaste: string = ingredientText.includes('to taste')? 'to taste': '';

    finalIngredientAmount.push(implicitMeasurement.trim(), analysedMeasuremnt, findToTaste);
    return this.filterEmptyArrayString(finalIngredientAmount).join(', ');
  }

  private static filterEmptyArrayString(text: string[]): string[] {
    return text.filter(Boolean);
  }

  private static filterIngredientState(sourceIngredient: string) {
    const ingredientListing = sourceIngredient.split('plus');
    const result = [];
    for(let ingredient of ingredientListing){
      const indexOfFristComma = ingredient.indexOf(',');
      if (indexOfFristComma !== -1) {
        result.push(ingredient.substring(indexOfFristComma + 1).trim());
      }
    }
    return result.filter(Boolean).join(', ');
  }

  private static filterIngredientRequired(sourceIngredient: string): boolean {
    //TODO if option exits between breakets then return true, otherwise return false
    return true;
  }

  static transformPreparationDuration(sourceRecipeObject: any) {
    return moment.duration(sourceRecipeObject.prepTime).as('minutes') + moment.duration(sourceRecipeObject.cookTime).as('minutes');
  }
}