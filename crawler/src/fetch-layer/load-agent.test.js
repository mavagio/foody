"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = __importStar(require("chai"));
require("mocha");
const load_agent_1 = require("./load-agent");
describe("loadSourceUrls()", () => {
    it('should have a return value of type array', () => {
        load_agent_1.LoadAgent.loadSourceUrls().then(urls => {
            chai.expect(urls).to.be.a('Array');
        });
    });
    it('should have a return value of at least one', () => {
        load_agent_1.LoadAgent.loadSourceUrls().then(urls => {
            chai.expect(urls.length).to.be.above(0);
        });
    });
});
