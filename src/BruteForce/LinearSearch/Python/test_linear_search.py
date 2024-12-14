# File: test_linear_search.py

import unittest
from linear_search import linear_search


class TestLinearSearch(unittest.TestCase):
    def test_found(self):
        self.assertEqual(linear_search([10, 23, 45, 70, 11, 15], 45), 2)
        self.assertEqual(linear_search([1, 2, 3, 4, 5], 1), 0)
        self.assertEqual(linear_search([1, 2, 3, 4, 5], 5), 4)

    def test_not_found(self):
        self.assertEqual(linear_search([10, 23, 45, 70, 11, 15], 99), -1)
        self.assertEqual(linear_search([], 10), -1)

    def test_duplicates(self):
        self.assertEqual(linear_search([1, 2, 3, 3, 4], 3), 2)

    def test_single_element(self):
        self.assertEqual(linear_search([5], 5), 0)
        self.assertEqual(linear_search([5], 1), -1)


if __name__ == "__main__":
    unittest.main()
