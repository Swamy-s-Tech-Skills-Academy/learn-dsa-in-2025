// src/linear_search.ts
export function find(list: number[], target: number): number {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i;
        }
    }
    return -1;
}