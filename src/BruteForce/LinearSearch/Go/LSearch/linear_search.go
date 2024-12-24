package linearsearch

// Find performs a linear search on the given slice to find the target element.
func Find(list []int, target int) int {
	for i, element := range list {
		if element == target {
			return i
		}
	}
	return -1
}
