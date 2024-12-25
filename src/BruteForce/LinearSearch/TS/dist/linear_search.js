"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = find;
// src/linear_search.ts
function find(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i;
        }
    }
    return -1;
}
