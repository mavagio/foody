import { IIngredient } from "../../../shared/models/recipeModel";

export class DerivedPropertyCollector {
  public static collectDerivedProperties(ingredients: IIngredient[], recipeTitle: string) {
    const collectedDerivedProperties: any = {
      priceOnAverage: this.derivePriceOnAverage(ingredients),
      nutritionCategory: this.deriveNutritionCategory(ingredients),
      allergenics: this.deriveAllergenics(ingredients),
      youtubeId: this.deriveYoutubeId(recipeTitle), 
    }
    return collectedDerivedProperties;
  }

  private static deriveNutritionCategory(ingredients: IIngredient[]) {
    return '';
  }

  private static derivePriceOnAverage(ingredients: IIngredient[]) {
    return 0
  }

  private static deriveAllergenics(ingredients: IIngredient[]) {
    return []
  }

  private static deriveYoutubeId(recipeTitle: string) {
    return null; //TODO is possible to use youtube API to search by name and find if availalbe
  }
   
}