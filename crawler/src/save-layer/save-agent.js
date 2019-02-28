"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class SaveAgent {
    saveObjectToFile(data, fileName) {
        let finalJson = JSON.stringify(data);
        fs.writeFile(fileName, finalJson, 'utf8', err => { console.error(err); });
    }
}
exports.SaveAgent = SaveAgent;
