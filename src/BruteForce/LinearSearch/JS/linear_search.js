// linear_search.js
function find(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i;
        }
    }
    return -1;
}

module.exports = { find }; // Export the function for testing and use in other modules