import { IIngredient } from "../../../shared/models/recipeModel";
import { LoadAgent } from "../fetch-layer/load-agent";
import { NutritionCategory} from "../../../shared/models/recipeModel";

export class DerivedPropertyCollector {
  public static async collectDerivedProperties(ingredients: IIngredient[], recipeTitle: string) {
    const ingredientsInfo = await LoadAgent.loadIngredientInfo();
    const collectedDerivedProperties: any = {
      priceOnAverage: this.derivePriceOnAverage(ingredients),
      nutritionCategory: this.deriveNutritionCategory(ingredients, ingredientsInfo),
      allergenics: this.deriveAllergenics(ingredients),
      youtubeId: this.deriveYoutubeId(recipeTitle), 
    }
    return collectedDerivedProperties;
  }

  private static deriveNutritionCategory(ingredients: IIngredient[], ingredientsInfo: any) {
    let defaultReturnValue = NutritionCategory.vegan;
    for(let ingredient of ingredients) {
      const ingredientInfo = ingredientsInfo[ingredient.name];
      if(!ingredientInfo) { 
        return NutritionCategory.na; // Unknown ingredient, return not available
      }
      if(ingredientInfo.nutrition_category === NutritionCategory.everything) {
        return NutritionCategory.everything; // At least on ingredient is everything than the category is everything
      }
      if(ingredientInfo.nutrition_category === NutritionCategory.vegetarian) {
        defaultReturnValue = NutritionCategory.vegetarian;
      }
    }
    return defaultReturnValue;
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