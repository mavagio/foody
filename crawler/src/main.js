"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const load_agent_1 = require("./fetch-layer/load-agent");
const fetch_agent_1 = require("./fetch-layer/fetch-agent");
class Main {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            //const sourceUrls = await LoadAgent.loadSourceUrls();
            //const rawRecipe = await FetchAgent.getRawRecipe(sourceUrls[0]);
            // const getJsonRecipe = await FetchAgent.getRecipeObject(rawRecipe);
            // TransformAgent.transformRecipe(getJsonRecipe);
            const measurementName = yield load_agent_1.LoadAgent.loadSingularMeasurements();
            let myString = 'cup<li class="xs-mb1 xs-mt0"> <section class="measurement 0 pinch us-measurement xs-inline-block"> 4 tablespoons</section>sesame oil, plus 2 tablespoons, 4 ewwewe divided</li>3 bunch, sdsdsad,sds ripe, sdsd 4, clove';
            const expression = '\\d+\\s*' + '(' + measurementName.join("|") + ')';
            // const expression2 = '\d+\s*/ + '|' + measurementName.join("|") + '|' +/\/';
            console.log(expression);
            var finalRegex = new RegExp(expression, 'gi');
            let matches = myString.match(finalRegex) || [];
            for (var i = 0; i < matches.length; i++)
                console.log("Found:", matches[i]);
        });
    }
    playgroudIngerdients(rawRecipe) {
        return __awaiter(this, void 0, void 0, function* () {
            const htmlIngredients = yield fetch_agent_1.FetchAgent.getIngredientsFromHtml(rawRecipe);
            console.log(htmlIngredients[3].innerHTML);
            for (let ingredient of htmlIngredients) {
                const measurment = ingredient.querySelector('.non-us-measurement');
                if (measurment) {
                    console.log('measurement, ', measurment.innerHTML.trim());
                }
            }
        });
    }
}
exports.Main = Main;
Main.start();
