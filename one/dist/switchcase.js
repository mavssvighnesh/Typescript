"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let z = parseFloat(prompt("enter a number from following 1.96669 \n 2.98889 \n 3.99999"));
switch (z) {
    case 98889:
        console.log("true 98889");
        break;
    case 96669:
        console.log("true 96669");
        break;
    case 99999:
        console.log("true 99999");
        break;
}
//# sourceMappingURL=switchcase.js.map