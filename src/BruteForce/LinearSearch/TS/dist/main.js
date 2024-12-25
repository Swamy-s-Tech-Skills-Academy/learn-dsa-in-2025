"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const linear_search_1 = require("./linear_search");
const numbers = [1, 3, 15, 7, 9, 10, 23, 45, 70, 11, 5];
const target = 5;
const result = (0, linear_search_1.find)(numbers, target);
if (result !== -1) {
    console.log(`Element ${target} found at index: ${result}`);
}
else {
    console.log(`Element ${target} not found in the list.`);
}
