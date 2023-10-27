//! Q NO 1 //


// function power(a, b) {
//     let result = 1;
//     for (let i = 1; i <= b; i++) {
//         result *= a;
//     }
//     return result;
// }

// // Example usage
// let base = parseInt(prompt("Enter the base:"));
// let exponent = parseInt(prompt("Enter the exponent:"));
// let result = power(base, exponent);
// console.log(`${base} raised to the power ${exponent} is: ${result}`);





//! Q NO 2 //

// let year = +prompt("Enter a year ");


// function isLeap(year){
//     if( year % 4 == 0 && year % 100 !== 0 ){
  
//         return true;
    
//     }else if( year % 400 == 0){
//        return true
//     }
// }   


// if(isLeap(year)){
//     document.write( year ,"is a leap year")
// }
// else{
//     document.write( year ,"is not a leap year")
// }

//! Q NO 3 //

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// // Function to calculate area of the triangle using semi-perimeter and side lengths
// function calculateTriangleArea(a, b, c) {
//     var s = calculateSemiPerimeter(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// // Example side lengths of the triangle
// var sideA = parseFloat(prompt("Enter length of side A:"));
// var sideB = parseFloat(prompt("Enter length of side B:"));
// var sideC = parseFloat(prompt("Enter length of side C:"));

// // Calculate and output the area of the triangle
// var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log("Area of the triangle is: " + triangleArea);


//! Q NO 4 // 

// // Function to calculate average of marks
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// // Function to calculate percentage of marks
// function calculatePercentage(subject1, subject2, subject3) {
//     const totalMarks = 300; // Assuming each subject has a maximum of 100 marks
//     const obtainedMarks = subject1 + subject2 + subject3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// // Main function to call other functions and display results
// function mainFunction() {
//     let subject1 = parseFloat(prompt("Enter marks for subject 1:"));
//     let subject2 = parseFloat(prompt("Enter marks for subject 2:"));
//     let subject3 = parseFloat(prompt("Enter marks for subject 3:"));

//     // Call functions to calculate average and percentage
//     let average = calculateAverage(subject1, subject2, subject3);
//     let percentage = calculatePercentage(subject1, subject2, subject3);

//     // Display results
//     console.log("Average Marks: " + average.toFixed(2));
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
// }

// // Call the main function to start the program
// mainFunction();



//! Q NO 5 //

// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; // Return -1 if the character is not found in the string
// }

// // Example usage
// let inputString = prompt("Enter a string:");
// let searchChar = prompt("Enter a character to search:");

// let position = customIndexOf(inputString, searchChar);

// if (position !== -1) {
//     console.log(`The character '${searchChar}' is found at index ${position}.`);
// } else {
//     console.log(`The character '${searchChar}' is not found in the string.`);
// }

//! Q no 6 //
// function removeVowels(sentence) {
//     // Define a string containing all vowels
//     const vowels = "aeiouAEIOU";
//     let result = "";

//     // Iterate through the characters in the sentence
//     for (let i = 0; i < sentence.length; i++) {
//         // If the current character is not a vowel, add it to the result string
//         if (vowels.indexOf(sentence[i]) === -1) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// // Example usage
// let inputSentence = prompt("Enter a sentence (not more than 25 characters):");

// // Check if the input sentence is not more than 25 characters long
// if (inputSentence.length <= 25) {
//     let result = removeVowels(inputSentence);
//     console.log("Sentence without vowels: " + result);
// } else {
//     console.log("Error: Input sentence is more than 25 characters long.");
// }

//! Q NO 7 //

// function countSuccessiveVowels(text) {
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i].toLowerCase();
//         let nextChar = text[i + 1].toLowerCase();

//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                     default:
//                         break;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }

//     return count;
// }

// // Example usage
// let inputText = prompt("Enter a line of text:");
// let occurrences = countSuccessiveVowels(inputText);
// console.log(`Number of occurrences of two successive vowels: ${occurrences}`);


//! Q NO 8 //

// function kilometersToMeters(distanceInKm) {
//     return distanceInKm * 1000;
// }

// function kilometersToFeet(distanceInKm) {
//     const feetInAKilometer = 3280.84;
//     return distanceInKm * feetInAKilometer;
// }

// function kilometersToInches(distanceInKm) {
//     const inchesInAKilometer = 39370.1;
//     return distanceInKm * inchesInAKilometer;
// }

// function kilometersToCentimeters(distanceInKm) {
//     return distanceInKm * 100000;
// }

// // Example usage
// let distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// let distanceInMeters = kilometersToMeters(distanceInKm);
// let distanceInFeet = kilometersToFeet(distanceInKm);
// let distanceInInches = kilometersToInches(distanceInKm);
// let distanceInCentimeters = kilometersToCentimeters(distanceInKm);

// console.log(`Distance in meters: ${distanceInMeters} meters`);
// console.log(`Distance in feet: ${distanceInFeet} feet`);
// console.log(`Distance in inches: ${distanceInInches} inches`);
// console.log(`Distance in centimeters: ${distanceInCentimeters} centimeters`);


//! Q NO 9 //

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
//     let overtimeHours = 0;
//     let overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// // Example usage
// let hoursWorked = parseInt(prompt("Enter the number of hours worked by the employee:"));

// let overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);


//! Q NO 10 //


function calculateCurrencyNotes(amount) {
    const denomination100 = 100;
    const denomination50 = 50;
    const denomination10 = 10;

    let notes100 = Math.floor(amount); // Number of 100 rupees notes
    let remainingAmount = amount - notes100; // Remaining amount after considering 100 rupees notes
    let notes50 = Math.floor(remainingAmount / (denomination50 / 100)); // Number of 50 rupees notes
    remainingAmount = remainingAmount % (denomination50 / 100); // Remaining amount after considering 50 rupees notes
    let notes10 = Math.floor(remainingAmount / (denomination10 / 100)); // Number of 10 rupees notes

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}

// Example usage
let amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
let { notes100, notes50, notes10 } = calculateCurrencyNotes(amountInHundreds);

console.log(`Number of 100 rupees notes: ${notes100}`);
console.log(`Number of 50 rupees notes: ${notes50}`);
console.log(`Number of 10 rupees notes: ${notes10}`);

