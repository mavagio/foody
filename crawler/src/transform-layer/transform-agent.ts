import { AnalysedPropertyCollector } from './analysed-property-collector';
import { DerivedPropertyCollector } from './derived-property-collector';
import { StaticPropertyCollector } from './static-property-collector';

export class TransformAgent {
  public static async transformRecipe(recipeObject: any) {
    const staticPropertiesObject = StaticPropertyCollector.collectStaticProperties(recipeObject);
    const analysedPropertiesObject = AnalysedPropertyCollector.collectAnalysedProperties(recipeObject);

    // console.log(staticPropertiesObject);
    // console.log(analysedPropertiesObject);
    //TODO derived
  }
}