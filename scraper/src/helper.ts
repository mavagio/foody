import readLine from 'readline';
import { LoadAgent } from './fetch-layer/load-agent';
export class Helper {
  static extractIngredientNamesToMap(): Map<string, any> {
    let ingredientNames: Map<string, any> = new Map<string, any>();
    const recipes: any = LoadAgent.loadRecipes();
    for(let recipe of recipes) {
      for(let ingredient of recipe.ingredients) {
        const nameLowercase = ingredient.name.toLowerCase()
        ingredientNames.set(nameLowercase, true);
      }
    }
    return ingredientNames;
  }

  public static terminateProgram() {
    process.exit(-1);
  }

  public static async askQuestion(query: string) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, (ans: any) => {
        rl.close();
        resolve(ans);
    }));
}
  public static pipe = (...fns: any) => (x: any) => fns.reduce((v: any, f: any) => f(v), x);
}