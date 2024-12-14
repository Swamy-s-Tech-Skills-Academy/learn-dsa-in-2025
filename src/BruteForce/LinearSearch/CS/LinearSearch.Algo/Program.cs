// Example usage of the LinearSearch class
List<int> numbers = new List<int> { 10, 23, 45, 70, 11, 15 };
int target = 45;

Console.WriteLine($"List: {string.Join(", ", numbers)}");
Console.WriteLine($"Searching for: {target}");

int index = LinearSearch.Find(numbers, target);

if (index != -1)
{
    Console.WriteLine($"Element {target} found at index {index}.");
}
else
{
    Console.WriteLine($"Element {target} not found in the list.");
}
