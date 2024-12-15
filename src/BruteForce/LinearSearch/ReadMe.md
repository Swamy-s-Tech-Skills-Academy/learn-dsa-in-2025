# How to execute the code

## `C#`

```powershell
dotnet add package xunit --version 2.9.2
dotnet add package xunit.runner.visualstudio --version 2.8.2
dotnet add package Microsoft.NET.Test.Sdk --version 17.8.0
dotnet add package Newtonsoft.Json --version 13.0.3

dotnet run

dotnet test
```

## Java

```powershell
gradle init
gradle wrapper

gradle tasks
gradle build --warning-mode all
gradle run --warning-mode all
gradle test --warning-mode all
```

## Python

```powershell
py .\main.py

py -m unittest .\test_linear_search.py
```
