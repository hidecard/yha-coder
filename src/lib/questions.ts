export const questionBank = [
  // PHP Questions (50 total)
  {
    id: 1,
    category: 'PHP',
    question: 'What does PHP stand for?',
    options: ['Personal Home Page', 'Private Hosting Portal', 'Print Hypertext Processor', 'Public Hosting Program'],
    correct: 0,
    explanation: 'PHP originally stood for Personal Home Page before evolving into Hypertext Preprocessor.'
  },
  {
    id: 2,
    category: 'PHP',
    question: 'Which symbol is used to start a PHP code block?',
    options: ['<?php', '<?', '<%', '<script>'],
    correct: 0,
    explanation: '<?php is the standard opening tag for PHP code blocks.'
  },
  {
    id: 3,
    category: 'PHP',
    question: 'Which function is used to get the length of a string in PHP?',
    options: ['strlen()', 'length()', 'size()', 'count()'],
    correct: 0,
    explanation: 'strlen() is the built-in PHP function to get the length of a string.'
  },
  {
    id: 4,
    category: 'PHP',
    question: 'How do you declare a variable in PHP?',
    options: ['var $name', '$name', 'name =', 'declare $name'],
    correct: 1,
    explanation: 'In PHP, variables are declared using the $ symbol followed by the variable name.'
  },
  {
    id: 5,
    category: 'PHP',
    question: 'Which superglobal array contains form data?',
    options: ['$_GET', '$_POST', '$_REQUEST', 'All of the above'],
    correct: 3,
    explanation: '$_GET, $_POST, and $_REQUEST all can contain form data depending on the method used.'
  },
  {
    id: 6,
    category: 'PHP',
    question: 'Which of the following is used to output text in PHP?',
    options: ['echo', 'print', 'printf', 'All of the above'],
    correct: 3,
    explanation: 'echo, print, and printf are all used to output text in PHP.'
  },
  {
    id: 7,
    category: 'PHP',
    question: 'How do you write a single-line comment in PHP?',
    options: ['// comment', '# comment', '/* comment */', 'Both // and #'],
    correct: 3,
    explanation: 'Both // and # can be used for single-line comments in PHP.'
  },
  {
    id: 8,
    category: 'PHP',
    question: 'Which function is used to include a file in PHP?',
    options: ['include()', 'require()', 'Both include() and require()', 'import()'],
    correct: 2,
    explanation: 'Both include() and require() can be used to include files, but require() causes a fatal error on failure.'
  },
  {
    id: 9,
    category: 'PHP',
    question: 'What is the correct way to connect to a MySQL database?',
    options: ['mysql_connect()', 'mysqli_connect()', 'PDO::connect()', 'Both mysqli_connect() and PDO'],
    correct: 3,
    explanation: 'Both mysqli_connect() and PDO can be used to connect to MySQL databases.'
  },
  {
    id: 10,
    category: 'PHP',
    question: 'Which operator is used for concatenation in PHP?',
    options: ['+', '.', '&', '||'],
    correct: 1,
    explanation: 'The dot (.) operator is used for string concatenation in PHP.'
  },
  {
    id: 11,
    category: 'PHP',
    question: 'What is the default file extension for PHP files?',
    options: ['.php', '.phtml', '.php3', '.php'],
    correct: 3,
    explanation: '.php is the default and most common file extension for PHP files.'
  },
  {
    id: 12,
    category: 'PHP',
    question: 'Which function is used to check if a variable is set in PHP?',
    options: ['isset()', 'empty()', 'defined()', 'exists()'],
    correct: 0,
    explanation: 'isset() is used to check if a variable is set and is not NULL.'
  },
  {
    id: 13,
    category: 'PHP',
    question: 'How do you create an array in PHP?',
    options: ['array()', '[]', 'Both array() and []', 'new Array()'],
    correct: 2,
    explanation: 'Both array() and [] can be used to create arrays in PHP.'
  },
  {
    id: 14,
    category: 'PHP',
    question: 'Which loop is guaranteed to execute at least once?',
    options: ['for', 'while', 'do-while', 'foreach'],
    correct: 2,
    explanation: 'do-while loop always executes at least once because the condition is checked after execution.'
  },
  {
    id: 15,
    category: 'PHP',
    question: 'What is the purpose of the $GLOBALS array?',
    options: ['Store all global variables', 'Store all constants', 'Store all functions', 'Store all classes'],
    correct: 0,
    explanation: '$GLOBALS is a PHP superglobal array that contains all global variables.'
  },
  {
    id: 16,
    category: 'PHP',
    question: 'Which function is used to redirect to another page?',
    options: ['redirect()', 'header()', 'location()', 'go_to()'],
    correct: 1,
    explanation: 'header() function is used to send raw HTTP headers, including Location header for redirection.'
  },
  {
    id: 17,
    category: 'PHP',
    question: 'What does the === operator compare?',
    options: ['Only values', 'Only types', 'Both values and types', 'References'],
    correct: 2,
    explanation: 'The === operator compares both values and types without type conversion.'
  },
  {
    id: 18,
    category: 'PHP',
    question: 'Which function is used to get the current date and time?',
    options: ['date()', 'time()', 'strtotime()', 'Both date() and time()'],
    correct: 3,
    explanation: 'Both date() and time() can be used to get date and time information.'
  },
  {
    id: 19,
    category: 'PHP',
    question: 'How do you define a constant in PHP?',
    options: ['define()', 'const', 'Both define() and const', 'constant()'],
    correct: 2,
    explanation: 'Both define() and const can be used to define constants in PHP.'
  },
  {
    id: 20,
    category: 'PHP',
    question: 'What is the purpose of the extract() function?',
    options: ['Extract variables from an array', 'Extract text from a string', 'Extract data from database', 'Extract files from archive'],
    correct: 0,
    explanation: 'extract() imports variables into the current symbol table from an array.'
  },
  {
    id: 21,
    category: 'PHP',
    question: 'Which function is used to sanitize user input?',
    options: ['sanitize()', 'filter_input()', 'clean()', 'validate()'],
    correct: 1,
    explanation: 'filter_input() is used to get a specific external variable by name and optionally filter it.'
  },
  {
    id: 22,
    category: 'PHP',
    question: 'What is the correct way to start a session?',
    options: ['session_start()', 'start_session()', 'begin_session()', 'init_session()'],
    correct: 0,
    explanation: 'session_start() initializes session data.'
  },
  {
    id: 23,
    category: 'PHP',
    question: 'Which function is used to send an email in PHP?',
    options: ['mail()', 'send_mail()', 'email()', 'smtp_send()'],
    correct: 0,
    explanation: 'mail() is the built-in PHP function for sending email.'
  },
  {
    id: 24,
    category: 'PHP',
    question: 'What is the purpose of the __construct() method?',
    options: ['Class destructor', 'Class constructor', 'Class initializer', 'Class validator'],
    correct: 1,
    explanation: '__construct() is the constructor method in PHP classes.'
  },
  {
    id: 25,
    category: 'PHP',
    question: 'Which access modifier makes a property accessible only within the class?',
    options: ['public', 'private', 'protected', 'static'],
    correct: 1,
    explanation: 'private makes properties accessible only within the class that defines them.'
  },
  {
    id: 26,
    category: 'PHP',
    question: 'What is the purpose of the static keyword?',
    options: ['Make properties persistent', 'Make properties class-level', 'Make properties constant', 'Make properties read-only'],
    correct: 1,
    explanation: 'static makes properties and methods class-level rather than instance-level.'
  },
  {
    id: 27,
    category: 'PHP',
    question: 'Which function is used to sort an array?',
    options: ['sort()', 'order()', 'arrange()', 'organize()'],
    correct: 0,
    explanation: 'sort() is used to sort an array in ascending order.'
  },
  {
    id: 28,
    category: 'PHP',
    question: 'What does the explode() function do?',
    options: ['Split string into array', 'Join array into string', 'Remove array elements', 'Add array elements'],
    correct: 0,
    explanation: 'explode() splits a string into an array by a specified delimiter.'
  },
  {
    id: 29,
    category: 'PHP',
    question: 'Which function is used to remove whitespace from both ends of a string?',
    options: ['trim()', 'strip()', 'clean()', 'remove_whitespace()'],
    correct: 0,
    explanation: 'trim() removes whitespace from both ends of a string.'
  },
  {
    id: 30,
    category: 'PHP',
    question: 'What is the purpose of the die() function?',
    options: ['Kill the script', 'Print message and exit', 'Handle errors', 'Debug code'],
    correct: 1,
    explanation: 'die() prints a message and exits the script.'
  },
  {
    id: 31,
    category: 'PHP',
    question: 'Which function is used to check if a file exists?',
    options: ['file_exists()', 'exists()', 'is_file()', 'check_file()'],
    correct: 0,
    explanation: 'file_exists() checks whether a file or directory exists.'
  },
  {
    id: 32,
    category: 'PHP',
    question: 'What is the correct way to write a PHP function?',
    options: ['function myFunction() {}', 'def myFunction() {}', 'func myFunction() {}', 'create myFunction() {}'],
    correct: 0,
    explanation: 'Functions in PHP are defined using the function keyword.'
  },
  {
    id: 33,
    category: 'PHP',
    question: 'Which operator is used for inheritance in PHP?',
    options: ['extends', 'implements', 'inherits', 'uses'],
    correct: 0,
    explanation: 'extends is used for class inheritance in PHP.'
  },
  {
    id: 34,
    category: 'PHP',
    question: 'What is the purpose of the final keyword?',
    options: ['Prevent inheritance', 'Prevent modification', 'Make class abstract', 'Make class static'],
    correct: 0,
    explanation: 'final prevents class inheritance or method overriding.'
  },
  {
    id: 35,
    category: 'PHP',
    question: 'Which function is used to count elements in an array?',
    options: ['count()', 'size()', 'length()', 'num_elements()'],
    correct: 0,
    explanation: 'count() returns the number of elements in an array.'
  },
  {
    id: 36,
    category: 'PHP',
    question: 'What does the implode() function do?',
    options: ['Join array elements into string', 'Split string into array', 'Remove array elements', 'Sort array'],
    correct: 0,
    explanation: 'implode() joins array elements into a string with a specified separator.'
  },
  {
    id: 37,
    category: 'PHP',
    question: 'Which function is used to generate random numbers?',
    options: ['rand()', 'random()', 'mt_rand()', 'Both rand() and mt_rand()'],
    correct: 3,
    explanation: 'Both rand() and mt_rand() can generate random numbers.'
  },
  {
    id: 38,
    category: 'PHP',
    question: 'What is the purpose of the $_SESSION superglobal?',
    options: ['Store session data', 'Store cookie data', 'Store server data', 'Store form data'],
    correct: 0,
    explanation: '$_SESSION stores session variables across multiple pages.'
  },
  {
    id: 39,
    category: 'PHP',
    question: 'Which function is used to upload files?',
    options: ['move_uploaded_file()', 'upload_file()', 'save_file()', 'store_file()'],
    correct: 0,
    explanation: 'move_uploaded_file() moves an uploaded file to a new location.'
  },
  {
    id: 40,
    category: 'PHP',
    question: 'What is the purpose of the namespace keyword?',
    options: ['Organize code', 'Import code', 'Export code', 'Document code'],
    correct: 0,
    explanation: 'namespace helps organize code and avoid name conflicts.'
  },
  {
    id: 41,
    category: 'PHP',
    question: 'Which function is used to find the position of a substring in a string?',
    options: ['strpos()', 'find()', 'locate()', 'position()'],
    correct: 0,
    explanation: 'strpos() finds the position of the first occurrence of a substring.'
  },
  {
    id: 42,
    category: 'PHP',
    question: 'What is the purpose of the abstract keyword?',
    options: ['Create abstract classes', 'Create static classes', 'Create final classes', 'Create private classes'],
    correct: 0,
    explanation: 'abstract is used to create abstract classes that cannot be instantiated directly.'
  },
  {
    id: 43,
    category: 'PHP',
    question: 'Which function is used to convert string to uppercase?',
    options: ['strtoupper()', 'uppercase()', 'to_upper()', 'str_upper()'],
    correct: 0,
    explanation: 'strtoupper() converts a string to uppercase.'
  },
  {
    id: 44,
    category: 'PHP',
    question: 'What is the purpose of the try-catch block?',
    options: ['Handle exceptions', 'Handle errors', 'Handle warnings', 'Handle notices'],
    correct: 0,
    explanation: 'try-catch is used for exception handling in PHP.'
  },
  {
    id: 45,
    category: 'PHP',
    question: 'Which function is used to check if a variable is empty?',
    options: ['empty()', 'is_empty()', 'check_empty()', 'validate_empty()'],
    correct: 0,
    explanation: 'empty() checks whether a variable is empty.'
  },
  {
    id: 46,
    category: 'PHP',
    question: 'What is the purpose of the interface keyword?',
    options: ['Define interfaces', 'Define classes', 'Define traits', 'Define namespaces'],
    correct: 0,
    explanation: 'interface defines a contract of methods that implementing classes must follow.'
  },
  {
    id: 47,
    category: 'PHP',
    question: 'Which function is used to get the type of a variable?',
    options: ['gettype()', 'type()', 'typeof()', 'vartype()'],
    correct: 0,
    explanation: 'gettype() returns the type of a variable.'
  },
  {
    id: 48,
    category: 'PHP',
    question: 'What is the purpose of the trait keyword?',
    options: ['Code reuse', 'Inheritance', 'Interface implementation', 'Namespace definition'],
    correct: 0,
    explanation: 'trait allows code reuse in single inheritance languages like PHP.'
  },
  {
    id: 49,
    category: 'PHP',
    question: 'Which function is used to format a number?',
    options: ['number_format()', 'format()', 'num_format()', 'format_number()'],
    correct: 0,
    explanation: 'number_format() formats a number with grouped thousands.'
  },
  {
    id: 50,
    category: 'PHP',
    question: 'What is the purpose of the __destruct() method?',
    options: ['Class destructor', 'Class constructor', 'Class validator', 'Class initializer'],
    correct: 0,
    explanation: '__destruct() is the destructor method called when object is destroyed.'
  },

  // JavaScript Questions (100 total)
  {
    id: 51,
    category: 'JavaScript',
    question: 'What is the correct way to declare a constant in JavaScript?',
    options: ['const', 'var', 'let', 'constant'],
    correct: 0,
    explanation: 'const is the keyword used to declare constants in JavaScript.'
  },
  {
    id: 52,
    category: 'JavaScript',
    question: 'Which method is used to add an element to the end of an array?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correct: 0,
    explanation: 'push() adds one or more elements to the end of an array.'
  },
  {
    id: 53,
    category: 'JavaScript',
    question: 'What does the "===" operator check?',
    options: ['Value only', 'Type only', 'Both value and type', 'Reference'],
    correct: 2,
    explanation: 'The === operator checks for strict equality - both value and type must be the same.'
  },
  {
    id: 54,
    category: 'JavaScript',
    question: 'How do you create a function in JavaScript?',
    options: ['function myFunction()', 'function myFunction()', 'create myFunction()', 'def myFunction()'],
    correct: 1,
    explanation: 'function myFunction() is the correct syntax for creating a function in JavaScript.'
  },
  {
    id: 55,
    category: 'JavaScript',
    question: 'Which method is used to select an element by ID?',
    options: ['getElementById()', 'querySelector()', 'getElementByClass()', 'selectById()'],
    correct: 0,
    explanation: 'getElementById() is the standard method to select an element by its ID.'
  },
  {
    id: 56,
    category: 'JavaScript',
    question: 'What is the correct way to write a JavaScript array?',
    options: ['var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'],
    correct: 0,
    explanation: 'JavaScript arrays are written with square brackets and items separated by commas.'
  },
  {
    id: 57,
    category: 'JavaScript',
    question: 'How do you declare a JavaScript object?',
    options: ['var person = {firstName:"John", lastName:"Doe"}', 'var person = (firstName:"John", lastName:"Doe")', 'var person = {1:"John", 2:"Doe"}', 'var person = [firstName:"John", lastName:"Doe"]'],
    correct: 0,
    explanation: 'JavaScript objects are written with curly braces and key-value pairs.'
  },
  {
    id: 58,
    category: 'JavaScript',
    question: 'Which method removes the last element from an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correct: 0,
    explanation: 'pop() removes and returns the last element of an array.'
  },
  {
    id: 59,
    category: 'JavaScript',
    question: 'What is the correct way to write a JavaScript comment?',
    options: ['// This is a comment', '/* This is a comment */', '# This is a comment', 'Both // and /* */'],
    correct: 3,
    explanation: 'Both // (single line) and /* */ (multi-line) are valid comment syntax in JavaScript.'
  },
  {
    id: 60,
    category: 'JavaScript',
    question: 'What is the correct way to call a function named "myFunction"?',
    options: ['myFunction()', 'call myFunction()', 'execute myFunction()', 'run myFunction()'],
    correct: 0,
    explanation: 'Functions are called using parentheses after the function name.'
  },
  {
    id: 61,
    category: 'JavaScript',
    question: 'How do you create a JavaScript variable?',
    options: ['var carName = "Volvo"', 'variable carName = "Volvo"', 'v carName = "Volvo"', 'declare carName = "Volvo"'],
    correct: 0,
    explanation: 'var is used to declare variables in JavaScript (though let and const are preferred).'
  },
  {
    id: 62,
    category: 'JavaScript',
    question: 'What is the correct JavaScript syntax to change the content of an HTML element?',
    options: ['document.getElementById("demo").innerHTML = "Hello World!"', 'getElementById("demo").innerHTML = "Hello World!"', '#demo.innerHTML = "Hello World!"', 'document.getElement("p").innerHTML = "Hello World!"'],
    correct: 0,
    explanation: 'document.getElementById("demo").innerHTML is the correct syntax to change content.'
  },
  {
    id: 63,
    category: 'JavaScript',
    question: 'What is the correct way to add an event listener?',
    options: ['element.addEventListener("click", myFunction)', 'element.attachEvent("click", myFunction)', 'element.onClick = myFunction', 'element.bind("click", myFunction)'],
    correct: 0,
    explanation: 'addEventListener() is the standard method to add event listeners.'
  },
  {
    id: 64,
    category: 'JavaScript',
    question: 'Which built-in method sorts the elements of an array?',
    options: ['sort()', 'order()', 'changeOrder()', 'arrange()'],
    correct: 0,
    explanation: 'sort() sorts the elements of an array alphabetically or numerically.'
  },
  {
    id: 65,
    category: 'JavaScript',
    question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
    options: ['w2 = window.open("http://www.google.com");', 'w2 = window.new("http://www.google.com");', 'w2 = window.create("http://www.google.com");', 'w2 = window.launch("http://www.google.com");'],
    correct: 0,
    explanation: 'window.open() is used to open new browser windows.'
  },
  {
    id: 66,
    category: 'JavaScript',
    question: 'How do you find the number with the highest value in a list of numbers?',
    options: ['Math.max(1, 2, 3)', 'Math.highest(1, 2, 3)', 'Math.ceil(1, 2, 3)', 'Math.top(1, 2, 3)'],
    correct: 0,
    explanation: 'Math.max() returns the highest value from the provided numbers.'
  },
  {
    id: 67,
    category: 'JavaScript',
    question: 'What is the correct JavaScript syntax for writing a for loop?',
    options: ['for (i = 0; i <= 5; i++)', 'for (i = 0; i <= 5)', 'for i = 1 to 5', 'for (i <= 5; i++)'],
    correct: 0,
    explanation: 'for loops require initialization, condition, and increment expressions.'
  },
  {
    id: 68,
    category: 'JavaScript',
    question: 'How can you add a comment in a JavaScript file?',
    options: ['// This is a comment', '<!-- This is a comment -->', '** This is a comment **', '## This is a comment ##'],
    correct: 0,
    explanation: '// is used for single-line comments in JavaScript.'
  },
  {
    id: 69,
    category: 'JavaScript',
    question: 'What is the correct way to write a JavaScript array?',
    options: ['var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = [1:"red", 2:"green", 3:"blue"]'],
    correct: 0,
    explanation: 'Arrays use square brackets with comma-separated values.'
  },
  {
    id: 70,
    category: 'JavaScript',
    question: 'JavaScript is a ___ -side programming language.',
    options: ['Server', 'Client', 'Both', 'None'],
    correct: 2,
    explanation: 'JavaScript can run on both client-side (browsers) and server-side (Node.js).'
  },
  {
    id: 71,
    category: 'JavaScript',
    question: 'Which of the following is not a JavaScript data type?',
    options: ['Number', 'String', 'Float', 'Boolean'],
    correct: 2,
    explanation: 'Float is not a separate data type in JavaScript; numbers are all of type Number.'
  },
  {
    id: 72,
    category: 'JavaScript',
    question: 'Which company developed JavaScript?',
    options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Oracle'],
    correct: 0,
    explanation: 'JavaScript was developed by Brendan Eich at Netscape in 1995.'
  },
  {
    id: 73,
    category: 'JavaScript',
    question: 'What is the original name of JavaScript?',
    options: ['Mocha', 'LiveScript', 'Java', 'Script'],
    correct: 1,
    explanation: 'JavaScript was originally called LiveScript before being renamed for marketing reasons.'
  },
  {
    id: 74,
    category: 'JavaScript',
    question: 'Which method is used to join array elements into a string?',
    options: ['join()', 'concat()', 'merge()', 'combine()'],
    correct: 0,
    explanation: 'join() combines all array elements into a string separated by a specified separator.'
  },
  {
    id: 75,
    category: 'JavaScript',
    question: 'What does the "this" keyword refer to in JavaScript?',
    options: ['Current object', 'Previous object', 'Next object', 'Parent object'],
    correct: 0,
    explanation: 'this refers to the current object context.'
  },
  {
    id: 76,
    category: 'JavaScript',
    question: 'Which method is used to remove the first element from an array?',
    options: ['shift()', 'unshift()', 'pop()', 'push()'],
    correct: 0,
    explanation: 'shift() removes and returns the first element of an array.'
  },
  {
    id: 77,
    category: 'JavaScript',
    question: 'What is the result of typeof null in JavaScript?',
    options: ['"object"', '"null"', '"undefined"', '"number"'],
    correct: 0,
    explanation: 'typeof null returns "object" which is considered a bug in JavaScript.'
  },
  {
    id: 78,
    category: 'JavaScript',
    question: 'Which method is used to convert a JSON string to a JavaScript object?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
    correct: 0,
    explanation: 'JSON.parse() converts a JSON string into a JavaScript object.'
  },
  {
    id: 79,
    category: 'JavaScript',
    question: 'What is the correct way to check if a variable is an array?',
    options: ['Array.isArray()', 'variable.isArray()', 'typeof variable === "array"', 'variable instanceof Array'],
    correct: 0,
    explanation: 'Array.isArray() is the most reliable way to check if a variable is an array.'
  },
  {
    id: 80,
    category: 'JavaScript',
    question: 'Which operator is used for exponentiation in JavaScript?',
    options: ['**', '^', 'exp()', 'pow()'],
    correct: 0,
    explanation: '** is the exponentiation operator in JavaScript (ES2016+).'
  },
  {
    id: 81,
    category: 'JavaScript',
    question: 'What is the purpose of the setTimeout() function?',
    options: ['Execute function after delay', 'Execute function immediately', 'Execute function repeatedly', 'Stop function execution'],
    correct: 0,
    explanation: 'setTimeout() executes a function after a specified delay in milliseconds.'
  },
  {
    id: 82,
    category: 'JavaScript',
    question: 'Which method is used to add elements to the beginning of an array?',
    options: ['unshift()', 'shift()', 'push()', 'pop()'],
    correct: 0,
    explanation: 'unshift() adds one or more elements to the beginning of an array.'
  },
  {
    id: 83,
    category: 'JavaScript',
    question: 'What is the correct way to write an arrow function?',
    options: ['() => {}', '=> () {}', 'function => {}', 'arrow => {}'],
    correct: 0,
    explanation: 'Arrow functions use the => syntax: () => {}'
  },
  {
    id: 84,
    category: 'JavaScript',
    question: 'Which method is used to find the index of an element in an array?',
    options: ['indexOf()', 'find()', 'search()', 'locate()'],
    correct: 0,
    explanation: 'indexOf() returns the first index at which a given element can be found.'
  },
  {
    id: 85,
    category: 'JavaScript',
    question: 'What is the purpose of the console.log() function?',
    options: ['Output messages to console', 'Create log files', 'Display alerts', 'Write to document'],
    correct: 0,
    explanation: 'console.log() outputs messages to the browser console for debugging.'
  },
  {
    id: 86,
    category: 'JavaScript',
    question: 'Which method is used to convert a JavaScript object to a JSON string?',
    options: ['JSON.stringify()', 'JSON.parse()', 'JSON.toString()', 'JSON.convert()'],
    correct: 0,
    explanation: 'JSON.stringify() converts a JavaScript object into a JSON string.'
  },
  {
    id: 87,
    category: 'JavaScript',
    question: 'What is the result of 3 + "3" in JavaScript?',
    options: ['"33"', '6', 'TypeError', 'NaN'],
    correct: 0,
    explanation: 'When adding a number to a string, JavaScript converts the number to a string and concatenates.'
  },
  {
    id: 88,
    category: 'JavaScript',
    question: 'Which keyword is used to declare a block-scoped variable?',
    options: ['let', 'var', 'const', 'block'],
    correct: 0,
    explanation: 'let declares block-scoped variables in JavaScript.'
  },
  {
    id: 89,
    category: 'JavaScript',
    question: 'What is the purpose of the map() array method?',
    options: ['Transform array elements', 'Filter array elements', 'Sort array elements', 'Search array elements'],
    correct: 0,
    explanation: 'map() creates a new array by transforming each element using a callback function.'
  },
  {
    id: 90,
    category: 'JavaScript',
    question: 'Which method is used to filter array elements?',
    options: ['filter()', 'map()', 'reduce()', 'find()'],
    correct: 0,
    explanation: 'filter() creates a new array with elements that pass a test.'
  },
  {
    id: 91,
    category: 'JavaScript',
    question: 'What is the purpose of the reduce() method?',
    options: ['Reduce array to single value', 'Remove array elements', 'Sort array elements', 'Split array elements'],
    correct: 0,
    explanation: 'reduce() executes a reducer function on each element resulting in a single output value.'
  },
  {
    id: 92,
    category: 'JavaScript',
    question: 'Which method is used to check if an array includes a specific element?',
    options: ['includes()', 'contains()', 'has()', 'exists()'],
    correct: 0,
    explanation: 'includes() returns true if an array contains a specified element.'
  },
  {
    id: 93,
    category: 'JavaScript',
    question: 'What is the purpose of the async keyword?',
    options: ['Declare async function', 'Await promises', 'Handle errors', 'Create callbacks'],
    correct: 0,
    explanation: 'async declares an asynchronous function that implicitly returns a promise.'
  },
  {
    id: 94,
    category: 'JavaScript',
    question: 'Which keyword is used to wait for a promise?',
    options: ['await', 'wait', 'promise', 'then'],
    correct: 0,
    explanation: 'await pauses execution until a promise is settled.'
  },
  {
    id: 95,
    category: 'JavaScript',
    question: 'What is the purpose of the fetch() API?',
    options: ['Make HTTP requests', 'Fetch data from server', 'Both of the above', 'None of the above'],
    correct: 2,
    explanation: 'fetch() is used to make HTTP requests and fetch resources from servers.'
  },
  {
    id: 96,
    category: 'JavaScript',
    question: 'Which method is used to add a class to an element?',
    options: ['classList.add()', 'className.add()', 'addClass()', 'element.class = ""'],
    correct: 0,
    explanation: 'classList.add() adds one or more class names to an element.'
  },
  {
    id: 97,
    category: 'JavaScript',
    question: 'What is the purpose of the localStorage API?',
    options: ['Store data in browser', 'Store data on server', 'Cache images', 'Store session data'],
    correct: 0,
    explanation: 'localStorage stores data with no expiration date in the browser.'
  },
  {
    id: 98,
    category: 'JavaScript',
    question: 'Which method is used to prevent the default action of an event?',
    options: ['preventDefault()', 'stopPropagation()', 'stopImmediatePropagation()', 'cancelBubble()'],
    correct: 0,
    explanation: 'preventDefault() cancels the default action of an event.'
  },
  {
    id: 99,
    category: 'JavaScript',
    question: 'What is the purpose of the template literals in JavaScript?',
    options: ['String interpolation', 'Type checking', 'Error handling', 'Async operations'],
    correct: 0,
    explanation: 'Template literals allow string interpolation using backticks and ${} syntax.'
  },
  {
    id: 100,
    category: 'JavaScript',
    question: 'Which method is used to create a shallow copy of an array?',
    options: ['slice()', 'copy()', 'clone()', 'duplicate()'],
    correct: 0,
    explanation: 'slice() with no arguments creates a shallow copy of an array.'
  },
  {
    id: 101,
    category: 'JavaScript',
    question: 'What is the purpose of the spread operator (...)?',
    options: ['Expand iterable elements', 'Compress array', 'Sort array', 'Filter array'],
    correct: 0,
    explanation: 'The spread operator expands iterable elements into individual elements.'
  },
  {
    id: 102,
    category: 'JavaScript',
    question: 'Which method is used to remove elements from an array?',
    options: ['splice()', 'slice()', 'remove()', 'delete()'],
    correct: 0,
    explanation: 'splice() changes the contents of an array by removing or replacing existing elements.'
  },
  {
    id: 103,
    category: 'JavaScript',
    question: 'What is the purpose of the Promise object?',
    options: ['Handle async operations', 'Handle errors', 'Handle events', 'Handle callbacks'],
    correct: 0,
    explanation: 'Promise represents the eventual completion (or failure) of an asynchronous operation.'
  },
  {
    id: 104,
    category: 'JavaScript',
    question: 'Which method is used to find the first element that satisfies a condition?',
    options: ['find()', 'filter()', 'search()', 'locate()'],
    correct: 0,
    explanation: 'find() returns the first element in an array that satisfies a testing function.'
  },
  {
    id: 105,
    category: 'JavaScript',
    question: 'What is the purpose of the destructuring assignment?',
    options: ['Extract values from objects/arrays', 'Create objects', 'Delete properties', 'Merge objects'],
    correct: 0,
    explanation: 'Destructuring extracts values from objects or arrays into distinct variables.'
  },
  {
    id: 106,
    category: 'JavaScript',
    question: 'Which method is used to check if all elements pass a test?',
    options: ['every()', 'some()', 'all()', 'each()'],
    correct: 0,
    explanation: 'every() tests whether all elements in an array pass a test.'
  },
  {
    id: 107,
    category: 'JavaScript',
    question: 'What is the purpose of the Set object?',
    options: ['Store unique values', 'Store key-value pairs', 'Store ordered data', 'Store functions'],
    correct: 0,
    explanation: 'Set stores unique values of any type.'
  },
  {
    id: 108,
    category: 'JavaScript',
    question: 'Which method is used to reverse an array?',
    options: ['reverse()', 'sort()', 'flip()', 'invert()'],
    correct: 0,
    explanation: 'reverse() reverses the order of elements in an array.'
  },
  {
    id: 109,
    category: 'JavaScript',
    question: 'What is the purpose of the Map object?',
    options: ['Store key-value pairs', 'Store unique values', 'Store arrays', 'Store functions'],
    correct: 0,
    explanation: 'Map holds key-value pairs and remembers the original insertion order.'
  },
  {
    id: 110,
    category: 'JavaScript',
    question: 'Which method is used to check if any element passes a test?',
    options: ['some()', 'every()', 'any()', 'exists()'],
    correct: 0,
    explanation: 'some() tests whether at least one element in an array passes a test.'
  },
  {
    id: 111,
    category: 'JavaScript',
    question: 'What is the purpose of the try-catch-finally statement?',
    options: ['Handle exceptions', 'Handle events', 'Handle loops', 'Handle conditions'],
    correct: 0,
    explanation: 'try-catch-finally handles exceptions and errors in JavaScript code.'
  },
  {
    id: 112,
    category: 'JavaScript',
    question: 'Which method is used to execute a function repeatedly?',
    options: ['setInterval()', 'setTimeout()', 'repeat()', 'loop()'],
    correct: 0,
    explanation: 'setInterval() calls a function repeatedly with a fixed time delay between calls.'
  },
  {
    id: 113,
    category: 'JavaScript',
    question: 'What is the purpose of the class keyword?',
    options: ['Create classes', 'Create objects', 'Create functions', 'Create modules'],
    correct: 0,
    explanation: 'class creates a blueprint for objects with properties and methods.'
  },
  {
    id: 114,
    category: 'JavaScript',
    question: 'Which method is used to convert a string to lowercase?',
    options: ['toLowerCase()', 'lower()', 'toLower()', 'convertToLower()'],
    correct: 0,
    explanation: 'toLowerCase() converts a string to lowercase letters.'
  },
  {
    id: 115,
    category: 'JavaScript',
    question: 'What is the purpose of the extends keyword?',
    options: ['Class inheritance', 'Interface implementation', 'Module import', 'Function extension'],
    correct: 0,
    explanation: 'extends is used to create a class that is a child of another class.'
  },
  {
    id: 116,
    category: 'JavaScript',
    question: 'Which method is used to remove whitespace from both ends of a string?',
    options: ['trim()', 'strip()', 'clean()', 'remove()'],
    correct: 0,
    explanation: 'trim() removes whitespace from both ends of a string.'
  },
  {
    id: 117,
    category: 'JavaScript',
    question: 'What is the purpose of the super keyword?',
    options: ['Call parent constructor', 'Call child constructor', 'Call sibling constructor', 'Call static constructor'],
    correct: 0,
    explanation: 'super is used to call the constructor of the parent class.'
  },
  {
    id: 118,
    category: 'JavaScript',
    question: 'Which method is used to check if a string starts with a specific substring?',
    options: ['startsWith()', 'beginsWith()', 'starts()', 'begin()'],
    correct: 0,
    explanation: 'startsWith() determines whether a string begins with the characters of a specified string.'
  },
  {
    id: 119,
    category: 'JavaScript',
    question: 'What is the purpose of the static keyword?',
    options: ['Define static methods', 'Define constants', 'Define private methods', 'Define abstract methods'],
    correct: 0,
    explanation: 'static defines a method or property that belongs to the class rather than instances.'
  },
  {
    id: 120,
    category: 'JavaScript',
    question: 'Which method is used to check if a string ends with a specific substring?',
    options: ['endsWith()', 'finishesWith()', 'ends()', 'finish()'],
    correct: 0,
    explanation: 'endsWith() determines whether a string ends with the characters of a specified string.'
  },
  {
    id: 121,
    category: 'JavaScript',
    question: 'What is the purpose of the import/export syntax?',
    options: ['Module system', 'Error handling', 'Event handling', 'Async operations'],
    correct: 0,
    explanation: 'import/export is used for JavaScript modules to share code between files.'
  },
  {
    id: 122,
    category: 'JavaScript',
    question: 'Which method is used to repeat a string?',
    options: ['repeat()', 'duplicate()', 'copy()', 'multiply()'],
    correct: 0,
    explanation: 'repeat() constructs and returns a new string which contains the specified number of copies of the string.'
  },
  {
    id: 123,
    category: 'JavaScript',
    question: 'What is the purpose of the Symbol type?',
    options: ['Create unique identifiers', 'Create symbols', 'Create constants', 'Create functions'],
    correct: 0,
    explanation: 'Symbol is a primitive data type used to create unique property keys.'
  },
  {
    id: 124,
    category: 'JavaScript',
    question: 'Which method is used to check if a string includes a specific substring?',
    options: ['includes()', 'contains()', 'has()', 'exists()'],
    correct: 0,
    explanation: 'includes() performs a case-sensitive search to determine whether one string may be found within another.'
  },
  {
    id: 125,
    category: 'JavaScript',
    question: 'What is the purpose of the Proxy object?',
    options: ['Intercept operations', 'Create proxies', 'Handle network requests', 'Cache data'],
    correct: 0,
    explanation: 'Proxy allows you to intercept and define custom behavior for fundamental operations.'
  },
  {
    id: 126,
    category: 'JavaScript',
    question: 'Which method is used to pad the start of a string?',
    options: ['padStart()', 'startPad()', 'leftPad()', 'beginPad()'],
    correct: 0,
    explanation: 'padStart() pads the current string with another string until it reaches the desired length.'
  },
  {
    id: 127,
    category: 'JavaScript',
    question: 'What is the purpose of the Reflect object?',
    options: ['Meta-programming operations', 'Reflection', 'Introspection', 'All of the above'],
    correct: 3,
    explanation: 'Reflect provides methods for interceptable JavaScript operations, similar to Proxy handlers.'
  },
  {
    id: 128,
    category: 'JavaScript',
    question: 'Which method is used to pad the end of a string?',
    options: ['padEnd()', 'endPad()', 'rightPad()', 'finishPad()'],
    correct: 0,
    explanation: 'padEnd() pads the current string from the end with a given string to reach a certain length.'
  },
  {
    id: 129,
    category: 'JavaScript',
    question: 'What is the purpose of the BigInt type?',
    options: ['Handle large integers', 'Handle decimals', 'Handle strings', 'Handle objects'],
    correct: 0,
    explanation: 'BigInt is used to represent integers of arbitrary precision, larger than Number.MAX_SAFE_INTEGER.'
  },
  {
    id: 130,
    category: 'JavaScript',
    question: 'Which method is used to find the last index of an element in an array?',
    options: ['lastIndexOf()', 'findLast()', 'searchLast()', 'locateLast()'],
    correct: 0,
    explanation: 'lastIndexOf() returns the last index at which a given element can be found in the array.'
  },
  {
    id: 131,
    category: 'JavaScript',
    question: 'What is the purpose of the nullish coalescing operator (??)?',
    options: ['Provide default values', 'Check null values', 'Handle undefined', 'All of the above'],
    correct: 3,
    explanation: '?? returns the right-hand operand when the left-hand operand is null or undefined.'
  },
  {
    id: 132,
    category: 'JavaScript',
    question: 'Which method is used to flatten an array?',
    options: ['flat()', 'flatten()', 'reduce()', 'expand()'],
    correct: 0,
    explanation: 'flat() creates a new array with all sub-array elements concatenated into it recursively.'
  },
  {
    id: 133,
    category: 'JavaScript',
    question: 'What is the purpose of the optional chaining operator (?.)?',
    options: ['Access nested properties', 'Chain methods', 'Optional parameters', 'Conditional execution'],
    correct: 0,
    explanation: '?. permits reading the value of a property located deep within a chain of connected objects.'
  },
  {
    id: 134,
    category: 'JavaScript',
    question: 'Which method is used to create a new array from array-like objects?',
    options: ['Array.from()', 'Array.of()', 'Array.create()', 'Array.make()'],
    correct: 0,
    explanation: 'Array.from() creates a new array from an array-like or iterable object.'
  },
  {
    id: 135,
    category: 'JavaScript',
    question: 'What is the purpose of the logical assignment operators (&&=, ||=, ??=)?',
    options: ['Combine logical and assignment', 'Logical operations', 'Assignment operations', 'Conditional assignment'],
    correct: 0,
    explanation: 'Logical assignment operators combine logical operations with assignment.'
  },
  {
    id: 136,
    category: 'JavaScript',
    question: 'Which method is used to create a new array with variable arguments?',
    options: ['Array.of()', 'Array.from()', 'Array.create()', 'Array.make()'],
    correct: 0,
    explanation: 'Array.of() creates a new Array instance from a variable number of arguments.'
  },
  {
    id: 137,
    category: 'JavaScript',
    question: 'What is the purpose of the globalThis object?',
    options: ['Access global this', 'Global scope', 'Window object', 'All of the above'],
    correct: 3,
    explanation: 'globalThis provides a standard way to access the global this value across different JavaScript environments.'
  },
  {
    id: 138,
    category: 'JavaScript',
    question: 'Which method is used to check if a value is NaN?',
    options: ['isNaN()', 'isNotANumber()', 'checkNaN()', 'validateNaN()'],
    correct: 0,
    explanation: 'isNaN() determines whether a value is NaN (Not-A-Number).'
  },
  {
    id: 139,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.freeze() method?',
    options: ['Prevent object modification', 'Freeze object properties', 'Lock object', 'Seal object'],
    correct: 0,
    explanation: 'Object.freeze() prevents modification of existing property attributes and prevents addition of new properties.'
  },
  {
    id: 140,
    category: 'JavaScript',
    question: 'Which method is used to check if a value is finite?',
    options: ['isFinite()', 'checkFinite()', 'validateFinite()', 'testFinite()'],
    correct: 0,
    explanation: 'isFinite() determines whether a value is a finite number.'
  },
  {
    id: 141,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.seal() method?',
    options: ['Prevent addition/deletion of properties', 'Seal object', 'Lock object', 'Freeze object'],
    correct: 0,
    explanation: 'Object.seal() prevents new properties from being added and marks existing properties as non-configurable.'
  },
  {
    id: 142,
    category: 'JavaScript',
    question: 'Which method is used to parse an integer from a string?',
    options: ['parseInt()', 'parseInteger()', 'toInt()', 'convertToInt()'],
    correct: 0,
    explanation: 'parseInt() parses a string argument and returns an integer of the specified radix.'
  },
  {
    id: 143,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.keys() method?',
    options: ['Get object keys', 'Get object values', 'Get object entries', 'Get object properties'],
    correct: 0,
    explanation: 'Object.keys() returns an array of a given object\'s own enumerable property names.'
  },
  {
    id: 144,
    category: 'JavaScript',
    question: 'Which method is used to parse a floating-point number from a string?',
    options: ['parseFloat()', 'parseFloat()', 'toFloat()', 'convertToFloat()'],
    correct: 0,
    explanation: 'parseFloat() parses a string argument and returns a floating-point number.'
  },
  {
    id: 145,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.values() method?',
    options: ['Get object values', 'Get object keys', 'Get object entries', 'Get object properties'],
    correct: 0,
    explanation: 'Object.values() returns an array of a given object\'s own enumerable property values.'
  },
  {
    id: 146,
    category: 'JavaScript',
    question: 'Which method is used to encode a URI?',
    options: ['encodeURI()', 'escape()', 'encode()', 'uriEncode()'],
    correct: 0,
    explanation: 'encodeURI() encodes a URI by replacing certain characters with escape sequences.'
  },
  {
    id: 147,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.entries() method?',
    options: ['Get object entries', 'Get object keys', 'Get object values', 'Get object properties'],
    correct: 0,
    explanation: 'Object.entries() returns an array of a given object\'s own enumerable string-keyed property [key, value] pairs.'
  },
  {
    id: 148,
    category: 'JavaScript',
    question: 'Which method is used to decode a URI?',
    options: ['decodeURI()', 'unescape()', 'decode()', 'uriDecode()'],
    correct: 0,
    explanation: 'decodeURI() decodes a URI previously created by encodeURI().'
  },
  {
    id: 149,
    category: 'JavaScript',
    question: 'What is the purpose of the Object.assign() method?',
    options: ['Copy object properties', 'Merge objects', 'Clone objects', 'All of the above'],
    correct: 3,
    explanation: 'Object.assign() copies all enumerable own properties from one or more source objects to a target object.'
  },
  {
    id: 150,
    category: 'JavaScript',
    question: 'Which method is used to evaluate JavaScript code from a string?',
    options: ['eval()', 'execute()', 'run()', 'compile()'],
    correct: 0,
    explanation: 'eval() evaluates JavaScript code represented as a string.'
  }
] // Additional PHP Questions (51-100)
  {
    id: 51,
    category: 'PHP',
    question: 'What is the difference between include and require?',
    options: ['include throws warning on failure, require throws fatal error', 'require throws warning, include throws fatal error', 'Both are same', 'None of the above'],
    correct: 0,
    explanation: 'include produces a warning if the file is not found, while require produces a fatal error.'
  },
  {
    id: 52,
    category: 'PHP',
    question: 'How do you check if a variable is set and not null?',
    options: ['isset()', 'empty()', 'is_null()', 'defined()'],
    correct: 0,
    explanation: 'isset() checks if a variable is set and is not NULL.'
  },
  {
    id: 53,
    category: 'PHP',
    question: 'What is the purpose of the $_FILES superglobal?',
    options: ['Handle file uploads', 'Handle form data', 'Handle cookies', 'Handle sessions'],
    correct: 0,
    explanation: '$_FILES contains information about uploaded files.'
  },
  {
    id: 54,
    category: 'PHP',
    question: 'How do you create a cookie in PHP?',
    options: ['setcookie()', 'create_cookie()', 'cookie_set()', 'add_cookie()'],
    correct: 0,
    explanation: 'setcookie() defines a cookie to be sent along with the rest of the HTTP headers.'
  },
  {
    id: 55,
    category: 'PHP',
    question: 'What is the purpose of the session_destroy() function?',
    options: ['Destroy session data', 'Start a session', 'Regenerate session ID', 'Set session variables'],
    correct: 0,
    explanation: 'session_destroy() destroys all data registered to a session.'
  },
  {
    id: 56,
    category: 'PHP',
    question: 'How do you handle file uploads in PHP?',
    options: ['Using $_FILES superglobal', 'Using $_POST', 'Using $_GET', 'Using $_REQUEST'],
    correct: 0,
    explanation: '$_FILES superglobal is used to handle file uploads.'
  },
  {
    id: 57,
    category: 'PHP',
    question: 'What is the difference between GET and POST methods?',
    options: ['GET sends data in URL, POST in body', 'POST sends data in URL, GET in body', 'Both send data in URL', 'Both send data in body'],
    correct: 0,
    explanation: 'GET appends data to the URL, while POST sends data in the request body.'
  },
  {
    id: 58,
    category: 'PHP',
    question: 'How do you validate email addresses in PHP?',
    options: ['filter_var() with FILTER_VALIDATE_EMAIL', 'preg_match()', 'Both', 'None'],
    correct: 2,
    explanation: 'Both filter_var() and preg_match() can be used for email validation.'
  },
  {
    id: 59,
    category: 'PHP',
    question: 'What is the use of the filter_var() function?',
    options: ['Validate and sanitize data', 'Filter arrays', 'Filter objects', 'Filter files'],
    correct: 0,
    explanation: 'filter_var() filters a variable with a specified filter.'
  },
  {
    id: 60,
    category: 'PHP',
    question: 'How do you connect to a database using PDO?',
    options: ['new PDO()', 'pdo_connect()', 'connect_pdo()', 'pdo_new()'],
    correct: 0,
    explanation: 'PDO connection is created using new PDO().'
  },
  {
    id: 61,
    category: 'PHP',
    question: 'What are prepared statements in PHP?',
