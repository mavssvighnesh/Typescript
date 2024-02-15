"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let x = parseFloat(prompt("please enter a number less than 20"));
while (x < 20) {
    console.log(x);
    x++;
}
//# sourceMappingURL=simplewhileloop.js.map