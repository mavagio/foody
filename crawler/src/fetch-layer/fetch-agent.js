"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request-promise-native"));
const jsdom_1 = require("jsdom");
class FetchAgent {
    static getRecipeObject(recipeRaw, scriptSectionName = "script[type='application/ld+json']") {
        return __awaiter(this, void 0, void 0, function* () {
            const recipeDom = this.convertStringToHtmlDom(recipeRaw);
            const recipeSection = this.getSectionFromHtml(recipeDom, scriptSectionName);
            const recipeSectionObject = JSON.parse(recipeSection.innerHTML);
            return recipeSectionObject;
        });
    }
    static getRawRecipe(recipeUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = { uri: recipeUrl };
            const result = yield request.get(options);
            return result;
        });
    }
    static convertStringToHtmlDom(html) {
        let dom = new jsdom_1.JSDOM(html);
        return dom;
    }
    static getSectionFromHtml(dom, selectorName) {
        const sourceData = dom.window.document.querySelectorAll(selectorName)[0];
        return sourceData;
    }
    static getIngredientsFromHtml(html) {
        let dom = new jsdom_1.JSDOM(html);
        let measurment;
        const ingredientsDom = dom.window.document.querySelectorAll('.ingredients-prep')[0].getElementsByTagName("li");
        return ingredientsDom;
    }
}
exports.FetchAgent = FetchAgent;
