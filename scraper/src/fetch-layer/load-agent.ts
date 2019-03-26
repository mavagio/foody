import * as fs from 'fs';
import * as path from 'path';

export class LoadAgent {
  public static getFileAsJson(fileName: string) {
    const fullPath = path.resolve(__dirname, fileName);
    const rawdata: any = fs.readFileSync(fullPath);  
    const jsonObject = JSON.parse(rawdata);
    return jsonObject;
  }

  public static async loadSourceUrls(): Promise<Array<any>> {
    const sources: any = this.getFileAsJson('../assets/sources.json');
    return await Promise.all(sources.map((source: any) => Promise.resolve(source.url)));
  }

  public static loadMeasurements() {
    const measurments: any = this.getFileAsJson('../assets/measurments.json');
    return measurments;
  }

  public static async loadSingularMeasurements(): Promise<Array<any>> {
    const measurments: any = this.loadMeasurements();
    return await Promise.all(measurments.map((measurment: any) => Promise.resolve(measurment.name)));
  }

  public static async loadPluralMeasurements(): Promise<Array<any>> {
    const measurmentNames = await this.loadSingularMeasurements();
    let pluralMeasurments = await measurmentNames.reduce((arr, e) => arr.push(e+'es', e+'s', e) && arr, []);
    return pluralMeasurments;
  }

  public static async loadAllergenics(): Promise<Array<any>> {
    const allergenics: any = this.getFileAsJson('../assets/allergenics.json');
    return await Promise.all(allergenics.map((allergenic: any) => Promise.resolve(allergenic.name)));
  }

  public static loadIngredientInfo() {
    const ingredientInfo: any = this.getFileAsJson('../assets/ingredients_info.json');
    return ingredientInfo;
  }

  public static loadScrapedRecipe() {
    const recipe: any = this.getFileAsJson('../assets/scraper_recipe.json');
    return recipe;
  }

  public static loadRecipes() {
    const recipes: any = this.getFileAsJson('../../../shared/assets/recipes.json');
    return recipes;
  }
}
