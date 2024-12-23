package com.example;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 3, 15, 7, 9, 10, 23, 45, 70, 11, 5);
        int target = 5;

        int result = LinearSearch.find(numbers, target);
        if (result != -1) {
            System.out.println("Element " + target + " found at index: " + result);
        } else {
            System.out.println("Element " + target + " not found in the list.");
        }
    }
}
