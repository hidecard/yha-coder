'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import {
  Code,
  Play,
  CheckCircle,
  AlertCircle,
  Trophy,
  ChevronRight,
  RotateCcw,
  BookOpen,
  Zap,
  Target,
  Clock,
  Star,
  Lightbulb
} from 'lucide-react'

const quizData = {
  javascript: [
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript?",
      options: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "v myVar = 10;",
        "declare myVar = 10;"
      ],
      correctAnswer: 0,
      explanation: "In JavaScript, variables can be declared using var, let, or const keywords."
    },
    {
      id: 2,
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        "string",
        "boolean",
        "integer",
        "undefined"
      ],
      correctAnswer: 2,
      explanation: "JavaScript has dynamic typing. The main data types are string, number, boolean, undefined, null, object, and symbol."
    },
    {
      id: 3,
      question: "What does the '===' operator do in JavaScript?",
      options: [
        "Assigns a value",
        "Compares values and types",
        "Compares only values",
        "Creates a new variable"
      ],
      correctAnswer: 1,
      explanation: "The strict equality operator (===) compares both value and type, while == only compares values."
    },
    {
      id: 4,
      question: "Which method adds an element to the end of an array?",
      options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: 0,
      explanation: "push() adds one or more elements to the end of an array and returns the new length."
    },
    {
      id: 5,
      question: "What is a closure in JavaScript?",
      options: [
        "A way to close a function",
        "A function that has access to variables in its outer scope",
        "A method to close browser windows",
        "A type of loop"
      ],
      correctAnswer: 1,
      explanation: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned."
    },
    {
      id: 6,
      question: "What is the difference between let and const?",
      options: [
        "let can be reassigned, const cannot",
        "const can be reassigned, let cannot",
        "Both can be reassigned",
        "Neither can be reassigned"
      ],
      correctAnswer: 0,
      explanation: "Variables declared with let can be reassigned, while variables declared with const cannot be reassigned after initialization."
    },
    {
      id: 7,
      question: "Which method removes the last element from an array?",
      options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: 1,
      explanation: "pop() removes the last element from an array and returns that element."
    },
    {
      id: 8,
      question: "What does the DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Management",
        "Dynamic Object Model",
        "Document Order Model"
      ],
      correctAnswer: 0,
      explanation: "DOM stands for Document Object Model, which represents the structure of HTML documents."
    },
    {
      id: 9,
      question: "Which of the following is a JavaScript framework?",
      options: [
        "Django",
        "Laravel",
        "React",
        "Flask"
      ],
      correctAnswer: 2,
      explanation: "React is a JavaScript library for building user interfaces. Django and Laravel are PHP frameworks, and Flask is a Python framework."
    },
    {
      id: 10,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = ['red', 'green', 'blue']",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
      ],
      correctAnswer: 1,
      explanation: "JavaScript arrays are written with square brackets and items separated by commas."
    },
    {
      id: 11,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: [
        "onchange",
        "onclick",
        "onmouseover",
        "onmouseclick"
      ],
      correctAnswer: 1,
      explanation: "The onclick event occurs when the user clicks on an HTML element."
    },
    {
      id: 12,
      question: "How do you create a function in JavaScript?",
      options: [
        "function = myFunction() {}",
        "function myFunction() {}",
        "function:myFunction() {}",
        "create myFunction() {}"
      ],
      correctAnswer: 1,
      explanation: "Functions in JavaScript are defined using the function keyword followed by the function name and parentheses."
    },
    {
      id: 13,
      question: "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "execute myFunction()"
      ],
      correctAnswer: 2,
      explanation: "Functions are called by using the function name followed by parentheses."
    },
    {
      id: 14,
      question: "How do you write a conditional statement in JavaScript?",
      options: [
        "if i == 5 then",
        "if i = 5 then",
        "if (i == 5)",
        "if i = 5"
      ],
      correctAnswer: 2,
      explanation: "Conditional statements in JavaScript use the if keyword followed by a condition in parentheses."
    },
    {
      id: 15,
      question: "How do you start a for loop in JavaScript?",
      options: [
        "for i = 1 to 5",
        "for (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
        "for (i = 0; i <= 5)"
      ],
      correctAnswer: 1,
      explanation: "A for loop in JavaScript is written with for followed by initialization, condition, and increment in parentheses."
    },
    {
      id: 16,
      question: "How can you add a comment in JavaScript?",
      options: [
        "'This is a comment",
        "// This is a comment",
        "<!-- This is a comment -->",
        "# This is a comment"
      ],
      correctAnswer: 1,
      explanation: "Single-line comments in JavaScript start with //."
    },
    {
      id: 17,
      question: "What is the correct way to write a JavaScript object?",
      options: [
        "var person = {firstName:'John', lastName:'Doe'};",
        "var person = (firstName:'John', lastName:'Doe');",
        "var person = {firstName = 'John', lastName = 'Doe'};",
        "var person = [firstName:'John', lastName:'Doe'];"
      ],
      correctAnswer: 0,
      explanation: "JavaScript objects are written with curly braces, with properties and values separated by colons."
    },
    {
      id: 18,
      question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
      options: [
        "document.getElement('p').innerHTML = 'Hello World!';",
        "document.getElementById('demo').innerHTML = 'Hello World!';",
        "#demo.innerHTML = 'Hello World!';",
        "document.getElementByName('p').innerHTML = 'Hello World!';"
      ],
      correctAnswer: 1,
      explanation: "The getElementById() method returns the element with the specified ID."
    },
    {
      id: 19,
      question: "What is the correct JavaScript syntax to open a new window called 'w2'?",
      options: [
        "w2 = window.new('http://www.example.com');",
        "w2 = window.open('http://www.example.com');",
        "w2 = window.open.new('http://www.example.com');",
        "w2 = new.window('http://www.example.com');"
      ],
      correctAnswer: 1,
      explanation: "The window.open() method opens a new browser window."
    },
    {
      id: 20,
      question: "How do you find the number with the highest value of x and y?",
      options: [
        "Math.ceil(x, y)",
        "Math.max(x, y)",
        "Math.highest(x, y)",
        "top(x, y)"
      ],
      correctAnswer: 1,
      explanation: "Math.max() returns the highest value in a list of arguments."
    },
    {
      id: 21,
      question: "What is the correct JavaScript syntax for adding a background color?",
      options: [
        "document.body.style.backgroundColor = 'red';",
        "document.body.bgColor = 'red';",
        "document.body.style.bgColor = 'red';",
        "body.style.backgroundColor = 'red';"
      ],
      correctAnswer: 0,
      explanation: "The backgroundColor property sets or returns the background color of an element."
    },
    {
      id: 22,
      question: "Which of the following is not a reserved word in JavaScript?",
      options: [
        "interface",
        "throws",
        "program",
        "short"
      ],
      correctAnswer: 2,
      explanation: "program is not a reserved word in JavaScript, while interface, throws, and short are reserved."
    },
    {
      id: 23,
      question: "What is the correct JavaScript syntax for inserting a comment that has more than one line?",
      options: [
        "//This comment has more than one line//",
        "/*This comment has more than one line*/",
        "<!--This comment has more than one line-->",
        "###This comment has more than one line###"
      ],
      correctAnswer: 1,
      explanation: "Multi-line comments in JavaScript start with /* and end with */."
    },
    {
      id: 24,
      question: "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
        "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "var colors = 'red', 'green', 'blue'"
      ],
      correctAnswer: 1,
      explanation: "JavaScript arrays are written with square brackets and items separated by commas."
    },
    {
      id: 25,
      question: "Which property is used to change the background color in JavaScript?",
      options: [
        "bgColor",
        "background-color",
        "backgroundColor",
        "color"
      ],
      correctAnswer: 2,
      explanation: "The backgroundColor property is used to change the background color of an element."
    },
    {
      id: 26,
      question: "What is the correct way to check if a variable is an array in JavaScript?",
      options: [
        "typeof variable === 'array'",
        "variable instanceof Array",
        "Array.isArray(variable)",
        "Both B and C"
      ],
      correctAnswer: 3,
      explanation: "Both variable instanceof Array and Array.isArray(variable) can be used to check if a variable is an array."
    },
    {
      id: 27,
      question: "Which method removes the first element from an array?",
      options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: 2,
      explanation: "shift() removes the first element from an array and returns that element."
    },
    {
      id: 28,
      question: "What is the result of typeof null in JavaScript?",
      options: [
        "'null'",
        "'undefined'",
        "'object'",
        "'number'"
      ],
      correctAnswer: 2,
      explanation: "In JavaScript, typeof null returns 'object', which is considered a bug in the language."
    },
    {
      id: 29,
      question: "Which method joins all elements of an array into a string?",
      options: [
        "join()",
        "concat()",
        "slice()",
        "splice()"
      ],
      correctAnswer: 0,
      explanation: "The join() method joins all elements of an array into a string."
    },
    {
      id: 30,
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "It always refers to the window object",
        "It refers to the object that the function is a property of",
        "It refers to the function itself",
        "It refers to the global object"
      ],
      correctAnswer: 1,
      explanation: "The 'this' keyword refers to the object that the function is a property of, but its value depends on how the function is called."
    },
    {
      id: 31,
      question: "Which of the following is not a JavaScript loop?",
      options: [
        "for",
        "while",
        "do-while",
        "foreach"
      ],
      correctAnswer: 3,
      explanation: "foreach is not a JavaScript loop. JavaScript has for, while, and do-while loops."
    },
    {
      id: 32,
      question: "What is the correct way to write an arrow function in JavaScript?",
      options: [
        "=> () {}",
        "() => {}",
        "() -> {}",
        "function => () {}"
      ],
      correctAnswer: 1,
      explanation: "Arrow functions are written with parentheses for parameters, followed by => and curly braces for the function body."
    },
    {
      id: 33,
      question: "Which method adds one or more elements to the beginning of an array?",
      options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      correctAnswer: 3,
      explanation: "unshift() adds one or more elements to the beginning of an array and returns the new length."
    },
    {
      id: 34,
      question: "What is the correct way to create a promise in JavaScript?",
      options: [
        "new Promise()",
        "Promise.create()",
        "create Promise()",
        "Promise.new()"
      ],
      correctAnswer: 0,
      explanation: "Promises are created using the Promise constructor with the new keyword."
    },
    {
      id: 35,
      question: "Which of the following is a valid JavaScript variable name?",
      options: [
        "2myVar",
        "my-var",
        "my_var",
        "var"
      ],
      correctAnswer: 2,
      explanation: "Variable names in JavaScript can contain letters, digits, underscores, and dollar signs, but must not start with a digit. 'var' is a reserved keyword."
    },
    {
      id: 36,
      question: "What is the correct way to write a JavaScript template literal?",
      options: [
        "`Hello, ${name}!`",
        "'Hello, ${name}!'",
        "\"Hello, ${name}!\"",
        "Hello, ${name}!"
      ],
      correctAnswer: 0,
      explanation: "Template literals are enclosed by backticks (`) and can contain placeholders with ${expression}."
    },
    {
      id: 37,
      question: "Which method is used to convert a JSON string into a JavaScript object?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.toObject()"
      ],
      correctAnswer: 0,
      explanation: "JSON.parse() converts a JSON string into a JavaScript object."
    },
    {
      id: 38,
      question: "What is the result of 3 + '3' in JavaScript?",
      options: [
        "6",
        "'33'",
        "Error",
        "NaN"
      ],
      correctAnswer: 1,
      explanation: "When a number is added to a string in JavaScript, the number is converted to a string and concatenated."
    },
    {
      id: 39,
      question: "Which of the following is not a JavaScript data structure?",
      options: [
        "Map",
        "Set",
        "List",
        "WeakMap"
      ],
      correctAnswer: 2,
      explanation: "List is not a built-in JavaScript data structure. JavaScript has Map, Set, and WeakMap."
    },
    {
      id: 40,
      question: "What is the correct way to write a JavaScript class?",
      options: [
        "class MyClass {}",
        "function MyClass() {}",
        "object MyClass {}",
        "type MyClass {}"
      ],
      correctAnswer: 0,
      explanation: "Classes in JavaScript are defined using the class keyword."
    },
    {
      id: 41,
      question: "Which method is used to remove elements from an array and optionally replace them?",
      options: [
        "slice()",
        "splice()",
        "split()",
        "shift()"
      ],
      correctAnswer: 1,
      explanation: "splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements."
    },
    {
      id: 42,
      question: "What is the result of typeof NaN in JavaScript?",
      options: [
        "'NaN'",
        "'undefined'",
        "'object'",
        "'number'"
      ],
      correctAnswer: 3,
      explanation: "In JavaScript, typeof NaN returns 'number', even though NaN stands for 'Not a Number'."
    },
    {
      id: 43,
      question: "Which of the following is a JavaScript module system?",
      options: [
        "CommonJS",
        "AMD",
        "ES Modules",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "CommonJS, AMD, and ES Modules are all JavaScript module systems."
    },
    {
      id: 44,
      question: "What is the correct way to write a JavaScript async function?",
      options: [
        "async function() {}",
        "function async() {}",
        "async: function() {}",
        "function() async {}"
      ],
      correctAnswer: 0,
      explanation: "Async functions are defined using the async keyword before the function keyword."
    },
    {
      id: 45,
      question: "Which method is used to execute a function after a specified time?",
      options: [
        "setInterval()",
        "setTimeout()",
        "setTime()",
        "executeAfter()"
      ],
      correctAnswer: 1,
      explanation: "setTimeout() executes a function after a specified number of milliseconds."
    },
    {
      id: 46,
      question: "What is the result of [] + [] in JavaScript?",
      options: [
        "[]",
        "''",
        "0",
        "Error"
      ],
      correctAnswer: 1,
      explanation: "When two empty arrays are added in JavaScript, they are both converted to empty strings, resulting in an empty string."
    },
    {
      id: 47,
      question: "Which method is used to prevent the default action of an event?",
      options: [
        "event.preventDefault()",
        "event.stopDefault()",
        "event.cancel()",
        "event.stop()"
      ],
      correctAnswer: 0,
      explanation: "event.preventDefault() prevents the default action of an event from occurring."
    },
    {
      id: 48,
      question: "What is the correct way to write a JavaScript destructuring assignment for an object?",
      options: [
        "const {name, age} = person;",
        "const [name, age] = person;",
        "const name, age = person;",
        "const {name: person.name, age: person.age};"
      ],
      correctAnswer: 0,
      explanation: "Object destructuring uses curly braces to extract properties from an object."
    },
    {
      id: 49,
      question: "Which of the following is not a JavaScript error type?",
      options: [
        "SyntaxError",
        "ReferenceError",
        "TypeError",
        "LogicError"
      ],
      correctAnswer: 3,
      explanation: "LogicError is not a built-in JavaScript error type. JavaScript has SyntaxError, ReferenceError, TypeError, and others."
    },
    {
      id: 50,
      question: "What is the correct way to write a JavaScript generator function?",
      options: [
        "function* myGenerator() {}",
        "generator function myGenerator() {}",
        "function myGenerator*() {}",
        "function myGenerator() *{}"
      ],
      correctAnswer: 0,
      explanation: "Generator functions are defined using the function* keyword."
    }
  ],
  php: [
    {
      id: 1,
      question: "What does PHP stand for?",
      options: [
        "Personal Home Page",
        "PHP: Hypertext Preprocessor",
        "Public HTML Processor",
        "Private Home Page"
      ],
      correctAnswer: 1,
      explanation: "PHP originally stood for Personal Home Page, but now it stands for PHP: Hypertext Preprocessor."
    },
    {
      id: 2,
      question: "Which symbol is used to start a PHP code block?",
      options: [
        "<php>",
        "<?php",
        "<script>",
        "<?"
      ],
      correctAnswer: 1,
      explanation: "<?php is the standard opening tag for PHP code blocks."
    },
    {
      id: 3,
      question: "What is the correct way to end a PHP statement?",
      options: [
        ".",
        ";",
        ":",
        "/"
      ],
      correctAnswer: 1,
      explanation: "PHP statements end with a semicolon (;), similar to many other programming languages."
    },
    {
      id: 4,
      question: "Which superglobal array contains form data submitted via POST method?",
      options: [
        "$_GET",
        "$_POST",
        "$_REQUEST",
        "$_SESSION"
      ],
      correctAnswer: 1,
      explanation: "$_POST contains data from forms submitted with the POST method."
    },
    {
      id: 5,
      question: "What function is used to include a file in PHP?",
      options: [
        "include()",
        "require()",
        "import()",
        "load()"
      ],
      correctAnswer: 0,
      explanation: "include() and require() are both used to include files, but require() produces a fatal error if the file is not found."
    },
    {
      id: 6,
      question: "Which of the following is not a valid variable name in PHP?",
      options: [
        "$my_var",
        "$myVar",
        "$_myVar",
        "$my-var"
      ],
      correctAnswer: 3,
      explanation: "Variable names in PHP can only contain letters, numbers, and underscores. They cannot contain hyphens."
    },
    {
      id: 7,
      question: "Which function is used to get the length of a string in PHP?",
      options: [
        "strlen()",
        "length()",
        "size()",
        "count()"
      ],
      correctAnswer: 0,
      explanation: "strlen() returns the length of a string in PHP."
    },
    {
      id: 8,
      question: "Which of the following is used to concatenate strings in PHP?",
      options: [
        "+",
        ".",
        "&",
        "&&"
      ],
      correctAnswer: 1,
      explanation: "The dot (.) operator is used to concatenate strings in PHP."
    },
    {
      id: 9,
      question: "Which function is used to sort an array in PHP?",
      options: [
        "array_sort()",
        "sort()",
        "order()",
        "arrange()"
      ],
      correctAnswer: 1,
      explanation: "sort() is used to sort an array in ascending order in PHP."
    },
    {
      id: 10,
      question: "Which of the following is not a PHP magic method?",
      options: [
        "__construct()",
        "__destruct()",
        "__get()",
        "__create()"
      ],
      correctAnswer: 3,
      explanation: "__create() is not a PHP magic method. PHP has __construct(), __destruct(), __get(), and others."
    },
    {
      id: 11,
      question: "Which function is used to start a session in PHP?",
      options: [
        "session_start()",
        "start_session()",
        "begin_session()",
        "init_session()"
      ],
      correctAnswer: 0,
      explanation: "session_start() is used to start a new session or resume an existing one in PHP."
    },
    {
      id: 12,
      question: "Which of the following is not a PHP error reporting level?",
      options: [
        "E_ERROR",
        "E_WARNING",
        "E_NOTICE",
        "E_CRITICAL"
      ],
      correctAnswer: 3,
      explanation: "E_CRITICAL is not a PHP error reporting level. PHP has E_ERROR, E_WARNING, E_NOTICE, and others."
    },
    {
      id: 13,
      question: "Which function is used to connect to a MySQL database in PHP?",
      options: [
        "mysql_connect()",
        "mysqli_connect()",
        "db_connect()",
        "connect_mysql()"
      ],
      correctAnswer: 1,
      explanation: "mysqli_connect() is used to connect to a MySQL database in PHP."
    },
    {
      id: 14,
      question: "Which of the following is not a PHP loop?",
      options: [
        "for",
        "while",
        "do-while",
        "foreach"
      ],
      correctAnswer: 3,
      explanation: "foreach is a PHP loop, but it's specifically for iterating over arrays. The other options are general-purpose loops."
    },
    {
      id: 15,
      question: "Which function is used to redirect to another page in PHP?",
      options: [
        "redirect()",
        "header()",
        "location()",
        "goto()"
      ],
      correctAnswer: 1,
      explanation: "header('Location: url') is used to redirect to another page in PHP."
    },
    {
      id: 16,
      question: "Which of the following is not a PHP array function?",
      options: [
        "array_push()",
        "array_pop()",
        "array_add()",
        "array_shift()"
      ],
      correctAnswer: 2,
      explanation: "array_add() is not a PHP array function. PHP has array_push(), array_pop(), and array_shift()."
    },
    {
      id: 17,
      question: "Which function is used to check if a file exists in PHP?",
      options: [
        "file_exists()",
        "exists()",
        "is_file()",
        "check_file()"
      ],
      correctAnswer: 0,
      explanation: "file_exists() is used to check if a file or directory exists in PHP."
    },
    {
      id: 18,
      question: "Which of the following is not a PHP string function?",
      options: [
        "strlen()",
        "strpos()",
        "substr()",
        "stringlen()"
      ],
      correctAnswer: 3,
      explanation: "stringlen() is not a PHP string function. PHP has strlen(), strpos(), and substr()."
    },
    {
      id: 19,
      question: "Which function is used to get the current date and time in PHP?",
      options: [
        "date()",
        "time()",
        "datetime()",
        "now()"
      ],
      correctAnswer: 0,
      explanation: "date() is used to format a local date and time in PHP."
    },
    {
      id: 20,
      question: "Which of the following is not a PHP superglobal?",
      options: [
        "$_GET",
        "$_POST",
        "$_FILES",
        "$_COOKIE"
      ],
      correctAnswer: 3,
      explanation: "$_COOKIE is a PHP superglobal. The question is incorrect as all options are PHP superglobals."
    },
    {
      id: 21,
      question: "Which function is used to send an email in PHP?",
      options: [
        "mail()",
        "send_mail()",
        "email()",
        "send_email()"
      ],
      correctAnswer: 0,
      explanation: "mail() is used to send an email in PHP."
    },
    {
      id: 22,
      question: "Which of the following is not a PHP conditional statement?",
      options: [
        "if",
        "else",
        "elseif",
        "elif"
      ],
      correctAnswer: 3,
      explanation: "elif is not a PHP conditional statement. PHP has if, else, and elseif."
    },
    {
      id: 23,
      question: "Which function is used to escape a string for use in a MySQL query in PHP?",
      options: [
        "mysql_escape_string()",
        "mysqli_escape_string()",
        "escape_string()",
        "db_escape_string()"
      ],
      correctAnswer: 1,
      explanation: "mysqli_escape_string() is used to escape a string for use in a MySQL query in PHP."
    },
    {
      id: 24,
      question: "Which of the following is not a PHP data type?",
      options: [
        "string",
        "integer",
        "float",
        "char"
      ],
      correctAnswer: 3,
      explanation: "char is not a PHP data type. PHP has string, integer, float, and others."
    },
    {
      id: 25,
      question: "Which function is used to count the elements in an array in PHP?",
      options: [
        "count()",
        "size()",
        "length()",
        "array_count()"
      ],
      correctAnswer: 0,
      explanation: "count() is used to count the elements in an array in PHP."
    },
    {
      id: 26,
      question: "Which of the following is not a PHP file system function?",
      options: [
        "fopen()",
        "fclose()",
        "read()",
        "fwrite()"
      ],
      correctAnswer: 2,
      explanation: "read() is not a PHP file system function. PHP has fopen(), fclose(), and fwrite()."
    },
    {
      id: 27,
      question: "Which function is used to set a cookie in PHP?",
      options: [
        "setcookie()",
        "cookie()",
        "create_cookie()",
        "make_cookie()"
      ],
      correctAnswer: 0,
      explanation: "setcookie() is used to set a cookie in PHP."
    },
    {
      id: 28,
      question: "Which of the following is not a PHP operator?",
      options: [
        "+",
        "-",
        "*",
        "^"
      ],
      correctAnswer: 3,
      explanation: "^ is a PHP operator (bitwise XOR). The question is incorrect as all options are PHP operators."
    },
    {
      id: 29,
      question: "Which function is used to include a file only once in PHP?",
      options: [
        "include_once()",
        "require_once()",
        "single_include()",
        "one_include()"
      ],
      correctAnswer: 0,
      explanation: "include_once() is used to include a file only once in PHP."
    },
    {
      id: 30,
      question: "Which of the following is not a PHP constant?",
      options: [
        "__FILE__",
        "__LINE__",
        "__FUNCTION__",
        "__METHOD__"
      ],
      correctAnswer: 3,
      explanation: "__METHOD__ is a PHP magic constant. The question is incorrect as all options are PHP constants."
    },
    {
      id: 31,
      question: "Which function is used to generate a random number in PHP?",
      options: [
        "rand()",
        "random()",
        "generate_random()",
        "get_random()"
      ],
      correctAnswer: 0,
      explanation: "rand() is used to generate a random number in PHP."
    },
    {
      id: 32,
      question: "Which of the following is not a PHP filter function?",
      options: [
        "filter_var()",
        "filter_input()",
        "filter_array()",
        "filter_string()"
      ],
      correctAnswer: 3,
      explanation: "filter_string() is not a PHP filter function. PHP has filter_var(), filter_input(), and filter_array()."
    },
    {
      id: 33,
      question: "Which function is used to check if a variable is set in PHP?",
      options: [
        "isset()",
        "is_set()",
        "check_set()",
        "variable_set()"
      ],
      correctAnswer: 0,
      explanation: "isset() is used to check if a variable is set in PHP."
    },
    {
      id: 34,
      question: "Which of the following is not a PHP JSON function?",
      options: [
        "json_encode()",
        "json_decode()",
        "json_parse()",
        "json_last_error()"
      ],
      correctAnswer: 2,
      explanation: "json_parse() is not a PHP JSON function. PHP has json_encode(), json_decode(), and json_last_error()."
    },
    {
      id: 35,
      question: "Which function is used to unset a variable in PHP?",
      options: [
        "unset()",
        "delete()",
        "remove()",
        "clear()"
      ],
      correctAnswer: 0,
      explanation: "unset() is used to unset a variable in PHP."
    },
    {
      id: 36,
      question: "Which of the following is not a PHP math function?",
      options: [
        "abs()",
        "ceil()",
        "floor()",
        "round_up()"
      ],
      correctAnswer: 3,
      explanation: "round_up() is not a PHP math function. PHP has abs(), ceil(), and floor()."
    },
    {
      id: 37,
      question: "Which function is used to get the type of a variable in PHP?",
      options: [
        "gettype()",
        "type()",
        "variable_type()",
        "typeof()"
      ],
      correctAnswer: 0,
      explanation: "gettype() is used to get the type of a variable in PHP."
    },
    {
      id: 38,
      question: "Which of the following is not a PHP regular expression function?",
      options: [
        "preg_match()",
        "preg_replace()",
        "preg_split()",
        "regex_match()"
      ],
      correctAnswer: 3,
      explanation: "regex_match() is not a PHP regular expression function. PHP has preg_match(), preg_replace(), and preg_split()."
    },
    {
      id: 39,
      question: "Which function is used to check if a variable is an array in PHP?",
      options: [
        "is_array()",
        "array()",
        "check_array()",
        "variable_array()"
      ],
      correctAnswer: 0,
      explanation: "is_array() is used to check if a variable is an array in PHP."
    },
    {
      id: 40,
      question: "Which of the following is not a PHP string function?",
      options: [
        "str_replace()",
        "str_split()",
        "str_join()",
        "str_repeat()"
      ],
      correctAnswer: 2,
      explanation: "str_join() is not a PHP string function. PHP has str_replace(), str_split(), and str_repeat()."
    },
    {
      id: 41,
      question: "Which function is used to convert a string to uppercase in PHP?",
      options: [
        "strtoupper()",
        "uppercase()",
        "to_upper()",
        "str_upper()"
      ],
      correctAnswer: 0,
      explanation: "strtoupper() is used to convert a string to uppercase in PHP."
    },
    {
      id: 42,
      question: "Which of the following is not a PHP variable function?",
      options: [
        "empty()",
        "is_null()",
        "is_numeric()",
        "is_integer()"
      ],
      correctAnswer: 3,
      explanation: "is_integer() is a PHP variable function (alias of is_int()). The question is incorrect as all options are PHP variable functions."
    },
    {
      id: 43,
      question: "Which function is used to convert a string to lowercase in PHP?",
      options: [
        "strtolower()",
        "lowercase()",
        "to_lower()",
        "str_lower()"
      ],
      correctAnswer: 0,
      explanation: "strtolower() is used to convert a string to lowercase in PHP."
    },
    {
      id: 44,
      question: "Which of the following is not a PHP array function?",
      options: [
        "array_merge()",
        "array_combine()",
        "array_join()",
        "array_diff()"
      ],
      correctAnswer: 2,
      explanation: "array_join() is not a PHP array function. PHP has array_merge(), array_combine(), and array_diff()."
    },
    {
      id: 45,
      question: "Which function is used to remove whitespace from the beginning and end of a string in PHP?",
      options: [
        "trim()",
        "strip()",
        "remove_whitespace()",
        "clean_string()"
      ],
      correctAnswer: 0,
      explanation: "trim() is used to remove whitespace from the beginning and end of a string in PHP."
    },
    {
      id: 46,
      question: "Which of the following is not a PHP date/time function?",
      options: [
        "date()",
        "time()",
        "strtotime()",
        "get_time()"
      ],
      correctAnswer: 3,
      explanation: "get_time() is not a PHP date/time function. PHP has date(), time(), and strtotime()."
    },
    {
      id: 47,
      question: "Which function is used to get the first occurrence of a string in PHP?",
      options: [
        "strpos()",
        "strfirst()",
        "first_occurrence()",
        "get_first()"
      ],
      correctAnswer: 0,
      explanation: "strpos() is used to get the first occurrence of a string in PHP."
    },
    {
      id: 48,
      question: "Which of the following is not a PHP directory function?",
      options: [
        "opendir()",
        "closedir()",
        "readdir()",
        "open_directory()"
      ],
      correctAnswer: 3,
      explanation: "open_directory() is not a PHP directory function. PHP has opendir(), closedir(), and readdir()."
    },
    {
      id: 49,
      question: "Which function is used to get the last occurrence of a string in PHP?",
      options: [
        "strrpos()",
        "strlast()",
        "last_occurrence()",
        "get_last()"
      ],
      correctAnswer: 0,
      explanation: "strrpos() is used to get the last occurrence of a string in PHP."
    },
    {
      id: 50,
      question: "Which of the following is not a PHP error handling function?",
      options: [
        "error_reporting()",
        "error_log()",
        "trigger_error()",
        "handle_error()"
      ],
      correctAnswer: 3,
      explanation: "handle_error() is not a PHP error handling function. PHP has error_reporting(), error_log(), and trigger_error()."
    }
  ]
};

export default function QuizPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'php'>('javascript')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuiz = quizData[selectedLanguage]
  const question = currentQuiz[currentQuestion]

  const handleLanguageChange = (language: 'javascript' | 'php') => {
    setSelectedLanguage(language)
    resetQuiz()
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < currentQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 80) return 'Excellent! You have a strong understanding.'
    if (percentage >= 60) return 'Good job! Keep practicing to improve.'
    return 'Keep learning! Review the material and try again.'
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
              <Link href="/challenges" className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-105">Code Challenges</Link>
              <Link href="/quiz" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">Quiz</Link>
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
              <Target className="h-6 w-6 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Interactive Learning</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">Programming Quiz</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Challenge yourself with our comprehensive programming quizzes. Master JavaScript and PHP through interactive testing and instant feedback.</p>
          </div>

          {!quizCompleted ? (
            <>
              {/* Language Selection */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
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
              </div>

              {/* Progress */}
              <div className="mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-gray-900">Question {currentQuestion + 1} of {currentQuiz.length}</span>
                        <p className="text-sm text-gray-600">Keep going!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{score}/{currentQuestion + (showResult ? 1 : 0)}</div>
                      <div className="text-sm text-gray-600">Current Score</div>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={(currentQuestion + (showResult ? 1 : 0)) / currentQuiz.length * 100} className="h-3 bg-gray-200" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Progress</span>
                    <span>{Math.round((currentQuestion + (showResult ? 1 : 0)) / currentQuiz.length * 100)}% Complete</span>
                  </div>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{currentQuestion + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 leading-tight">{question.question}</h2>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-6 text-left rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                        selectedAnswer === index
                          ? showResult
                            ? index === question.correctAnswer
                              ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg ring-2 ring-green-200'
                              : 'border-red-500 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg ring-2 ring-red-200'
                            : 'border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg ring-2 ring-orange-200'
                          : showResult && index === question.correctAnswer
                          ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg ring-2 ring-green-200'
                          : 'border-gray-200 bg-white/60 hover:bg-white/90 hover:border-gray-300 hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                            selectedAnswer === index
                              ? showResult
                                ? index === question.correctAnswer
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-orange-500 text-white'
                              : showResult && index === question.correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-700'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-gray-800 font-medium">{option}</span>
                        </div>
                        {showResult && index === question.correctAnswer && (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        )}
                        {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                          <AlertCircle className="h-6 w-6 text-red-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                  {showResult && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-blue-800">Explanation</h4>
                      </div>
                      <p className="text-blue-700 leading-relaxed">{question.explanation}</p>
                    </div>
                  )}

                  <div className="flex justify-between mt-8 gap-4">
                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <RotateCcw className="h-5 w-5 mr-2" />
                      Restart Quiz
                    </Button>

                    {!showResult ? (
                      <Button
                        onClick={handleSubmitAnswer}
                        disabled={selectedAnswer === null}
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        <Zap className="h-5 w-5 mr-2" />
                        Submit Answer
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNextQuestion}
                        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        {currentQuestion < currentQuiz.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </>
            ) : (
            /* Quiz Results */
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                    <Trophy className="h-12 w-12 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Quiz Completed!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Quiz Results
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 shadow-lg">
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className={`text-5xl font-bold mb-1 ${getScoreColor((score / currentQuiz.length) * 100)}`}>
                        {score}
                      </div>
                      <div className="text-sm text-gray-600">Correct Answers</div>
                    </div>
                    <div className="w-px h-16 bg-gray-300"></div>
                    <div className="text-center">
                      <div className={`text-5xl font-bold mb-1 ${getScoreColor((score / currentQuiz.length) * 100)}`}>
                        {currentQuiz.length}
                      </div>
                      <div className="text-sm text-gray-600">Total Questions</div>
                    </div>
                  </div>

                  <div className={`text-3xl font-bold mb-2 ${getScoreColor((score / currentQuiz.length) * 100)}`}>
                    {Math.round((score / currentQuiz.length) * 100)}%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${getScoreColor((score / currentQuiz.length) * 100).replace('text-', 'bg-')}`}
                      style={{ width: `${(score / currentQuiz.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 shadow-lg">
                  <p className="text-lg font-semibold text-green-800 mb-2">Performance Summary</p>
                  <p className="text-green-700">
                    {getScoreMessage((score / currentQuiz.length) * 100)}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={resetQuiz}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Take Quiz Again
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedLanguage(selectedLanguage === 'javascript' ? 'php' : 'javascript')}
                    className="px-8 py-4 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Code className="h-5 w-5 mr-2" />
                    Try {selectedLanguage === 'javascript' ? 'PHP' : 'JavaScript'} Quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">Y</span>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">YHA Computer</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Interactive coding challenge platform for students to master PHP and JavaScript through engaging quizzes and hands-on challenges.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Home</Link>
            <Link href="/challenges" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Code Challenges</Link>
            <Link href="/quiz" className="text-orange-400 font-semibold">Quiz</Link>
            <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Contact</Link>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YHA Computer. All rights reserved. | Built with passion for learning.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
