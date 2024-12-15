// File: Program.cs

using LinearSearch.Algo;

List<int> numbers = [10, 23, 45, 70, 11, 15];
int target = 45;

WriteLine($"List: {string.Join(", ", numbers)}");
WriteLine($"Searching for: {target}");

int index = LinearSearchAlgo.Find(numbers, target);

if (index != -1)
{
    WriteLine($"Element {target} found at index {index}.");
}
else
{
    WriteLine($"Element {target} not found in the list.");
}
