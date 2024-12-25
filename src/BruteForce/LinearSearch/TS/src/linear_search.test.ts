// src/linear_search.test.ts
import { find } from './linear_search';

describe('Linear Search', () => {
    it('should find the target element', () => {
        expect(find([10, 23, 45, 70, 11, 15], 45)).toBe(2);
        expect(find([1, 2, 3, 4, 5], 1)).toBe(0);
        expect(find([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    it('should return -1 if the target is not found', () => {
        expect(find([10, 23, 45, 70, 11, 15], 99)).toBe(-1);
        expect(find([], 10)).toBe(-1);
    });

    it('should handle duplicates correctly (return first index)', () => {
        expect(find([1, 2, 3, 3, 4], 3)).toBe(2);
    });

    it('should handle single element lists', () => {
        expect(find([5], 5)).toBe(0);
        expect(find([5], 1)).toBe(-1);
    });
});