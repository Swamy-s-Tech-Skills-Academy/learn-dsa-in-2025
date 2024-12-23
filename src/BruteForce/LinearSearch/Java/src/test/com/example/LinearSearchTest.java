package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

public class LinearSearchTest {

    @Test
    void testFound() {
        assertEquals(2, LinearSearch.find(Arrays.asList(10, 23, 45, 70, 11, 15), 45));
        assertEquals(0, LinearSearch.find(Arrays.asList(1, 2, 3, 4, 5), 1));
        assertEquals(4, LinearSearch.find(Arrays.asList(1, 2, 3, 4, 5), 5));
    }

    @Test
    void testNotFound() {
        assertEquals(-1, LinearSearch.find(Arrays.asList(10, 23, 45, 70, 11, 15), 99));
        assertEquals(-1, LinearSearch.find(Arrays.asList(), 10));
    }

    @Test
    void testDuplicates() {
        assertEquals(2, LinearSearch.find(Arrays.asList(1, 2, 3, 3, 4), 3));
    }

    @Test
    void testSingleElement() {
        assertEquals(0, LinearSearch.find(Arrays.asList(5), 5));
        assertEquals(-1, LinearSearch.find(Arrays.asList(5), 1));
    }
}