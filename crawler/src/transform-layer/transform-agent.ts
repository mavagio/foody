import { AnalysedPropertyCollector } from './analysed-property-collector';
import { DerivedPropertyCollector } from './derived-property-collector';
import { StaticPropertyCollector } from './static-property-collector';

export class TransformAgent {
  public static async transformRecipe(recipeObject: any, htmlIngredients: any) {
    const staticPropertiesObject = StaticPropertyCollector.collectStaticProperties(recipeObject);
    const analysedPropertiesObject = await AnalysedPropertyCollector.collectAnalysedProperties(recipeObject, htmlIngredients);

    const derivedPropertiesObject = DerivedPropertyCollector.collectDerivedProperties(analysedPropertiesObject.ingredients, analysedPropertiesObject.title);

    return Object.assign(staticPropertiesObject, analysedPropertiesObject, derivedPropertiesObject);
  }
}