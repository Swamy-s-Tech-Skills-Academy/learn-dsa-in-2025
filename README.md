# Learn Data Structures and Algorithms - 2025

I am learning Data Structures and Algorithms from different Websites, Books, and Video courses

## Reference(s)

> 1. <https://www.bigocheatsheet.com/>

## Java

You are absolutely correct. The `run()` method is not explicitly present in the provided `build.gradle` file because Gradle handles the execution of your application through tasks. Specifically, the `application` plugin adds a `run` task that you use from the command line.

Here's a breakdown of how it works and what to do:

1.  **`application` plugin:** The line `id 'application'` in your `plugins` block is crucial. This plugin adds several tasks, including the `run` task.

2.  **`mainClass` configuration:** The line `application { mainClass.set('com.example.Main') }` is essential. It tells Gradle which class contains the `main` method (the entry point of your Java application). This is how Gradle knows what to execute when you use the `run` task.

3.  **Running the application:** To run your application, you would open a terminal in the directory containing your `build.gradle` file and execute the following command:

    ```bash
    ./gradlew run
    ```

    (On Windows, use `gradlew.bat run`)

    Gradle will then:

    - Compile your Java code.
    - Execute the `main` method of the class specified in `mainClass` (in your case, `com.example.Main`).

**In summary:** You don't need to define a `run()` method in your `build.gradle` file. The `application` plugin provides the `run` task, and you configure it using the `mainClass` property.

**Why not a `run()` method in `build.gradle`?**

`build.gradle` is a build script, not a Java class. It describes the build process, dependencies, and other configurations. It's written in Groovy (or Kotlin in more recent versions), which is a different language than Java. The `run` task is a Gradle task, not a Java method.

**Example of the process:**

1.  You have your Java code (including `Main.java` with the `main` method).
2.  You have your `build.gradle` file configuring the build.
3.  You run `./gradlew run` from the command line.
4.  Gradle uses the information in `build.gradle` to compile your Java code and then executes the `main` method specified by `mainClass`.

Therefore, you are all set and do not need to add any `run()` method to your `build.gradle` file. Just use `./gradlew run` (or `gradlew.bat run` on Windows).
