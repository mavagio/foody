export interface IIngridient {
  name: string;
  amount: string;
  state: string;
  required: boolean;
}

export interface IRecipe {
   title: string;
   approval: number
   amountOfPeople: number;
   priceOnAverage: number,
   nutritionCategory: string;
   allergenics?: [string];
   preparationSteps: [string];
   ingridients: [IIngridient];
   preparationTimeInMinuts: number,
   videoURL: string;
   imageURL: string;
}