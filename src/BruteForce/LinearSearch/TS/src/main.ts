// src/main.ts
import { find } from './linear_search';

const numbers: number[] = [1, 3, 15, 7, 9, 10, 23, 45, 70, 11, 5];
const target: number = 5;

const result: number = find(numbers, target);

if (result !== -1) {
    console.log(`Element ${target} found at index: ${result}`);
} else {
    console.log(`Element ${target} not found in the list.`);
}