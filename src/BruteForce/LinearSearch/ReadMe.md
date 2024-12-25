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

## Go

```powershell
go run .

go test
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

## JS

```powershell
npm init -y

npm install --save-dev jest
```

### package.json

```json
"scripts": {
    "test": "jest"
  }
```

```powershell
npm test -- --verbose

node main.js
```

## Python

```powershell
py .\main.py

py -m unittest .\test_linear_search.py
```

## TypeScript

```powershell
npm init -y
npm install --save-dev typescript jest ts-jest @types/jest
npx tsc --init
```

### jest.config.js

```json
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).[tj]s?(x)']
};
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `package.json`

```json
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js",
    "test": "jest --config jest.config.js"
  },
```

### Execute

```powershell
npm install

npm run build

npm run start

npm run build && npm start

npm run test
```
