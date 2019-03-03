"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sources_json_1 = __importDefault(require("../assets/sources.json"));
const measurments_json_1 = __importDefault(require("../assets/measurments.json"));
class LoadAgent {
    static loadSourceUrls() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all(sources_json_1.default.map(source => Promise.resolve(source.url)));
        });
    }
    static loadSingularMeasurements() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all(measurments_json_1.default.map(measurment => Promise.resolve(measurment.name)));
        });
    }
    static loadPluralMeasurements() {
        return __awaiter(this, void 0, void 0, function* () {
            const measurmentNames = yield this.loadSingularMeasurements();
            let pluralMeasurments = yield measurmentNames.reduce((arr, e) => arr.push(e, e + 's') && arr, []);
            return pluralMeasurments;
        });
    }
}
exports.LoadAgent = LoadAgent;
