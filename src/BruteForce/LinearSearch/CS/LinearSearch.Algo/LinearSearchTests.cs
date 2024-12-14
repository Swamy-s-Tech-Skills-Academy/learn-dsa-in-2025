namespace LinearSearch.Algo;

using System.Collections.Generic;
using Xunit;

public class LinearSearchTests
{
    [Fact]
    public void TestFound()
    {
        Assert.Equal(2, LinearSearch.Find(new List<int> { 10, 23, 45, 70, 11, 15 }, 45));
        Assert.Equal(0, LinearSearch.Find(new List<int> { 1, 2, 3, 4, 5 }, 1));
        Assert.Equal(4, LinearSearch.Find(new List<int> { 1, 2, 3, 4, 5 }, 5));
    }

    [Fact]
    public void TestNotFound()
    {
        Assert.Equal(-1, LinearSearch.Find(new List<int> { 10, 23, 45, 70, 11, 15 }, 99));
        Assert.Equal(-1, LinearSearch.Find(new List<int>(), 10));
    }

    [Fact]
    public void TestDuplicates()
    {
        Assert.Equal(2, LinearSearch.Find(new List<int> { 1, 2, 3, 3, 4 }, 3));
    }

    [Fact]
    public void TestSingleElement()
    {
        Assert.Equal(0, LinearSearch.Find(new List<int> { 5 }, 5));
        Assert.Equal(-1, LinearSearch.Find(new List<int> { 5 }, 1));
    }
}
