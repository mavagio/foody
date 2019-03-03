import { AnalysedPropertyCollector } from './analysed-property-collector';
import { DerivedPropertyCollector } from './derived-property-collector';
import { StaticPropertyCollector } from './static-property-collector';

export class TransformAgent {
  public static async transformRecipe(recipeObject: any, htmlIngredients: any) {
    const staticPropertiesObject = StaticPropertyCollector.collectStaticProperties(recipeObject);
    const analysedPropertiesObject = await AnalysedPropertyCollector.collectAnalysedProperties(recipeObject, htmlIngredients);

    // console.log(staticPropertiesObject);
    console.log(analysedPropertiesObject);
    //TODO derived
  }
}