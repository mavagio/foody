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
const request = require("request-promise-native");
const jsdom_1 = require("jsdom");
class Crawler {
    constructor() {
    }
    getRecipes() {
        return __awaiter(this, void 0, void 0, function* () {
            const tatsy_url = 'https://tasty.co/recipe/one-pan-fall-chicken-dinner';
            var options = {
                uri: tatsy_url,
            };
            const result = yield request.get(options);
            console.log("things go here");
            let dom = new jsdom_1.JSDOM(result);
            let the_json = dom.window.document.querySelectorAll("script[type='application/ld+json']")[0];
            console.log(JSON.parse(the_json.innerHTML));
        });
    }
}
exports.Crawler = Crawler;
const smth = new Crawler();
smth.getRecipes();
