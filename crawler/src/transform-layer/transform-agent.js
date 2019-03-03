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
const analysed_property_collector_1 = require("./analysed-property-collector");
const static_property_collector_1 = require("./static-property-collector");
class TransformAgent {
    static transformRecipe(recipeObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const staticPropertiesObject = static_property_collector_1.StaticPropertyCollector.collectStaticProperties(recipeObject);
            const analysedPropertiesObject = analysed_property_collector_1.AnalysedPropertyCollector.collectAnalysedProperties(recipeObject);
            // console.log(staticPropertiesObject);
            // console.log(analysedPropertiesObject);
            //TODO derived
        });
    }
}
exports.TransformAgent = TransformAgent;
