export interface IIngredient {
  name: string;
  amount: string;
  state: string;
  required?: boolean;
}

export interface IRecipe {
   title: string;
   approval: number
   amountOfPeople: number;
   priceOnAverage: number,
   nutritionCategory: string;
   allergenics?: [string];
   preparationSteps: [string];
   ingredients: [IIngredient];
   preparationTimeInMinuts: number,
   videoURL: string;
   youtubeId: string;
   imageURL: string;
}