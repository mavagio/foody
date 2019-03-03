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
const transform_agent_1 = require("./transform-layer/transform-agent");
class Main {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const sourceUrls = yield load_agent_1.LoadAgent.loadSourceUrls();
            const rawRecipe = yield fetch_agent_1.FetchAgent.getRawRecipe(sourceUrls[0]);
            const getJsonRecipe = yield fetch_agent_1.FetchAgent.getRecipeObject(rawRecipe);
            const htmlIngredients = yield fetch_agent_1.FetchAgent.getIngredientsFromHtml(rawRecipe);
            transform_agent_1.TransformAgent.transformRecipe(getJsonRecipe, htmlIngredients);
        });
    }
}
exports.Main = Main;
Main.start();
