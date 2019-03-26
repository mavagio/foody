export interface IIngredient {
  name: string;
  amount: string;
  state: string;
  required?: boolean;
  selected?: boolean;
  _id?: string;
}

export enum NutritionCategory {
  vegan,
  vegetarian,
  everything,
  na,
}

export interface IRecipe {
  source: string;
  title: string;
  approval: number
  amountOfPeople: number;
  priceOnAverage: number,
  nutritionCategory: string;
  allergenics?: string[];
  preparationSteps: string[];
  ingredients: IIngredient[];
  preparationTimeInMinuts: number,
  videoURL: string;
  youtubeId: string | null;
  imageURL: string;
}