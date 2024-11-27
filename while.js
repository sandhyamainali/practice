// var a=1;
// while (a<=10){
//     document.write(`<h1> loop ${a}</h1>`);
//     a++;
// }

// var a=12;
// while (a>=1){
//     document.write(`<h1>${a}</h2>`);
//     a--;
    
// }
//do while

// let sum=0;
// let number;
// do{
//     number=parseInt(prompt("Enter a number"));
//     sum+=number;
// }while (number !=0);
// document.write(`<h1>${sum}</h1>`);




// var num;
// var sum = 0; // Initialize sum to 0, not num + 1

// do {
//     num = parseInt(prompt("Enter a number")); // Prompt the user to enter a number
//     if (!isNaN(num)) { // Ensure valid number input
//         sum += num; // Add the input to sum
//     }
// } while (num != 5); // Continue until the user enters 5

// document.write(`<h1>The sum is: ${sum}</h1>`); // Output the result


function countDigits(number) {
    // Convert the number to an absolute integer to handle negative values
    number = Math.abs(number);

    // Convert the number to a string and count its length
    return number.toString().length;
}

// Example usage
let num = parseInt(prompt("Enter a number:"));
let digitCount = countDigits(num);
console.log(`The number ${num} has ${digitCount} digits.`);
