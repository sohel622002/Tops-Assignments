//To convert temperature from Fahrenheit to Celsius

// function fahrenheitToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }
// var fahrenheitTemperature = 68;
// var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
// console.log(
//   fahrenheitTemperature +
//     "°F is equal to " +
//     celsiusTemperature.toFixed(2) +
//     "°C"
// );

// function getFileExtension(filename) {
//   var dotIndex = filename.lastIndexOf(".");
//   if (dotIndex !== -1 && dotIndex !== 0 && dotIndex !== filename.length - 1) {
//     return filename.substring(dotIndex + 1);
//   } else {
//     return "Invalid filename or no extension found";
//   }
// }
// var filename = "example.txt";
// console.log(
//   "File extension of " + filename + ": " + getFileExtension(filename)
// );

// for (var i = 0; i < 5; i++) {
//     console.log("Iteration " + i);
// }

// var i = 0;
// while (i < 5) {
//     console.log("Iteration " + i);
//     i++;
// }

// var i = 0;
// do {
//     console.log("Iteration " + i);
//     i++;
// } while (i < 5);

// var day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("It's the start of the week!");
//         break;
//     case "Friday":
//         console.log("It's almost the weekend!");
//         break;
//     default:
//         console.log("It's a regular day.");
// }

// function checkNumber(number) {
//     if (number > 0) {
//         console.log(number + " is positive.");
//     } else if (number < 0) {
//         console.log(number + " is negative.");
//     } else {
//         console.log(number + " is zero.");
//     }
// }
// checkNumber(5);    // Output: 5 is positive.
// checkNumber(-3);   // Output: -3 is negative.
// checkNumber(0);    // Output: 0 is zero.

// function isVowel(character) {
//   var lowerCaseChar = character.toLowerCase();
//   if (
//     lowerCaseChar === "a" ||
//     lowerCaseChar === "e" ||
//     lowerCaseChar === "i" ||
//     lowerCaseChar === "o" ||
//     lowerCaseChar === "u"
//   ) {
//     return true; // The character is a vowel
//   } else {
//     return false; // The character is not a vowel
//   }
// }
// var char1 = "A";
// var char2 = "b";
// console.log(char1 + " is a vowel? " + isVowel(char1)); // Output: A is a vowel? true
// console.log(char2 + " is a vowel? " + isVowel(char2)); // Output: b is a vowel? false

// function checkEvenOrOdd(number) {
//     var result = (number % 2 === 0) ? "Even" : "Odd";
//     console.log(number + " is " + result + ".");
// }

// // Example usage:
// checkEvenOrOdd(4);  // Output: 4 is Even.
// checkEvenOrOdd(7);  // Output: 7 is Odd.

// function findMaxNumber(num1, num2, num3) {
//     var maxNumber = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);
//     console.log(maxNumber);
// }

// findMaxNumber(8, 4, 12);  // Output: 12
// findMaxNumber(15, 21, 18);  // Output: 21

// function findMinNumber(num1, num2, num3) {
//   var minNumber =
//     num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
//   console.log(minNumber);
// }

// findMinNumber(8, 4, 12); // Output: 4
// findMinNumber(15, 21, 18); // Output: 15S


// function getDayOfWeek(dayNumber) {
//   switch (dayNumber) {
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid day number");
//   }
// }
// getDayOfWeek(3); // Output: Wednesday
// getDayOfWeek(6); // Output: Saturday
// getDayOfWeek(8); // Output: Invalid day number


// for (var i = 972; i >= 897; i--) {
//     console.log(i);
// }

// function calculateFactorial(number) {
//     if (number < 0) return;
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     console.log(factorial);
// }
// calculateFactorial(5);  // Output: 120
// calculateFactorial(0);  // Output: 1
// calculateFactorial(-3); // Output: 

// function generateFibonacciSeries(limit) {
//     var fibonacciSeries = [0, 1];
//     for (var i = 2; i < limit; i++) {
//         var nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//         fibonacciSeries.push(nextNumber);
//     }
//     console.log("Fibonacci series up to " + limit + ": " + fibonacciSeries.join(', '));
// }

// generateFibonacciSeries(10);


// function reverseNumber(number) {
//     var reversedNumber = parseInt(number.toString().split('').reverse().join(''));
//     console.log("Original number: " + number);
//     console.log("Reversed number: " + reversedNumber);
// }
// reverseNumber(64728);


// function sumOfDigits(number) {
//     var numberString = number.toString();
//     var sum = 0;
//     for (var i = 0; i < numberString.length; i++) {
//         sum += parseInt(numberString[i]);
//     }
//     return sum;
// }
// var result = sumOfDigits(1523);
// console.log("Sum of the digits: " + result);  // Output: Sum of the digits: 11




// function sumOfFirstAndLastDigit(number) {
//     var numberString = number.toString();
//     var firstDigit = parseInt(numberString[0]);
//     var lastDigit = parseInt(numberString[numberString.length - 1]);
//     var sum = firstDigit + lastDigit;
//     return sum;
// }
// var result = sumOfFirstAndLastDigit(1234);
// console.log("Sum of the first and last digits: " + result);  // Output: Sum of the first and last digits: 5



// for (var i = 1; i <= 5; i++) {
//     var row = i + " ";
//     for (var j = 1; j <= 4; j++) {
//         row += Math.pow(i, j) + " ";
//     }
//     console.log(row);
// }



// for (var i = 1; i <= 5; i++) {
//     var row = "1";
//     for (var j = 1; j < i; j++) {
//         row += " 0 1";
//     }
//     console.log(row);
// }


// var currentChar = 65; // ASCII code for 'A'
// for (var i = 1; i <= 5; i++) {
//     var row = "";
//     for (var j = 1; j <= i; j++) {
//         row += String.fromCharCode(currentChar) + " ";
//         currentChar++;
//     }
//     console.log(row.trim());
// }


// var counter = 1;
// for (var i = 1; i <= 5; i++) {
//     var row = "";
//     for (var j = 1; j <= i; j++) {
//         row += counter + " ";
//         counter++;
//     }
//     console.log(row.trim());
// }


// for (var i = 1; i <= 5; i++) {
//     var row = "";
//     for (var j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row.trim());
// }


// function getCurrentDayAndTime() {
//     var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var currentTime = new Date();
//     var dayOfWeek = daysOfWeek[currentTime.getDay()];
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var meridiem = (hours >= 12) ? "PM" : "AM";
//     if (hours > 12) {
//         hours -= 12;
//     }
//     console.log(
//         "Today is " + 
//         dayOfWeek + 
//         ". Current Time is " + 
//         hours + " " + 
//         meridiem + ": " + 
//         (minutes < 10 ? "0" : "") + minutes);
// }
// getCurrentDayAndTime();


// function getCurrentDate() {
//     var currentDate = new Date();
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
//     var year = currentDate.getFullYear();
//     console.log(
//         "Current Date: " + 
//         year + "-" + 
//         (month < 10 ? "0" : "") + 
//         month + "-" + (day < 10 ? "0" : "") + 
//         day);
// }
// getCurrentDate();




// function convertArrayOfObjectsToCSV(data) {
//     var headers = Object.keys(data[0]);
//     var csv = headers.join(',') + '\n';
//     for (var obj of data) {
//         var row = headers.map(header => obj[header]).join(',');
//         csv += row + '\n';
//     }
//     return csv;
// }
// var arrayOfObjects = [
//     { name: "John", age: 30, city: "New York" },
//     { name: "Alice", age: 25, city: "London" },
//     { name: "Bob", age: 35, city: "Paris" }
// ];
// console.log(convertArrayOfObjectsToCSV(arrayOfObjects));


// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// var inputString = "hello world";S
// var capitalizedString = capitalizeFirstLetter(inputString);
// console.log(capitalizedString);  // Output: Hello world


// function isArray(variable) {
//     return Array.isArray(variable);
// }
// var arr = [1, 2, 3];
// var notArr = "Not an array";

// console.log(isArray(arr));    // Output: true
// console.log(isArray(notArr)); // Output: false


function cloneArray(originalArray) {
    return [...originalArray];
}
var originalArray = [1, 2, 3, 4, 5];
var clonedArray = cloneArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);














