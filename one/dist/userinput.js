"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let x = prompt("please enter a text");
if (x === "hello vighnesh") {
    console.log("true vicky 1");
}
else if (x === "vighnesh") {
    console.log("true vicky2");
}
else {
    console.log("false");
}
//# sourceMappingURL=userinput.js.map