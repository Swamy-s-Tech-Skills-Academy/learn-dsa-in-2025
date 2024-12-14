# File: main.py

from linear_search import linear_search

if __name__ == "__main__":
    # Example usage
    arr = [10, 23, 45, 70, 11, 15]
    target = 45

    print(f"List: {arr}")
    print(f"Searching for: {target}")

    index = linear_search(arr, target)

    if index != -1:
        print(f"Element {target} found at index {index}.")
    else:
        print(f"Element {target} not found in the list.")
