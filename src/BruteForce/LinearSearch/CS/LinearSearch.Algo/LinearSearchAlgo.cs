// File: LinearSearchAlgo.cs

namespace LinearSearch.Algo;

public static class LinearSearchAlgo
{
    /// <summary>
    /// Performs a linear search on the given list to find the target element.
    /// </summary>
    /// <param name="list">The list of integers to search in.</param>
    /// <param name="target">The element to find.</param>
    /// <returns>The index of the target element if found, otherwise -1.</returns>
    public static int Find(List<int> list, int target)
    {
        for (int i = 0; i < list.Count; i++)
        {
            if (list[i] == target)
            {
                return i;
            }
        }

        return -1;
    }
}
