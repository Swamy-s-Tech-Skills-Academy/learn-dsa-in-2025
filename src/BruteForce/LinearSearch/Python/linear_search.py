# File: linear_search.py

from typing import List


def linear_search(arr: List[int], target: int) -> int:
    """
    Performs a linear search on the given list to find the target element.

    Args:
        arr (List[int]): The list of integers to search in.
        target (int): The element to find.

    Returns:
        int: The index of the target element if found, otherwise -1.
    """
    for index, element in enumerate(arr):
        if element == target:
            return index
    return -1
