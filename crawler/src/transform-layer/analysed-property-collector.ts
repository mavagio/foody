import {IIngredient} from '../../../shared/models/recipeModel';
import * as moment from 'moment';
import {Helper} from '../helper';

export class AnalysedPropertyCollector {
  public static collectAnalysedProperties(sourceRecipeObject: any) {
    return {
      preparationSteps: this.transformPreparationSteps(sourceRecipeObject),
      ingredients: this.transformIngredients(sourceRecipeObject),
      preparationTimeInMinuts: this.transformPreparationDuration(sourceRecipeObject)
    }
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

  static transformIngredients(sourceRecipeObject: any): IIngredient[] {
    const sourceIngredients = sourceRecipeObject.recipeIngredient;
    const targetIngredients: IIngredient[] = sourceIngredients.map(
      (ingredient: string) => this.generateIngredientTarget(ingredient)
    );
    return targetIngredients;
  }

  static generateIngredientTarget(sourceIngredient: string): IIngredient {
    const targetIngredient = {
     name: this.filterIngredientName(sourceIngredient),
     amount: this.filterIngredientAmount(sourceIngredient),
     state: this.filterIngredientState(sourceIngredient),
     required: this.filterIngredientRequired(sourceIngredient),
   }
   return targetIngredient;
  }

  private static filterIngredientName(sourceIngredient: string): string {
    const ingredientMap = Helper.extractIngredientNamesToMap();
    for(let name of Array.from(ingredientMap.keys())) {
      //console.log(sourceIngredient.toLocaleLowerCase().includes(name), ' sourceIngredient: ', sourceIngredient.toLocaleLowerCase(), ' name: ',name);
      if(sourceIngredient.toLocaleLowerCase().includes(name)){
        return name;
      }
    }
    return sourceIngredient;
  }

  private static filterIngredientAmount(sourceIngredient: string): string {
    // TODO take anythign that is within breakets, if no breaket then take what is left after name and state
    // take number followed by keyword combinations [tablespoon, large, teaspoon, tbs, cups, cup ... ]
    // If there is plus difind it into two parts and apply the save before and after plus
    return '';
  }

  private static filterIngredientState(sourceIngredient: string): string {
    const indexOfLastComma = sourceIngredient.indexOf(',');
    let result ='';
    if(indexOfLastComma !== -1){
      result = sourceIngredient.substring(indexOfLastComma + 1).trim();
    }
    return result;
  }

  private static filterIngredientRequired(sourceIngredient: string): boolean {
    //TODO if option exits between breakets then return true, otherwise return false
    return true;
  }

  static transformPreparationDuration(sourceRecipeObject: any) {
    return moment.duration(sourceRecipeObject.prepTime).as('minutes') + moment.duration(sourceRecipeObject.cookTime).as('minutes');
  }
}