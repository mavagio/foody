export class StaticPropertyCollector {
  public static collectStaticProperties(recipeObject: any) {
    return {
      title: this.getSourceRecipeTitle(recipeObject),
      approval: this.getSourceRecipeRatingValue(recipeObject),
      amountOfPeople: this.getSourceRecipeYield(recipeObject),
      videoURL: this.getSourceRecipeVideoUrl(recipeObject),
      imageURL: this.getSourceRecipeThumbnail(recipeObject),
    }
  }

  public static getSourceRecipeTitle(recipeObject: any) {
    return recipeObject.name;
  }

  public static getSourceRecipeRatingValue(recipeObject: any) {
    return +recipeObject.aggregateRating.ratingValue;
  }

  public static getSourceRecipeYield(recipeObject: any) {
    return recipeObject.recipeYield;
  }

  public static getSourceRecipeVideoUrl(recipeObject: any) {
    return recipeObject.video[0].contentUrl;
  }

  public static getSourceRecipeThumbnail(recipeObject: any) {
    return recipeObject.video[0].thumbnailUrl;;
  }
}