let marks = [90, 85, 95, 80, 92]; // Example marks array

let highestMarks = marks.reduce((a, b) => a > b ? a : b); // Using the ternary operator to find the highest marks

console.log(`The highest marks scored in the class is ${highestMarks}.`); // Displaying the highest marks to the teacher using the console
