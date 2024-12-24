// main.js
const { find } = require('./linear_search'); // Import the find function

const numbers = [1, 3, 15, 7, 9, 10, 23, 45, 70, 11, 5];
const target = 5;

const result = find(numbers, target);

if (result !== -1) {
    console.log(`Element ${target} found at index: ${result}`);
} else {
    console.log(`Element ${target} not found in the list.`);
}