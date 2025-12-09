'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { 
  Code, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb, 
  Trophy, 
  ChevronRight, 
  RotateCcw, 
  BookOpen,
  Zap,
  Target,
  Clock,
  Star
} from 'lucide-react'

const challenges = {
  php: [
    {
      id: 1,
      title: "Hello World",
      difficulty: "Beginner",
      category: "Basics",
      description: "Write your first PHP program",
      initialCode: "<?php\necho 'Hello, World!';\n?>",
      solution: "<?php\necho 'Hello, World!';\n?>",
      explanation: "The echo statement outputs text to the screen in PHP."
    },
    {
      id: 2,
      title: "Variable Declaration",
      difficulty: "Beginner",
      category: "Variables",
      description: "Create and display a variable",
      initialCode: "<?php\n$name = 'John';\necho 'Hello, ' . $name . '!';\n?>",
      solution: "<?php\n$name = 'John';\necho 'Hello, ' . $name . '!';\n?>",
      explanation: "Variables in PHP start with $ symbol and can store different data types."
    },
    {
      id: 3,
      title: "Array Operations",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Create an array and display the sum of its elements",
      initialCode: "<?php\n$numbers = [1, 2, 3, 4, 5];\n// Your code here\n?>",
      solution: "<?php\n$numbers = [1, 2, 3, 4, 5];\n$sum = array_sum($numbers);\necho 'Sum: ' . $sum;\n?>",
      explanation: "array_sum() is a built-in PHP function that calculates the sum of all array elements."
    },
    {
      id: 4,
      title: "Function Creation",
      difficulty: "Intermediate",
      category: "Functions",
      description: "Create a function that calculates the area of a rectangle",
      initialCode: "<?php\n// Create a function called calculateArea\n// It should accept width and height parameters\n// Return the area (width * height)\n?>",
      solution: "<?php\nfunction calculateArea($width, $height) {\n    return $width * $height;\n}\n\n$area = calculateArea(5, 3);\necho 'Area: ' . $area;\n?>",
      explanation: "Functions in PHP are defined using the 'function' keyword and can accept parameters."
    },
    {
      id: 5,
      title: "If-Else Statement",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Check if a number is positive or negative",
      initialCode: "<?php\n$number = -5;\n// Write an if-else statement to check if the number is positive or negative\n?>",
      solution: "<?php\n$number = -5;\nif ($number > 0) {\n    echo 'The number is positive';\n} else {\n    echo 'The number is negative';\n}\n?>",
      explanation: "If-else statements allow you to execute different code blocks based on a condition."
    },
    {
      id: 6,
      title: "For Loop",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Print numbers from 1 to 10 using a for loop",
      initialCode: "<?php\n// Write a for loop to print numbers from 1 to 10\n?>",
      solution: "<?php\nfor ($i = 1; $i <= 10; $i++) {\n    echo $i . ' ';\n}\n?>",
      explanation: "For loops are used when you know how many times you want to execute a statement or a block of statements."
    },
    {
      id: 7,
      title: "String Concatenation",
      difficulty: "Beginner",
      category: "Strings",
      description: "Combine first name and last name to display full name",
      initialCode: "<?php\n$firstName = 'John';\n$lastName = 'Doe';\n// Combine the variables to display the full name\n?>",
      solution: "<?php\n$firstName = 'John';\n$lastName = 'Doe';\n$fullName = $firstName . ' ' . $lastName;\necho $fullName;\n?>",
      explanation: "The dot (.) operator is used to concatenate strings in PHP."
    },
    {
      id: 8,
      title: "String Length",
      difficulty: "Beginner",
      category: "Strings",
      description: "Find and display the length of a string",
      initialCode: "<?php\n$text = 'Hello, World!';\n// Find and display the length of the string\n?>",
      solution: "<?php\n$text = 'Hello, World!';\n$length = strlen($text);\necho 'String length: ' . $length;\n?>",
      explanation: "The strlen() function returns the number of characters in a string."
    },
    {
      id: 9,
      title: "Array Push",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Add elements to an array using array_push()",
      initialCode: "<?php\n$fruits = ['Apple', 'Banana'];\n// Add 'Orange' and 'Grape' to the array\n?>",
      solution: "<?php\n$fruits = ['Apple', 'Banana'];\narray_push($fruits, 'Orange', 'Grape');\nprint_r($fruits);\n?>",
      explanation: "array_push() adds one or more elements to the end of an array."
    },
    {
      id: 10,
      title: "Associative Array",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Create an associative array and access a value by key",
      initialCode: "<?php\n// Create an associative array with person information\n// Access and display the age\n?>",
      solution: "<?php\n$person = [\n    'name' => 'John',\n    'age' => 30,\n    'city' => 'New York'\n];\necho 'Age: ' . $person['age'];\n?>",
      explanation: "Associative arrays use named keys that you assign to them."
    },
    {
      id: 11,
      title: "Foreach Loop",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Iterate through an array and print each element",
      initialCode: "<?php\n$colors = ['Red', 'Green', 'Blue'];\n// Use foreach to print each color\n?>",
      solution: "<?php\n$colors = ['Red', 'Green', 'Blue'];\nforeach ($colors as $color) {\n    echo $color . '<br>';\n}\n?>",
      explanation: "The foreach loop provides an easy way to iterate over arrays."
    },
    {
      id: 12,
      title: "Function with Default Parameters",
      difficulty: "Intermediate",
      category: "Functions",
      description: "Create a function with default parameter values",
      initialCode: "<?php\n// Create a function greet that takes a name parameter\n// with 'Guest' as the default value\n?>",
      solution: "<?php\nfunction greet($name = 'Guest') {\n    return 'Hello, ' . $name . '!';\n}\n\necho greet(); // Uses default value\necho '<br>';\necho greet('John'); // Uses provided value\n?>",
      explanation: "PHP allows you to set default parameter values in function definitions."
    },
    {
      id: 13,
      title: "Include and Require",
      difficulty: "Intermediate",
      category: "File Operations",
      description: "Include a file in your PHP script",
      initialCode: "<?php\n// Include a file named 'config.php'\n?>",
      solution: "<?php\ninclude 'config.php';\n// or require 'config.php';\n?>",
      explanation: "include and require are used to include and evaluate the specified file. require will produce a fatal error if the file is not found, while include will only produce a warning."
    },
    {
      id: 14,
      title: "File Write",
      difficulty: "Intermediate",
      category: "File Operations",
      description: "Write content to a file",
      initialCode: "<?php\n// Write 'Hello, World!' to a file named 'test.txt'\n?>",
      solution: "<?php\n$file = 'test.txt';\n$content = 'Hello, World!';\nfile_put_contents($file, $content);\necho 'Content written to file successfully.';\n?>",
      explanation: "file_put_contents() writes a string to a file, creating the file if it doesn't exist."
    },
    {
      id: 15,
      title: "File Read",
      difficulty: "Intermediate",
      category: "File Operations",
      description: "Read content from a file",
      initialCode: "<?php\n// Read content from a file named 'test.txt'\n?>",
      solution: "<?php\n$file = 'test.txt';\nif (file_exists($file)) {\n    $content = file_get_contents($file);\n    echo $content;\n} else {\n    echo 'File does not exist.';\n}\n?>",
      explanation: "file_get_contents() reads a file into a string. It's good practice to check if the file exists first."
    },
    {
      id: 16,
      title: "Form Handling",
      difficulty: "Intermediate",
      category: "Forms",
      description: "Process form data submitted via POST method",
      initialCode: "<?php\n// Check if form is submitted and display the name\n?>",
      solution: "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    $name = isset($_POST['name']) ? $_POST['name'] : '';\n    echo 'Hello, ' . htmlspecialchars($name) . '!';\n}\n?>",
      explanation: "Form data submitted via POST is available in the $_POST superglobal. htmlspecialchars() is used to prevent XSS attacks."
    },
    {
      id: 17,
      title: "URL Parameters",
      difficulty: "Intermediate",
      category: "Forms",
      description: "Get parameters from URL query string",
      initialCode: "<?php\n// Get and display the 'id' parameter from URL\n?>",
      solution: "<?php\n$id = isset($_GET['id']) ? $_GET['id'] : 'default';\necho 'ID: ' . htmlspecialchars($id);\n?>",
      explanation: "URL parameters are available in the $_GET superglobal array."
    },
    {
      id: 18,
      title: "Session Management",
      difficulty: "Intermediate",
      category: "Sessions",
      description: "Start a session and store a value",
      initialCode: "<?php\n// Start a session and store a username\n?>",
      solution: "<?php\nsession_start();\n$_SESSION['username'] = 'John';\necho 'Session variable set successfully.';\n?>",
      explanation: "session_start() initializes session data. $_SESSION is used to store session variables."
    },
    {
      id: 19,
      title: "Cookie Management",
      difficulty: "Intermediate",
      category: "Cookies",
      description: "Set a cookie and retrieve its value",
      initialCode: "<?php\n// Set a cookie named 'user' with value 'John'\n?>",
      solution: "<?php\n$cookie_name = 'user';\n$cookie_value = 'John';\nsetcookie($cookie_name, $cookie_value, time() + (86400 * 30), '/'); // 30 days expiry\n\nif(isset($_COOKIE[$cookie_name])) {\n    echo 'Cookie ' . $cookie_name . ' is set!<br>';\n    echo 'Value is: ' . $_COOKIE[$cookie_name];\n} else {\n    echo 'Cookie named ' . $cookie_name . ' is not set!';\n}\n?>",
      explanation: "setcookie() defines a cookie to be sent along with the rest of the HTTP headers. Cookies are accessible in subsequent page loads via the $_COOKIE superglobal."
    },
    {
      id: 20,
      title: "Date and Time",
      difficulty: "Beginner",
      category: "Date/Time",
      description: "Display the current date and time",
      initialCode: "<?php\n// Display the current date and time\n?>",
      solution: "<?php\necho 'Current date and time: ' . date('Y-m-d H:i:s');\n?>",
      explanation: "The date() function formats a local date and time according to the specified format string."
    },
    {
      id: 21,
      title: "Math Operations",
      difficulty: "Beginner",
      category: "Math",
      description: "Calculate the area of a circle",
      initialCode: "<?php\n$radius = 5;\n// Calculate the area of the circle (π * r^2)\n?>",
      solution: "<?php\n$radius = 5;\n$area = pi() * pow($radius, 2);\necho 'Area of the circle: ' . $area;\n?>",
      explanation: "pi() returns the value of π, and pow() raises a number to the power of another."
    },
    {
      id: 22,
      title: "Random Number",
      difficulty: "Beginner",
      category: "Math",
      description: "Generate a random number between 1 and 100",
      initialCode: "<?php\n// Generate a random number between 1 and 100\n?>",
      solution: "<?php\n$randomNumber = rand(1, 100);\necho 'Random number: ' . $randomNumber;\n?>",
      explanation: "rand() generates a random integer between the specified minimum and maximum values."
    },
    {
      id: 23,
      title: "String to Upper Case",
      difficulty: "Beginner",
      category: "Strings",
      description: "Convert a string to uppercase",
      initialCode: "<?php\n$text = 'hello world';\n// Convert the string to uppercase\n?>",
      solution: "<?php\n$text = 'hello world';\necho strtoupper($text);\n?>",
      explanation: "strtoupper() converts a string to uppercase."
    },
    {
      id: 24,
      title: "String Replace",
      difficulty: "Intermediate",
      category: "Strings",
      description: "Replace a word in a string",
      initialCode: "<?php\n$text = 'The quick brown fox jumps over the lazy dog.';\n// Replace 'fox' with 'cat'\n?>",
      solution: "<?php\n$text = 'The quick brown fox jumps over the lazy dog.';\n$newText = str_replace('fox', 'cat', $text);\necho $newText;\n?>",
      explanation: "str_replace() replaces all occurrences of the search string with the replacement string."
    },
    {
      id: 25,
      title: "Substring",
      difficulty: "Intermediate",
      category: "Strings",
      description: "Extract a part of a string",
      initialCode: "<?php\n$text = 'Hello, World!';\n// Extract 'World' from the string\n?>",
      solution: "<?php\n$text = 'Hello, World!';\n$substring = substr($text, 7, 5);\necho $substring;\n?>",
      explanation: "substr() returns a portion of the string specified by the start and length parameters."
    },
    {
      id: 26,
      title: "Array Sort",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Sort an array in ascending order",
      initialCode: "<?php\n$numbers = [5, 2, 8, 1, 9];\n// Sort the array in ascending order\n?>",
      solution: "<?php\n$numbers = [5, 2, 8, 1, 9];\nsort($numbers);\nprint_r($numbers);\n?>",
      explanation: "sort() sorts an array in ascending order. For descending order, use rsort()."
    },
    {
      id: 27,
      title: "Array Search",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Search for a value in an array",
      initialCode: "<?php\n$colors = ['Red', 'Green', 'Blue', 'Yellow'];\n// Check if 'Blue' exists in the array\n?>",
      solution: "<?php\n$colors = ['Red', 'Green', 'Blue', 'Yellow'];\nif (in_array('Blue', $colors)) {\n    echo 'Blue exists in the array';\n} else {\n    echo 'Blue does not exist in the array';\n}\n?>",
      explanation: "in_array() checks if a value exists in an array and returns true or false."
    },
    {
      id: 28,
      title: "Array Merge",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Merge two arrays into one",
      initialCode: "<?php\n$array1 = ['a', 'b', 'c'];\n$array2 = ['d', 'e', 'f'];\n// Merge the two arrays\n?>",
      solution: "<?php\n$array1 = ['a', 'b', 'c'];\n$array2 = ['d', 'e', 'f'];\n$mergedArray = array_merge($array1, $array2);\nprint_r($mergedArray);\n?>",
      explanation: "array_merge() merges one or more arrays into one array."
    },
    {
      id: 29,
      title: "While Loop",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Print numbers from 1 to 5 using a while loop",
      initialCode: "<?php\n// Use a while loop to print numbers from 1 to 5\n?>",
      solution: "<?php\n$i = 1;\nwhile ($i <= 5) {\n    echo $i . ' ';\n    $i++;\n}\n?>",
      explanation: "The while loop executes a block of code as long as the specified condition is true."
    },
    {
      id: 30,
      title: "Switch Statement",
      difficulty: "Intermediate",
      category: "Control Structures",
      description: "Use a switch statement to display a message based on a grade",
      initialCode: "<?php\n$grade = 'B';\n// Use a switch statement to display a message based on the grade\n?>",
      solution: "<?php\n$grade = 'B';\nswitch ($grade) {\n    case 'A':\n        echo 'Excellent!';\n        break;\n    case 'B':\n        echo 'Good job!';\n        break;\n    case 'C':\n        echo 'You passed!';\n        break;\n    default:\n        echo 'Invalid grade';\n}\n?>",
      explanation: "The switch statement is used to perform different actions based on different conditions."
    },
    {
      id: 31,
      title: "Ternary Operator",
      difficulty: "Intermediate",
      category: "Control Structures",
      description: "Use the ternary operator to check if a number is even or odd",
      initialCode: "<?php\n$number = 10;\n// Use the ternary operator to check if the number is even or odd\n?>",
      solution: "<?php\n$number = 10;\n$result = ($number % 2 == 0) ? 'Even' : 'Odd';\necho 'The number is ' . $result;\n?>",
      explanation: "The ternary operator is a shorthand for if-else statements: condition ? value_if_true : value_if_false"
    },
    {
      id: 32,
      title: "Class Definition",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a simple class with properties and methods",
      initialCode: "<?php\n// Create a class named Car with properties and methods\n?>",
      solution: "<?php\nclass Car {\n    public $color;\n    public $model;\n    \n    public function __construct($color, $model) {\n        $this->color = $color;\n        $this->model = $model;\n    }\n    \n    public function displayInfo() {\n        return 'This is a ' . $this->color . ' ' . $this->model;\n    }\n}\n\n$myCar = new Car('red', 'Toyota');\necho $myCar->displayInfo();\n?>",
      explanation: "Classes are the building blocks of object-oriented programming. They encapsulate data and functions that operate on that data."
    },
    {
      id: 33,
      title: "Inheritance",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a child class that inherits from a parent class",
      initialCode: "<?php\n// Create a parent class Animal and a child class Dog\n?>",
      solution: "<?php\nclass Animal {\n    public $name;\n    \n    public function __construct($name) {\n        $this->name = $name;\n    }\n    \n    public function eat() {\n        return $this->name . ' is eating.';\n    }\n}\n\nclass Dog extends Animal {\n    public function bark() {\n        return $this->name . ' is barking.';\n    }\n}\n\n$dog = new Dog('Buddy');\necho $dog->eat() . '<br>';\necho $dog->bark();\n?>",
      explanation: "Inheritance allows a class to inherit properties and methods from another class. The child class can also have its own additional properties and methods."
    },
    {
      id: 34,
      title: "Static Properties and Methods",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a class with static properties and methods",
      initialCode: "<?php\n// Create a class with static properties and methods\n?>",
      solution: "<?php\nclass MathHelper {\n    public static $pi = 3.14159;\n    \n    public static function circleArea($radius) {\n        return self::$pi * $radius * $radius;\n    }\n}\n\necho 'Value of pi: ' . MathHelper::$pi . '<br>';\necho 'Area of circle with radius 5: ' . MathHelper::circleArea(5);\n?>",
      explanation: "Static properties and methods belong to the class itself rather than to instances of the class. They can be accessed without creating an object of the class."
    },
    {
      id: 35,
      title: "Interface Implementation",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create an interface and implement it in a class",
      initialCode: "<?php\n// Create an interface Shape and implement it in a Circle class\n?>",
      solution: "<?php\ninterface Shape {\n    public function calculateArea();\n    public function calculatePerimeter();\n}\n\nclass Circle implements Shape {\n    private $radius;\n    \n    public function __construct($radius) {\n        $this->radius = $radius;\n    }\n    \n    public function calculateArea() {\n        return pi() * $this->radius * $this->radius;\n    }\n    \n    public function calculatePerimeter() {\n        return 2 * pi() * $this->radius;\n    }\n}\n\n$circle = new Circle(5);\necho 'Area: ' . $circle->calculateArea() . '<br>';\necho 'Perimeter: ' . $circle->calculatePerimeter();\n?>",
      explanation: "An interface defines a contract of methods that a class must implement. It provides a way to ensure that certain classes have the same methods."
    },
    {
      id: 36,
      title: "Abstract Class",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create an abstract class with abstract methods",
      initialCode: "<?php\n// Create an abstract class with abstract methods\n?>",
      solution: "<?php\nabstract class Vehicle {\n    protected $brand;\n    \n    public function __construct($brand) {\n        $this->brand = $brand;\n    }\n    \n    public function getBrand() {\n        return $this->brand;\n    }\n    \n    abstract public function start();\n}\n\nclass Car extends Vehicle {\n    public function start() {\n        return $this->brand . ' car is starting.';\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    public function start() {\n        return $this->brand . ' motorcycle is starting.';\n    }\n}\n\n$car = new Car('Toyota');\n$motorcycle = new Motorcycle('Honda');\n\necho $car->start() . '<br>';\necho $motorcycle->start();\n?>",
      explanation: "An abstract class cannot be instantiated and may contain abstract methods that must be implemented by child classes."
    },
    {
      id: 37,
      title: "Exception Handling",
      difficulty: "Advanced",
      category: "Error Handling",
      description: "Use try-catch blocks to handle exceptions",
      initialCode: "<?php\n// Use try-catch to handle division by zero\n?>",
      solution: "<?php\ntry {\n    $numerator = 10;\n    $denominator = 0;\n    \n    if ($denominator == 0) {\n        throw new Exception('Division by zero is not allowed.');\n    }\n    \n    $result = $numerator / $denominator;\n    echo 'Result: ' . $result;\n} catch (Exception $e) {\n    echo 'Error: ' . $e->getMessage();\n}\n?>",
      explanation: "Exception handling allows you to manage errors gracefully. The try block contains code that might throw an exception, and the catch block handles the exception."
    },
    {
      id: 38,
      title: "Custom Exception",
      difficulty: "Advanced",
      category: "Error Handling",
      description: "Create and use a custom exception class",
      initialCode: "<?php\n// Create a custom exception class and use it\n?>",
      solution: "<?php\nclass InvalidEmailException extends Exception {\n    public function errorMessage() {\n        return 'Error: ' . $this->getMessage() . ' is not a valid email address.';\n    }\n}\n\n$email = 'not-an-email';\n\ntry {\n    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        throw new InvalidEmailException($email);\n    }\n    echo 'Email is valid: ' . $email;\n} catch (InvalidEmailException $e) {\n    echo $e->errorMessage();\n}\n?>",
      explanation: "You can create custom exception classes by extending the base Exception class. This allows you to handle specific types of errors differently."
    },
    {
      id: 39,
      title: "Database Connection",
      difficulty: "Advanced",
      category: "Database",
      description: "Connect to a MySQL database using PDO",
      initialCode: "<?php\n// Connect to a MySQL database using PDO\n?>",
      solution: "<?php\n$host = 'localhost';\n$dbname = 'test_db';\n$username = 'root';\n$password = '';\n\ntry {\n    $pdo = new PDO(\"mysql:host=$host;dbname=$dbname\", $username, $password);\n    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n    echo 'Connected to database successfully';\n} catch (PDOException $e) {\n    echo 'Connection failed: ' . $e->getMessage();\n}\n?>",
      explanation: "PDO (PHP Data Objects) provides a consistent interface for accessing databases. It supports prepared statements and offers better security against SQL injection."
    },
    {
      id: 40,
      title: "Database Query",
      difficulty: "Advanced",
      category: "Database",
      description: "Execute a SELECT query and fetch results",
      initialCode: "<?php\n// Execute a SELECT query and display results\n?>",
      solution: "<?php\n// Assuming $pdo is a valid PDO connection\ntry {\n    $stmt = $pdo->prepare('SELECT id, name, email FROM users');\n    $stmt->execute();\n    \n    // Set the resulting array to associative\n    $stmt->setFetchMode(PDO::FETCH_ASSOC);\n    \n    echo '<table border=\"1\">';\n    echo '<tr><th>ID</th><th>Name</th><th>Email</th></tr>';\n    \n    while ($row = $stmt->fetch()) {\n        echo '<tr>';\n        echo '<td>' . $row['id'] . '</td>';\n        echo '<td>' . $row['name'] . '</td>';\n        echo '<td>' . $row['email'] . '</td>';\n        echo '</tr>';\n    }\n    \n    echo '</table>';\n} catch (PDOException $e) {\n    echo 'Query failed: ' . $e->getMessage();\n}\n?>",
      explanation: "Prepared statements help prevent SQL injection attacks. The fetch() method retrieves the next row from a result set."
    },
    {
      id: 41,
      title: "Database Insert",
      difficulty: "Advanced",
      category: "Database",
      description: "Insert data into a database table",
      initialCode: "<?php\n// Insert a new record into the users table\n?>",
      solution: "<?php\n// Assuming $pdo is a valid PDO connection\ntry {\n    $stmt = $pdo->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');\n    \n    $name = 'John Doe';\n    $email = 'john@example.com';\n    $password = password_hash('password123', PASSWORD_DEFAULT);\n    \n    $stmt->execute([$name, $email, $password]);\n    \n    echo 'New record created successfully';\n} catch (PDOException $e) {\n    echo 'Insert failed: ' . $e->getMessage();\n}\n?>",
      explanation: "Using prepared statements with placeholders (?) is a secure way to insert data into a database. password_hash() is used to securely hash passwords."
    },
    {
      id: 42,
      title: "Database Update",
      difficulty: "Advanced",
      category: "Database",
      description: "Update a record in a database table",
      initialCode: "<?php\n// Update a user's email in the users table\n?>",
      solution: "<?php\n// Assuming $pdo is a valid PDO connection\ntry {\n    $stmt = $pdo->prepare('UPDATE users SET email = ? WHERE id = ?');\n    \n    $newEmail = 'newemail@example.com';\n    $userId = 1;\n    \n    $stmt->execute([$newEmail, $userId]);\n    \n    echo $stmt->rowCount() . ' records updated successfully';\n} catch (PDOException $e) {\n    echo 'Update failed: ' . $e->getMessage();\n}\n?>",
      explanation: "The UPDATE statement modifies existing records in a table. rowCount() returns the number of affected rows."
    },
    {
      id: 43,
      title: "Database Delete",
      difficulty: "Advanced",
      category: "Database",
      description: "Delete a record from a database table",
      initialCode: "<?php\n// Delete a user from the users table\n?>",
      solution: "<?php\n// Assuming $pdo is a valid PDO connection\ntry {\n    $stmt = $pdo->prepare('DELETE FROM users WHERE id = ?');\n    \n    $userId = 1;\n    \n    $stmt->execute([$userId]);\n    \n    echo $stmt->rowCount() . ' records deleted successfully';\n} catch (PDOException $e) {\n    echo 'Delete failed: ' . $e->getMessage();\n}\n?>",
      explanation: "The DELETE statement removes records from a table. Be careful with the WHERE clause to avoid deleting all records."
    },
    {
      id: 44,
      title: "File Upload",
      difficulty: "Advanced",
      category: "File Operations",
      description: "Handle file upload in PHP",
      initialCode: "<?php\n// Handle file upload from a form\n?>",
      solution: "<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {\n    $file = $_FILES['file'];\n    $fileName = $file['name'];\n    $fileTmpName = $file['tmp_name'];\n    $fileSize = $file['size'];\n    $fileError = $file['error'];\n    \n    $fileExt = explode('.', $fileName);\n    $fileActualExt = strtolower(end($fileExt));\n    \n    $allowed = array('jpg', 'jpeg', 'png', 'pdf');\n    \n    if (in_array($fileActualExt, $allowed)) {\n        if ($fileError === 0) {\n            if ($fileSize < 1000000) { // 1MB limit\n                $fileNameNew = uniqid('', true) . '.' . $fileActualExt;\n                $fileDestination = 'uploads/' . $fileNameNew;\n                move_uploaded_file($fileTmpName, $fileDestination);\n                echo 'File uploaded successfully!';\n            } else {\n                echo 'Your file is too big!';\n            }\n        } else {\n            echo 'There was an error uploading your file!';\n        }\n    } else {\n        echo 'You cannot upload files of this type!';\n    }\n}\n?>",
      explanation: "File uploads in PHP are handled through the $_FILES superglobal. It's important to validate file type, size, and handle errors properly."
    },
    {
      id: 45,
      title: "JSON Handling",
      difficulty: "Advanced",
      category: "API",
      description: "Encode and decode JSON data",
      initialCode: "<?php\n// Create an array, encode it to JSON, then decode it back\n?>",
      solution: "<?php\n// Create an associative array\n$user = [\n    'id' => 1,\n    'name' => 'John Doe',\n    'email' => 'john@example.com',\n    'hobbies' => ['reading', 'swimming', 'coding']\n];\n\n// Encode to JSON\n$jsonData = json_encode($user);\necho 'JSON Data: ' . $jsonData . '<br>';\n\n// Decode back to PHP array\n$decodedData = json_decode($jsonData, true);\necho 'Decoded Name: ' . $decodedData['name'];\n?>",
      explanation: "json_encode() converts a PHP variable to a JSON string, while json_decode() converts a JSON string to a PHP variable. The second parameter of json_decode() set to true returns an associative array."
    },
    {
      id: 46,
      title: "API Request",
      difficulty: "Advanced",
      category: "API",
      description: "Make an API request using cURL",
      initialCode: "<?php\n// Make a GET request to an API using cURL\n?>",
      solution: "<?php\n// Initialize cURL session\n$ch = curl_init();\n\n// Set cURL options\ncurl_setopt($ch, CURLOPT_URL, 'https://jsonplaceholder.typicode.com/users/1');\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch, CURLOPT_HEADER, false);\n\n// Execute cURL session\n$response = curl_exec($ch);\n\n// Check for errors\nif (curl_errno($ch)) {\n    echo 'cURL Error: ' . curl_error($ch);\n} else {\n    // Decode JSON response\n    $data = json_decode($response, true);\n    \n    // Display user information\n    echo 'Name: ' . $data['name'] . '<br>';\n    echo 'Email: ' . $data['email'] . '<br>';\n    echo 'Phone: ' . $data['phone'];\n}\n\n// Close cURL session\ncurl_close($ch);\n?>",
      explanation: "cURL is a PHP extension that allows you to make HTTP requests to APIs. It's a powerful tool for interacting with web services."
    },
    {
      id: 47,
      title: "Regular Expressions",
      difficulty: "Advanced",
      category: "Strings",
      description: "Use regular expressions to validate a phone number",
      initialCode: "<?php\n// Validate a phone number using regular expressions\n?>",
      solution: "<?php\n$phoneNumbers = [\n    '123-456-7890',\n    '(123) 456-7890',\n    '123.456.7890',\n    '1234567890',\n    '123 456 7890',\n    '12345678' // Invalid\n];\n\n$pattern = '/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/';\n\nforeach ($phoneNumbers as $phoneNumber) {\n    if (preg_match($pattern, $phoneNumber)) {\n        echo $phoneNumber . ' is a valid phone number<br>';\n    } else {\n        echo $phoneNumber . ' is NOT a valid phone number<br>';\n    }\n}\n?>",
      explanation: "Regular expressions are patterns used to match character combinations in strings. preg_match() performs a regular expression match."
    },
    {
      id: 48,
      title: "Email Validation",
      difficulty: "Intermediate",
      category: "Forms",
      description: "Validate an email address",
      initialCode: "<?php\n// Validate an email address\n?>",
      solution: "<?php\n$email = 'test@example.com';\n\nif (filter_var($email, FILTER_VALIDATE_EMAIL)) {\n    echo $email . ' is a valid email address';\n} else {\n    echo $email . ' is NOT a valid email address';\n}\n?>",
      explanation: "filter_var() with FILTER_VALIDATE_EMAIL is a built-in PHP function to validate email addresses."
    },
    {
      id: 49,
      title: "Password Hashing",
      difficulty: "Advanced",
      category: "Security",
      description: "Hash and verify a password",
      initialCode: "<?php\n// Hash a password and then verify it\n?>",
      solution: "<?php\n$password = 'user_password123';\n\n// Hash the password\n$hashedPassword = password_hash($password, PASSWORD_DEFAULT);\necho 'Hashed Password: ' . $hashedPassword . '<br>';\n\n// Verify the password\nif (password_verify($password, $hashedPassword)) {\n    echo 'Password verified successfully!';\n} else {\n    echo 'Invalid password!';\n}\n?>",
      explanation: "password_hash() creates a secure hash of a password, and password_verify() verifies that a password matches a hash. This is much more secure than using md5() or sha1()."
    },
    {
      id: 50,
      title: "XSS Prevention",
      difficulty: "Advanced",
      category: "Security",
      description: "Prevent Cross-Site Scripting (XSS) attacks",
      initialCode: "<?php\n// Safely display user input to prevent XSS\n?>",
      solution: "<?php\n// User input that could contain malicious code\n$userInput = '<script>alert(\"XSS Attack!\");</script>Hello, World!';\n\n// Unsafe way (vulnerable to XSS)\necho 'Unsafe: ' . $userInput . '<br>';\n\n// Safe way using htmlspecialchars\necho 'Safe: ' . htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');\n?>",
      explanation: "htmlspecialchars() converts special characters to HTML entities, preventing malicious scripts from being executed in the browser. This is a key defense against XSS attacks."
    }
  ],
  javascript: [
    {
      id: 1,
      title: "Hello World",
      difficulty: "Beginner",
      category: "Basics",
      description: "Write your first JavaScript program",
      initialCode: "console.log('Hello, World!');",
      solution: "console.log('Hello, World!');",
      explanation: "console.log() is used to output messages to the browser console."
    },
    {
      id: 2,
      title: "Variable Declaration",
      difficulty: "Beginner",
      category: "Variables",
      description: "Create and display a variable",
      initialCode: "let name = 'John';\nconsole.log('Hello, ' + name + '!');",
      solution: "let name = 'John';\nconsole.log('Hello, ' + name + '!');",
      explanation: "Variables in JavaScript can be declared using let, const, or var keywords."
    },
    {
      id: 3,
      title: "Array Operations",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Create an array and display the sum of its elements",
      initialCode: "const numbers = [1, 2, 3, 4, 5];\n// Your code here",
      solution: "const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log('Sum:', sum);",
      explanation: "The reduce() method executes a reducer function on each element of the array, resulting in a single output value."
    },
    {
      id: 4,
      title: "Function Creation",
      difficulty: "Intermediate",
      category: "Functions",
      description: "Create a function that calculates the area of a rectangle",
      initialCode: "// Create a function called calculateArea\n// It should accept width and height parameters\n// Return the area (width * height)",
      solution: "function calculateArea(width, height) {\n    return width * height;\n}\n\nconst area = calculateArea(5, 3);\nconsole.log('Area:', area);",
      explanation: "Functions in JavaScript can be declared using the 'function' keyword or as arrow functions."
    },
    {
      id: 5,
      title: "If-Else Statement",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Check if a number is positive or negative",
      initialCode: "const number = -5;\n// Write an if-else statement to check if the number is positive or negative",
      solution: "const number = -5;\nif (number > 0) {\n    console.log('The number is positive');\n} else {\n    console.log('The number is negative');\n}",
      explanation: "If-else statements allow you to execute different code blocks based on a condition."
    },
    {
      id: 6,
      title: "For Loop",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Print numbers from 1 to 10 using a for loop",
      initialCode: "// Write a for loop to print numbers from 1 to 10",
      solution: "for (let i = 1; i <= 10; i++) {\n    console.log(i);\n}",
      explanation: "For loops are used when you know how many times you want to execute a statement or a block of statements."
    },
    {
      id: 7,
      title: "String Concatenation",
      difficulty: "Beginner",
      category: "Strings",
      description: "Combine first name and last name to display full name",
      initialCode: "const firstName = 'John';\nconst lastName = 'Doe';\n// Combine the variables to display the full name",
      solution: "const firstName = 'John';\nconst lastName = 'Doe';\nconst fullName = firstName + ' ' + lastName;\nconsole.log(fullName);\n\n// Alternative using template literals\n// const fullName = `${firstName} ${lastName}`;\n// console.log(fullName);",
      explanation: "You can concatenate strings using the + operator or template literals (backticks) with ${} expressions."
    },
    {
      id: 8,
      title: "String Length",
      difficulty: "Beginner",
      category: "Strings",
      description: "Find and display the length of a string",
      initialCode: "const text = 'Hello, World!';\n// Find and display the length of the string",
      solution: "const text = 'Hello, World!';\nconst length = text.length;\nconsole.log('String length:', length);",
      explanation: "The length property returns the number of characters in a string."
    },
    {
      id: 9,
      title: "Array Push",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Add elements to an array using push()",
      initialCode: "const fruits = ['Apple', 'Banana'];\n// Add 'Orange' and 'Grape' to the array",
      solution: "const fruits = ['Apple', 'Banana'];\nfruits.push('Orange', 'Grape');\nconsole.log(fruits);",
      explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
      id: 10,
      title: "Object Creation",
      difficulty: "Intermediate",
      category: "Objects",
      description: "Create an object with properties and access a value",
      initialCode: "// Create an object with person information\n// Access and display the age",
      solution: "const person = {\n    name: 'John',\n    age: 30,\n    city: 'New York'\n};\nconsole.log('Age:', person.age);\n\n// Alternative using bracket notation\n// console.log('Age:', person['age']);",
      explanation: "Objects in JavaScript are collections of key-value pairs. You can access properties using dot notation or bracket notation."
    },
    {
      id: 11,
      title: "For-Of Loop",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Iterate through an array and print each element",
      initialCode: "const colors = ['Red', 'Green', 'Blue'];\n// Use for-of to print each color",
      solution: "const colors = ['Red', 'Green', 'Blue'];\nfor (const color of colors) {\n    console.log(color);\n}",
      explanation: "The for...of statement creates a loop iterating over iterable objects, including arrays."
    },
    {
      id: 12,
      title: "Arrow Function",
      difficulty: "Intermediate",
      category: "Functions",
      description: "Create an arrow function with default parameters",
      initialCode: "// Create an arrow function greet that takes a name parameter\n// with 'Guest' as the default value",
      solution: "const greet = (name = 'Guest') => {\n    return `Hello, ${name}!`;\n};\n\nconsole.log(greet()); // Uses default value\nconsole.log(greet('John')); // Uses provided value",
      explanation: "Arrow functions provide a concise syntax for writing function expressions. They also have lexical 'this' binding."
    },
    {
      id: 13,
      title: "Array Map",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Use map() to create a new array with modified elements",
      initialCode: "const numbers = [1, 2, 3, 4, 5];\n// Use map to create a new array with each number doubled",
      solution: "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);",
      explanation: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."
    },
    {
      id: 14,
      title: "Array Filter",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Use filter() to create a new array with elements that meet a condition",
      initialCode: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n// Use filter to create a new array with only even numbers",
      solution: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);\nconsole.log(evenNumbers);",
      explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function."
    },
    {
      id: 15,
      title: "Array Find",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Use find() to get the first element that meets a condition",
      initialCode: "const users = [\n    { id: 1, name: 'John' },\n    { id: 2, name: 'Jane' },\n    { id: 3, name: 'Bob' }\n];\n// Use find to get the user with id 2",
      solution: "const users = [\n    { id: 1, name: 'John' },\n    { id: 2, name: 'Jane' },\n    { id: 3, name: 'Bob' }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);",
      explanation: "The find() method returns the first element in an array that satisfies a provided testing function. If no values satisfy the testing function, undefined is returned."
    },
    {
      id: 16,
      title: "DOM Manipulation",
      difficulty: "Intermediate",
      category: "DOM",
      description: "Change the text content of an HTML element",
      initialCode: "// Assuming there's an element with id 'demo'\n// Change its text content to 'Hello, JavaScript!'",
      solution: "// Assuming there's an element with id 'demo'\nconst element = document.getElementById('demo');\nif (element) {\n    element.textContent = 'Hello, JavaScript!';\n}",
      explanation: "The document.getElementById() method returns the element with the specified ID. The textContent property sets or returns the text content of the specified node."
    },
    {
      id: 17,
      title: "Event Handling",
      difficulty: "Intermediate",
      category: "DOM",
      description: "Add a click event listener to a button",
      initialCode: "// Assuming there's a button with id 'myButton'\n// Add a click event listener that shows an alert",
      solution: "// Assuming there's a button with id 'myButton'\nconst button = document.getElementById('myButton');\nif (button) {\n    button.addEventListener('click', function() {\n        alert('Button clicked!');\n    });\n}",
      explanation: "The addEventListener() method attaches an event handler to the specified element."
    },
    {
      id: 18,
      title: "Form Validation",
      difficulty: "Intermediate",
      category: "Forms",
      description: "Validate an email input field",
      initialCode: "// Assuming there's an input field with id 'email'\n// Validate that it contains a valid email format",
      solution: "// Assuming there's an input field with id 'email'\nconst emailInput = document.getElementById('email');\nif (emailInput) {\n    const email = emailInput.value;\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    \n    if (emailRegex.test(email)) {\n        console.log('Valid email');\n    } else {\n        console.log('Invalid email');\n    }\n}",
      explanation: "Regular expressions can be used to validate input formats. The test() method executes a search for a match between a regular expression and a specified string."
    },
    {
      id: 19,
      title: "Local Storage",
      difficulty: "Intermediate",
      category: "Storage",
      description: "Store and retrieve data from localStorage",
      initialCode: "// Store a user's name in localStorage\n// Retrieve and display it",
      solution: "// Store a user's name in localStorage\nlocalStorage.setItem('username', 'John');\n\n// Retrieve and display it\nconst username = localStorage.getItem('username');\nconsole.log('Username:', username);",
      explanation: "localStorage allows you to save key/value pairs in a web browser. The data persists even when the browser is closed."
    },
    {
      id: 20,
      title: "Session Storage",
      difficulty: "Intermediate",
      category: "Storage",
      description: "Store and retrieve data from sessionStorage",
      initialCode: "// Store a user's name in sessionStorage\n// Retrieve and display it",
      solution: "// Store a user's name in sessionStorage\nsessionStorage.setItem('username', 'John');\n\n// Retrieve and display it\nconst username = sessionStorage.getItem('username');\nconsole.log('Username:', username);",
      explanation: "sessionStorage is similar to localStorage, but the data is cleared when the page session ends (when the browser tab is closed)."
    },
    {
      id: 21,
      title: "Date and Time",
      difficulty: "Beginner",
      category: "Date/Time",
      description: "Display the current date and time",
      initialCode: "// Display the current date and time",
      solution: "const now = new Date();\nconsole.log('Current date and time:', now.toString());\n\n// For a more formatted output:\n// console.log('Formatted date:', now.toLocaleDateString() + ' ' + now.toLocaleTimeString());",
      explanation: "The Date object is used to work with dates and times. The toString() method converts a Date object to a string."
    },
    {
      id: 22,
      title: "Math Operations",
      difficulty: "Beginner",
      category: "Math",
      description: "Calculate the area of a circle",
      initialCode: "const radius = 5;\n// Calculate the area of the circle (π * r^2)",
      solution: "const radius = 5;\nconst area = Math.PI * Math.pow(radius, 2);\nconsole.log('Area of the circle:', area);",
      explanation: "Math.PI represents the ratio of the circumference of a circle to its diameter. Math.pow() returns the base to the exponent power."
    },
    {
      id: 23,
      title: "Random Number",
      difficulty: "Beginner",
      category: "Math",
      description: "Generate a random number between 1 and 100",
      initialCode: "// Generate a random number between 1 and 100",
      solution: "const randomNumber = Math.floor(Math.random() * 100) + 1;\nconsole.log('Random number:', randomNumber);",
      explanation: "Math.random() returns a random number between 0 (inclusive) and 1 (exclusive). Math.floor() rounds down to the nearest integer."
    },
    {
      id: 24,
      title: "String to Upper Case",
      difficulty: "Beginner",
      category: "Strings",
      description: "Convert a string to uppercase",
      initialCode: "const text = 'hello world';\n// Convert the string to uppercase",
      solution: "const text = 'hello world';\nconsole.log(text.toUpperCase());",
      explanation: "The toUpperCase() method returns the calling string value converted to uppercase."
    },
    {
      id: 25,
      title: "String Replace",
      difficulty: "Intermediate",
      category: "Strings",
      description: "Replace a word in a string",
      initialCode: "const text = 'The quick brown fox jumps over the lazy dog.';\n// Replace 'fox' with 'cat'",
      solution: "const text = 'The quick brown fox jumps over the lazy dog.';\nconst newText = text.replace('fox', 'cat');\nconsole.log(newText);",
      explanation: "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement."
    },
    {
      id: 26,
      title: "Substring",
      difficulty: "Intermediate",
      category: "Strings",
      description: "Extract a part of a string",
      initialCode: "const text = 'Hello, World!';\n// Extract 'World' from the string",
      solution: "const text = 'Hello, World!';\nconst substring = text.substring(7, 12);\nconsole.log(substring);",
      explanation: "The substring() method returns the part of the string between the start and end indexes, or to the end of the string."
    },
    {
      id: 27,
      title: "Array Sort",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Sort an array in ascending order",
      initialCode: "const numbers = [5, 2, 8, 1, 9];\n// Sort the array in ascending order",
      solution: "const numbers = [5, 2, 8, 1, 9];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);",
      explanation: "The sort() method sorts the elements of an array in place and returns the sorted array. The compare function is needed for numeric sorting."
    },
    {
      id: 28,
      title: "Array Includes",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Check if an array contains a specific value",
      initialCode: "const colors = ['Red', 'Green', 'Blue', 'Yellow'];\n// Check if 'Blue' exists in the array",
      solution: "const colors = ['Red', 'Green', 'Blue', 'Yellow'];\nconst hasBlue = colors.includes('Blue');\nconsole.log('Array contains Blue:', hasBlue);",
      explanation: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate."
    },
    {
      id: 29,
      title: "Array Join",
      difficulty: "Intermediate",
      category: "Arrays",
      description: "Join array elements into a string",
      initialCode: "const words = ['Hello', 'World', 'JavaScript'];\n// Join the array elements into a string separated by spaces",
      solution: "const words = ['Hello', 'World', 'JavaScript'];\nconst sentence = words.join(' ');\nconsole.log(sentence);",
      explanation: "The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string."
    },
    {
      id: 30,
      title: "While Loop",
      difficulty: "Beginner",
      category: "Control Structures",
      description: "Print numbers from 1 to 5 using a while loop",
      initialCode: "// Use a while loop to print numbers from 1 to 5",
      solution: "let i = 1;\nwhile (i <= 5) {\n    console.log(i);\n    i++;\n}",
      explanation: "The while loop executes a block of code as long as the specified condition is true."
    },
    {
      id: 31,
      title: "Switch Statement",
      difficulty: "Intermediate",
      category: "Control Structures",
      description: "Use a switch statement to display a message based on a grade",
      initialCode: "const grade = 'B';\n// Use a switch statement to display a message based on the grade",
      solution: "const grade = 'B';\nswitch (grade) {\n    case 'A':\n        console.log('Excellent!');\n        break;\n    case 'B':\n        console.log('Good job!');\n        break;\n    case 'C':\n        console.log('You passed!');\n        break;\n    default:\n        console.log('Invalid grade');\n}",
      explanation: "The switch statement is used to perform different actions based on different conditions."
    },
    {
      id: 32,
      title: "Ternary Operator",
      difficulty: "Intermediate",
      category: "Control Structures",
      description: "Use the ternary operator to check if a number is even or odd",
      initialCode: "const number = 10;\n// Use the ternary operator to check if the number is even or odd",
      solution: "const number = 10;\nconst result = (number % 2 === 0) ? 'Even' : 'Odd';\nconsole.log('The number is', result);",
      explanation: "The ternary operator is a shorthand for if-else statements: condition ? value_if_true : value_if_false"
    },
    {
      id: 33,
      title: "Class Definition",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a simple class with properties and methods",
      initialCode: "// Create a class named Car with properties and methods",
      solution: "class Car {\n    constructor(color, model) {\n        this.color = color;\n        this.model = model;\n    }\n    \n    displayInfo() {\n        return `This is a ${this.color} ${this.model}`;\n    }\n}\n\nconst myCar = new Car('red', 'Toyota');\nconsole.log(myCar.displayInfo());",
      explanation: "Classes are a template for creating objects. They encapsulate data with code to work on that data."
    },
    {
      id: 34,
      title: "Inheritance",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a child class that inherits from a parent class",
      initialCode: "// Create a parent class Animal and a child class Dog",
      solution: "class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    eat() {\n        return `${this.name} is eating.`;\n    }\n}\n\nclass Dog extends Animal {\n    bark() {\n        return `${this.name} is barking.`;\n    }\n}\n\nconst dog = new Dog('Buddy');\nconsole.log(dog.eat());\nconsole.log(dog.bark());",
      explanation: "The extends keyword is used in class declarations to create a class that is a child of another class."
    },
    {
      id: 35,
      title: "Static Methods",
      difficulty: "Advanced",
      category: "OOP",
      description: "Create a class with static methods",
      initialCode: "// Create a class with static methods",
      solution: "class MathHelper {\n    static circleArea(radius) {\n        return Math.PI * radius * radius;\n    }\n    \n    static rectangleArea(width, height) {\n        return width * height;\n    }\n}\n\nconsole.log('Area of circle with radius 5:', MathHelper.circleArea(5));\nconsole.log('Area of rectangle 5x3:', MathHelper.rectangleArea(5, 3));",
      explanation: "Static methods are called on the class itself, not on instances of the class. They are often utility functions."
    },
    {
      id: 36,
      title: "Promise",
      difficulty: "Advanced",
      category: "Asynchronous",
      description: "Create and use a Promise",
      initialCode: "// Create a Promise that resolves after 2 seconds",
      solution: "const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve('Promise resolved after 2 seconds!');\n    }, 2000);\n});\n\nmyPromise.then(message => {\n    console.log(message);\n}).catch(error => {\n    console.error(error);\n});",
      explanation: "A Promise is an object representing the eventual completion or failure of an asynchronous operation."
    },
    {
      id: 37,
      title: "Async/Await",
      difficulty: "Advanced",
      category: "Asynchronous",
      description: "Use async/await to handle a Promise",
      initialCode: "// Use async/await to handle a Promise that resolves after 2 seconds",
      solution: "function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function fetchData() {\n    console.log('Start fetching data...');\n    await delay(2000);\n    console.log('Data fetched successfully!');\n    return 'Some data';\n}\n\nfetchData().then(data => {\n    console.log('Received:', data);\n});",
      explanation: "The async function declaration creates an asynchronous function that returns a Promise. The await operator is used to wait for a Promise."
    },
    {
      id: 38,
      title: "Fetch API",
      difficulty: "Advanced",
      category: "API",
      description: "Fetch data from an API",
      initialCode: "// Fetch user data from an API",
      solution: "fetch('https://jsonplaceholder.typicode.com/users/1')\n    .then(response => {\n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        return response.json();\n    })\n    .then(data => {\n        console.log('User data:', data);\n        console.log('Name:', data.name);\n        console.log('Email:', data.email);\n    })\n    .catch(error => {\n        console.error('Fetch error:', error);\n    });",
      explanation: "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses."
    },
    {
      id: 39,
      title: "Fetch with Async/Await",
      difficulty: "Advanced",
      category: "API",
      description: "Fetch data from an API using async/await",
      initialCode: "// Fetch user data from an API using async/await",
      solution: "async function fetchUserData(userId) {\n    try {\n        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);\n        \n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        \n        const data = await response.json();\n        console.log('User data:', data);\n        console.log('Name:', data.name);\n        console.log('Email:', data.email);\n        \n        return data;\n    } catch (error) {\n        console.error('Fetch error:', error);\n    }\n}\n\nfetchUserData(1);",
      explanation: "Using async/await with fetch makes asynchronous code look more like synchronous code, improving readability."
    },
    {
      id: 40,
      title: "Destructuring",
      difficulty: "Intermediate",
      category: "ES6+",
      description: "Use object and array destructuring",
      initialCode: "// Use destructuring to extract values from an object and array",
      solution: "// Object destructuring\nconst person = {\n    name: 'John',\n    age: 30,\n    city: 'New York'\n};\n\nconst { name, age } = person;\nconsole.log('Name:', name);\nconsole.log('Age:', age);\n\n// Array destructuring\nconst colors = ['Red', 'Green', 'Blue'];\nconst [firstColor, secondColor] = colors;\nconsole.log('First color:', firstColor);\nconsole.log('Second color:', secondColor);",
      explanation: "Destructuring is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables."
    },
    {
      id: 41,
      title: "Spread Operator",
      difficulty: "Intermediate",
      category: "ES6+",
      description: "Use the spread operator with arrays and objects",
      initialCode: "// Use the spread operator to combine arrays and clone objects",
      solution: "// With arrays\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combinedArray = [...arr1, ...arr2];\nconsole.log('Combined array:', combinedArray);\n\n// With objects\nconst originalObj = { a: 1, b: 2 };\nconst clonedObj = { ...originalObj };\nconst extendedObj = { ...originalObj, c: 3 };\n\nconsole.log('Cloned object:', clonedObj);\nconsole.log('Extended object:', extendedObj);",
      explanation: "The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
    },
    {
      id: 42,
      title: "Rest Parameters",
      difficulty: "Intermediate",
      category: "ES6+",
      description: "Use rest parameters in a function",
      initialCode: "// Create a function that uses rest parameters",
      solution: "function sum(...numbers) {\n    return numbers.reduce((total, num) => total + num, 0);\n}\n\nconsole.log('Sum of 1, 2, 3:', sum(1, 2, 3));\nconsole.log('Sum of 1, 2, 3, 4, 5:', sum(1, 2, 3, 4, 5));\n\nfunction displayInfo(name, age, ...hobbies) {\n    console.log(`Name: ${name}, Age: ${age}`);\n    console.log('Hobbies:', hobbies.join(', '));\n}\n\ndisplayInfo('John', 30, 'reading', 'swimming', 'coding');",
      explanation: "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array."
    },
    {
      id: 43,
      title: "Template Literals",
      difficulty: "Beginner",
      category: "ES6+",
      description: "Use template literals to create formatted strings",
      initialCode: "// Use template literals to create a formatted string",
      solution: "const name = 'John';\nconst age = 30;\nconst city = 'New York';\n\n// Using template literals\nconst message = `Hello, my name is ${name}.\nI am ${age} years old and I live in ${city}.`;\n\nconsole.log(message);\n\n// Template literals also support multi-line strings\nconst multiLine = `This is a\nmulti-line\nstring using\ntemplate literals.`;\n\nconsole.log(multiLine);",
      explanation: "Template literals are string literals allowing for embedded expressions. They are denoted by backticks (`) instead of single or double quotes."
    },
    {
      id: 44,
      title: "Set and Map",
      difficulty: "Intermediate",
      category: "ES6+",
      description: "Use Set and Map data structures",
      initialCode: "// Create and use Set and Map",
      solution: "// Set - collection of unique values\nconst uniqueNumbers = new Set([1, 2, 3, 3, 4, 5, 5]);\nconsole.log('Set of unique numbers:', uniqueNumbers);\n\nuniqueNumbers.add(6);\nconsole.log('Set after adding 6:', uniqueNumbers);\n\nconsole.log('Does set contain 3?', uniqueNumbers.has(3));\n\n// Map - collection of key-value pairs\nconst userRoles = new Map();\nuserRoles.set('admin', 'Full access');\nuserRoles.set('editor', 'Can edit content');\nuserRoles.set('viewer', 'Can only view');\n\nconsole.log('Map of user roles:', userRoles);\nconsole.log('Editor role:', userRoles.get('editor'));",
      explanation: "Set is a collection of unique values, while Map is a collection of key-value pairs where both keys and values can be of any type."
    },
    {
      id: 45,
      title: "JSON Handling",
      difficulty: "Advanced",
      category: "API",
      description: "Parse and stringify JSON data",
      initialCode: "// Parse and stringify JSON data",
      solution: "// Object to JSON\nconst user = {\n    id: 1,\n    name: 'John Doe',\n    email: 'john@example.com',\n    hobbies: ['reading', 'swimming', 'coding']\n};\n\n// Convert object to JSON string\nconst jsonString = JSON.stringify(user);\nconsole.log('JSON string:', jsonString);\n\n// Parse JSON string back to object\nconst parsedUser = JSON.parse(jsonString);\nconsole.log('Parsed object:', parsedUser);\nconsole.log('Name from parsed object:', parsedUser.name);",
      explanation: "JSON.stringify() converts a JavaScript object to a JSON string, while JSON.parse() parses a JSON string and returns a JavaScript object."
    },
    {
      id: 46,
      title: "Regular Expressions",
      difficulty: "Advanced",
      category: "Strings",
      description: "Use regular expressions to validate a phone number",
      initialCode: "// Validate a phone number using regular expressions",
      solution: "const phoneNumbers = [\n    '123-456-7890',\n    '(123) 456-7890',\n    '123.456.7890',\n    '1234567890',\n    '123 456 7890',\n    '12345678' // Invalid\n];\n\nconst phoneRegex = /^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/;\n\nphoneNumbers.forEach(phoneNumber => {\n    if (phoneRegex.test(phoneNumber)) {\n        console.log(`${phoneNumber} is a valid phone number`);\n    } else {\n        console.log(`${phoneNumber} is NOT a valid phone number`);\n    }\n});",
      explanation: "Regular expressions are patterns used to match character combinations in strings. The test() method executes a search for a match between a regular expression and a specified string."
    },
    {
      id: 47,
      title: "Higher-Order Functions",
      difficulty: "Advanced",
      category: "Functions",
      description: "Create and use a higher-order function",
      initialCode: "// Create a higher-order function that takes another function as an argument",
      solution: "// Higher-order function that takes a function as an argument\nfunction withLogging(fn) {\n    return function(...args) {\n        console.log(`Calling function with arguments: ${args.join(', ')}`);\n        const result = fn(...args);\n        console.log(`Function returned: ${result}`);\n        return result;\n    };\n}\n\n// Function to be wrapped\nfunction add(a, b) {\n    return a + b;\n}\n\n// Wrap the add function with logging\nconst addWithLogging = withLogging(add);\n\n// Call the wrapped function\nconst sum = addWithLogging(5, 3);",
      explanation: "A higher-order function is a function that takes another function as an argument, returns a function, or both."
    },
    {
      id: 48,
      title: "Closure",
      difficulty: "Advanced",
      category: "Functions",
      description: "Create and use a closure",
      initialCode: "// Create a closure that maintains private state",
      solution: "function createCounter() {\n    let count = 0;\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        decrement: function() {\n            count--;\n            return count;\n        },\n        getCount: function() {\n            return count;\n        }\n    };\n}\n\nconst counter = createCounter();\n\nconsole.log('Initial count:', counter.getCount());\nconsole.log('After increment:', counter.increment());\nconsole.log('After increment:', counter.increment());\nconsole.log('After decrement:', counter.decrement());\nconsole.log('Final count:', counter.getCount());",
      explanation: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)."
    },
    {
      id: 49,
      title: "Currying",
      difficulty: "Advanced",
      category: "Functions",
      description: "Create a curried function",
      initialCode: "// Create a curried function that adds three numbers",
      solution: "// Regular function\nfunction add(a, b, c) {\n    return a + b + c;\n}\n\n// Curried version\nfunction curriedAdd(a) {\n    return function(b) {\n        return function(c) {\n            return a + b + c;\n        };\n    };\n}\n\n// Arrow function version of curried add\nconst curriedAddArrow = a => b => c => a + b + c;\n\n// Using the curried function\nconsole.log('Regular function:', add(1, 2, 3));\nconsole.log('Curried function:', curriedAdd(1)(2)(3));\nconsole.log('Curried arrow function:', curriedAddArrow(1)(2)(3));\n\n// Partial application\nconst add5 = curriedAdd(5);\nconst add5And2 = add5(2);\nconsole.log('Partial application result:', add5And2(3));",
      explanation: "Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument."
    },
    {
      id: 50,
      title: "Debouncing",
      difficulty: "Advanced",
      category: "Functions",
      description: "Implement a debounce function",
      initialCode: "// Implement a debounce function that limits how often a function can be called",
      solution: "function debounce(func, delay) {\n    let timeoutId;\n    \n    return function(...args) {\n        clearTimeout(timeoutId);\n        \n        timeoutId = setTimeout(() => {\n            func.apply(this, args);\n        }, delay);\n    };\n}\n\n// Example usage with a search input\nfunction search(query) {\n    console.log(`Searching for: ${query}`);\n    // In a real application, this would make an API call\n}\n\nconst debouncedSearch = debounce(search, 500);\n\n// Simulate typing in a search box\ndebouncedSearch('a');\ndebouncedSearch('ap');\ndebouncedSearch('app');\ndebouncedSearch('apple');\n// Only the last call will actually execute the search function",
      explanation: "Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making the web page unresponsive. It's commonly used for search inputs, window resizing, and other events that fire frequently."
    }
  ]
};

export default function ChallengesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'php' | 'javascript'>('php')
  const [selectedChallenge, setSelectedChallenge] = useState(0)
  const [userCode, setUserCode] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null)
  const [completedChallenges, setCompletedChallenges] = useState<{ [key: string]: number[] }>({
    php: [],
    javascript: []
  })

  const currentChallenges = selectedLanguage === 'php' ? challenges.php : challenges.javascript
  const currentChallenge = currentChallenges[selectedChallenge]

  useEffect(() => {
    // Load completed challenges from localStorage
    const savedProgress = localStorage.getItem('challengeProgress')
    if (savedProgress) {
      try {
        setCompletedChallenges(JSON.parse(savedProgress))
      } catch (error) {
        console.error('Error loading progress from localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (currentChallenge) {
      setUserCode(currentChallenge.initialCode)
      setShowHint(false)
      setShowSolution(false)
      setTestResult(null)
    }
  }, [selectedChallenge, selectedLanguage])

  const handleLanguageChange = (language: 'php' | 'javascript') => {
    setSelectedLanguage(language)
    setSelectedChallenge(0)
  }

  const handleChallengeSelect = (index: number) => {
    setSelectedChallenge(index)
  }

  const runCode = async () => {
    setIsRunning(true)
    setTestResult(null)

    // Simulate code execution
    setTimeout(() => {
      try {
        // Simple validation to check if user wrote some code
        if (userCode.trim() === '') {
          setTestResult({ success: false, message: 'Please write some code before running.' })
        } else if (userCode.includes(currentChallenge.solution)) {
          setTestResult({ success: true, message: 'Perfect! Your solution is correct.' })
          // Save progress to localStorage
          if (!completedChallenges[selectedLanguage].includes(selectedChallenge)) {
            const updatedProgress = {
              ...completedChallenges,
              [selectedLanguage]: [...completedChallenges[selectedLanguage], selectedChallenge]
            }
            setCompletedChallenges(updatedProgress)
            localStorage.setItem('challengeProgress', JSON.stringify(updatedProgress))
          }
        } else {
          setTestResult({
            success: false,
            message: 'Not quite right. Try again or use the hint!'
          })
        }
      } catch (error) {
        setTestResult({ success: false, message: 'Error in your code. Check syntax.' })
      }
      setIsRunning(false)
    }, 1500)
  }

  const resetCode = () => {
    setUserCode(currentChallenge.initialCode)
    setShowHint(false)
    setShowSolution(false)
    setTestResult(null)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return <Star className="h-4 w-4" />
      case 'Intermediate': return <Zap className="h-4 w-4" />
      case 'Advanced': return <Target className="h-4 w-4" />
      default: return <Code className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">YHA Computer</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Home</Link>
              <Link href="/challenges" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Code Challenges</Link>
              <Link href="/quiz" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Quiz</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <Code className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Interactive Learning</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">Code Challenges</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Master programming fundamentals through hands-on coding challenges. Write, test, and debug your code with instant feedback.</p>
          </div>

          {/* Language Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              onClick={() => handleLanguageChange('php')}
              className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedLanguage === 'php'
                  ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl ring-4 ring-purple-200'
                  : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedLanguage === 'php'
                      ? 'bg-white/20'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                  }`}>
                    <Code className={`h-6 w-6 ${
                      selectedLanguage === 'php' ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      selectedLanguage === 'php' ? 'text-white' : 'text-gray-900'
                    }`}>PHP</h3>
                    <p className={`text-sm ${
                      selectedLanguage === 'php' ? 'text-purple-100' : 'text-gray-600'
                    }`}>Server-Side Programming</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  selectedLanguage === 'php' ? 'text-purple-50' : 'text-gray-700'
                }`}>
                  Challenge yourself with PHP fundamentals, object-oriented programming, and web development concepts.
                </p>
                {selectedLanguage === 'php' && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50"></div>
            </div>

            <div
              onClick={() => handleLanguageChange('javascript')}
              className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedLanguage === 'javascript'
                  ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-2xl ring-4 ring-orange-200'
                  : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedLanguage === 'javascript'
                      ? 'bg-white/20'
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  }`}>
                    <Code className={`h-6 w-6 ${
                      selectedLanguage === 'javascript' ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      selectedLanguage === 'javascript' ? 'text-white' : 'text-gray-900'
                    }`}>JavaScript</h3>
                    <p className={`text-sm ${
                      selectedLanguage === 'javascript' ? 'text-orange-100' : 'text-gray-600'
                    }`}>Modern Web Development</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  selectedLanguage === 'javascript' ? 'text-orange-50' : 'text-gray-700'
                }`}>
                  Test your knowledge of ES6+, DOM manipulation, asynchronous programming, and modern JavaScript concepts.
                </p>
                {selectedLanguage === 'javascript' && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Challenge Selection */}
            <div className="lg:col-span-1">
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {currentChallenges.map((challenge, index) => {
                      const isCompleted = completedChallenges[selectedLanguage].includes(index)
                      return (
                        <div
                          key={challenge.id}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                            selectedChallenge === index
                              ? 'border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg ring-2 ring-orange-200'
                              : isCompleted
                              ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg'
                              : 'border-gray-200 bg-white/60 hover:bg-white/90 hover:border-gray-300 hover:shadow-lg'
                          }`}
                          onClick={() => handleChallengeSelect(index)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className={`font-semibold ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>{challenge.title}</h4>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                                  {getDifficultyIcon(challenge.difficulty)}
                                  <span className="ml-1">{challenge.difficulty}</span>
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {challenge.category}
                                </Badge>
                                {isCompleted && (
                                  <Badge className="text-xs bg-green-100 text-green-800">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Completed
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Center - Code Editor */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{currentChallenge?.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={`text-sm ${getDifficultyColor(currentChallenge?.difficulty || '')}`}>
                          {currentChallenge?.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {currentChallenge?.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowHint(!showHint)}
                        className="border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        <Lightbulb className="h-4 w-4 mr-1" />
                        Hint
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSolution(!showSolution)}
                        className="border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        <BookOpen className="h-4 w-4 mr-1" />
                        Solution
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-gray-600 mb-4">{currentChallenge?.description}</p>

                    {showHint && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-blue-600" />
                          <h4 className="font-medium text-blue-800">Hint</h4>
                        </div>
                        <p className="text-blue-700 text-sm">
                          {currentChallenge?.explanation}
                        </p>
                      </div>
                    )}

                    {showSolution && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <h4 className="font-medium text-green-800">Solution</h4>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                          <code>{currentChallenge?.solution}</code>
                        </pre>
                      </div>
                    )}

                    {testResult && (
                      <div className={`rounded-lg p-4 mb-4 border ${
                        testResult.success
                          ? 'bg-green-50 border-green-200'
                          : 'bg-red-50 border-red-200'
                      }`}>
                        <div className="flex items-center gap-2">
                          {testResult.success ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          )}
                          <h4 className={`font-medium ${
                            testResult.success ? 'text-green-800' : 'text-red-800'
                          }`}>
                            {testResult.success ? 'Success!' : 'Try Again'}
                          </h4>
                        </div>
                        <p className={`text-sm ${
                          testResult.success ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {testResult.message}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Textarea
                      value={userCode}
                      onChange={(e) => setUserCode(e.target.value)}
                      className="w-full h-64 font-mono text-sm bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Write your code here..."
                      spellCheck={false}
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2">
                      <Button
                        onClick={resetCode}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Reset
                      </Button>
                      <Button
                        onClick={runCode}
                        disabled={isRunning}
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        {isRunning ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Running...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Run Code
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Press Ctrl+Enter to run</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        {/* Progress Overview */}
        <div className="mt-8">
          <Card className="border-black">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-500" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">
                    {completedChallenges[selectedLanguage].length}
                  </div>
                  <div className="text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">
                    {selectedChallenge !== null && !completedChallenges[selectedLanguage].includes(selectedChallenge) ? 1 : 0}
                  </div>
                  <div className="text-gray-600">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-500">
                    {currentChallenges.length - completedChallenges[selectedLanguage].length - (selectedChallenge !== null && !completedChallenges[selectedLanguage].includes(selectedChallenge) ? 1 : 0)}
                  </div>
                  <div className="text-gray-600">Remaining</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">Y</span>
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">YHA Computer</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Interactive coding challenge platform for students to master PHP and JavaScript through hands-on learning experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/challenges" className="text-orange-400 font-medium">Code Challenges</Link></li>
                <li><Link href="/quiz" className="text-gray-300 hover:text-orange-400 transition-colors">Quiz</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Languages</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">PHP Challenges</li>
                <li className="text-gray-300">JavaScript Challenges</li>
                <li className="text-gray-300">Interactive Learning</li>
                <li className="text-gray-300">Progress Tracking</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 YHA Computer. All rights reserved. | Empowering the next generation of developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}