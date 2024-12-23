// File: linear_search_test.go

package linearsearch_test

import (
	linearsearch "linearsearch/LSearch"
	"testing"
)

func TestFound(t *testing.T) {
	tests := []struct {
		list   []int
		target int
		want   int
	}{
		{[]int{10, 23, 45, 70, 11, 15}, 45, 2},
		{[]int{1, 2, 3, 4, 5}, 1, 0},
		{[]int{1, 2, 3, 4, 5}, 5, 4},
	}
	for _, tt := range tests {
		t.Run("", func(t *testing.T) {
			got := linearsearch.Find(tt.list, tt.target)
			if got != tt.want {
				t.Errorf("Find(%v, %v) want %v, got %v", tt.list, tt.target, tt.want, got)
			}
		})
	}
}

func TestNotFound(t *testing.T) {
	tests := []struct {
		list   []int
		target int
		want   int
	}{
		{[]int{10, 23, 45, 70, 11, 15}, 99, -1},
		{[]int{}, 10, -1},
	}
	for _, tt := range tests {
		t.Run("", func(t *testing.T) {
			got := linearsearch.Find(tt.list, tt.target)
			if got != tt.want {
				t.Errorf("Find(%v, %v) want %v, got %v", tt.list, tt.target, tt.want, got)
			}
		})
	}
}

func TestDuplicates(t *testing.T) {
	got := linearsearch.Find([]int{1, 2, 3, 3, 4}, 3)
	want := 2
	if got != want {
		t.Errorf("Find(%v, %v) want %v, got %v", []int{1, 2, 3, 3, 4}, 3, want, got)
	}
}

func TestSingleElement(t *testing.T) {
	tests := []struct {
		list   []int
		target int
		want   int
	}{
		{[]int{5}, 5, 0},
		{[]int{5}, 1, -1},
	}
	for _, tt := range tests {
		t.Run("", func(t *testing.T) {
			got := linearsearch.Find(tt.list, tt.target)
			if got != tt.want {
				t.Errorf("Find(%v, %v) want %v, got %v", tt.list, tt.target, tt.want, got)
			}
		})
	}
}
