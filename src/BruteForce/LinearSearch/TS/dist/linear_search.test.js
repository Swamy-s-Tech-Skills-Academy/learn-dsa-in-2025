"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/linear_search.test.ts
const linear_search_1 = require("./linear_search");
describe('Linear Search', () => {
    it('should find the target element', () => {
        expect((0, linear_search_1.find)([10, 23, 45, 70, 11, 15], 45)).toBe(2);
        expect((0, linear_search_1.find)([1, 2, 3, 4, 5], 1)).toBe(0);
        expect((0, linear_search_1.find)([1, 2, 3, 4, 5], 5)).toBe(4);
    });
    it('should return -1 if the target is not found', () => {
        expect((0, linear_search_1.find)([10, 23, 45, 70, 11, 15], 99)).toBe(-1);
        expect((0, linear_search_1.find)([], 10)).toBe(-1);
    });
    it('should handle duplicates correctly (return first index)', () => {
        expect((0, linear_search_1.find)([1, 2, 3, 3, 4], 3)).toBe(2);
    });
    it('should handle single element lists', () => {
        expect((0, linear_search_1.find)([5], 5)).toBe(0);
        expect((0, linear_search_1.find)([5], 1)).toBe(-1);
    });
});
