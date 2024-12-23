// File: main.go

package main

import (
	"fmt"
	linearsearch "linearsearch/LSearch"
)

func main() {
	numbers := []int{1, 3, 15, 7, 9, 10, 23, 45, 70, 11, 5}
	target := 5

	result := linearsearch.Find(numbers, target)
	if result != -1 {
		fmt.Println("Element", target, "found at index:", result)
	} else {
		fmt.Println("Element", target, "not found in the list.")
	}
}
