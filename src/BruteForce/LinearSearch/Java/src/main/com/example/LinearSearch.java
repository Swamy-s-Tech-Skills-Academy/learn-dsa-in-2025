// File: LinearSearch.java

package com.example;

import java.util.List;

public class LinearSearch {
    /**
     * Performs a linear search on the given list to find the target element.
     *
     * @param list   The list of integers to search in.
     * @param target The element to find.
     * @return The index of the target element if found, otherwise -1.
     */
    public static int find(List<Integer> list, int target) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i) == target) {
                return i;
            }
        }
        return -1;
    }
}
