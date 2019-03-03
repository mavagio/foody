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
const moment = __importStar(require("moment"));
const helper_1 = require("../helper");
const load_agent_1 = require("../fetch-layer/load-agent");
class AnalysedPropertyCollector {
    static collectAnalysedProperties(sourceRecipeObject, htmlIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const collectedAnalysedProperties = {
                preparationSteps: this.transformPreparationSteps(sourceRecipeObject),
                preparationTimeInMinuts: this.transformPreparationDuration(sourceRecipeObject)
            };
            collectedAnalysedProperties.ingredients = yield this.transformIngredients(sourceRecipeObject, htmlIngredients);
            return collectedAnalysedProperties;
        });
    }
    static transformPreparationSteps(sourceRecipeObject) {
        const sourcePreparationSteps = sourceRecipeObject.recipeInstructions;
        const targetPreparationSteps = sourcePreparationSteps.map((step) => step.text);
        //remove last element, "Enjoy!"
        targetPreparationSteps.pop();
        return targetPreparationSteps;
    }
    static transformIngredients(sourceRecipeObject, htmlIngredients) {
        return __awaiter(this, void 0, void 0, function* () {
            const sourceIngredients = sourceRecipeObject.recipeIngredient;
            const targetIngredients = yield Promise.all(htmlIngredients.map((ingredient) => __awaiter(this, void 0, void 0, function* () { return yield this.generateIngredientTarget(ingredient); })));
            return targetIngredients;
        });
    }
    static findMeasurmentsInText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const measurementName = yield load_agent_1.LoadAgent.loadPluralMeasurements();
            const numberSpaceKeywordRegex = '(\\d+|[¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞↉]+)\\s*' + '(' + measurementName.join("|") + ')';
            var finalRegex = new RegExp(numberSpaceKeywordRegex, 'gi');
            let matches = text.match(finalRegex) || [];
            return matches.join(', ');
        });
    }
    static getSourceMeasurment(htmlIngredient) {
        return htmlIngredient.querySelector('.non-us-measurement');
    }
    static generateIngredientTarget(sourceHtmlIngredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const sourceTextIngredient = helper_1.Helper.pipe(this.getHtmlInnerText, this.trimInnerOuterWhiteSpace)(sourceHtmlIngredient);
            const targetIngredient = {
                name: this.filterIngredientName(sourceTextIngredient),
                amount: '',
                state: this.filterIngredientState(sourceTextIngredient),
                required: this.filterIngredientRequired(sourceTextIngredient),
            };
            targetIngredient.amount = yield this.filterIngredientAmount(sourceHtmlIngredient);
            return targetIngredient;
        });
    }
    static trimInnerOuterWhiteSpace(text) {
        return text.replace(/\s\s+/g, ' ');
    }
    static getHtmlInnerText(html) {
        if (html == null) {
            return '';
        }
        return html.innerText || html.textContent;
    }
    static filterIngredientName(sourceIngredient) {
        const ingredientMap = helper_1.Helper.extractIngredientNamesToMap();
        for (let name of Array.from(ingredientMap.keys())) {
            if (sourceIngredient.toLocaleLowerCase().includes(name)) {
                return name;
            }
        }
        return sourceIngredient;
    }
    static filterIngredientAmount(sourceHtmlIngredient) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingredientText = this.getHtmlInnerText(sourceHtmlIngredient);
            const finalIngredientAmount = [];
            const implicitMeasurement = helper_1.Helper.pipe(this.getSourceMeasurment, this.getHtmlInnerText, this.trimInnerOuterWhiteSpace)(sourceHtmlIngredient);
            const analysedMeasuremnt = yield this.trimInnerOuterWhiteSpace(yield this.findMeasurmentsInText(ingredientText));
            const findToTaste = ingredientText.includes('to taste') ? 'to taste' : '';
            finalIngredientAmount.push(implicitMeasurement.trim(), analysedMeasuremnt, findToTaste);
            return finalIngredientAmount.filter(Boolean).join(', ');
        });
    }
    static filterIngredientState(sourceIngredient) {
        const ingredientListing = sourceIngredient.split('plus');
        const result = [];
        for (let ingredient of ingredientListing) {
            const indexOfFristComma = ingredient.indexOf(',');
            if (indexOfFristComma !== -1) {
                result.push(ingredient.substring(indexOfFristComma + 1).trim());
            }
        }
        return result.filter(Boolean).join(', ');
    }
    static filterIngredientRequired(sourceIngredient) {
        //TODO if option exits between breakets then return true, otherwise return false
        return true;
    }
    static transformPreparationDuration(sourceRecipeObject) {
        return moment.duration(sourceRecipeObject.prepTime).as('minutes') + moment.duration(sourceRecipeObject.cookTime).as('minutes');
    }
}
exports.AnalysedPropertyCollector = AnalysedPropertyCollector;
