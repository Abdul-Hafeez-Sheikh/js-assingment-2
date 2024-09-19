// CHAPTER 6 TO 9 //

// Q 1 // 

var a = 10 ;
document.write("The value of a is: " + a + "<br>..................................................<br><br>");

document.write("The value of ++a is : " + (++a) +  "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
//......//

// Q 2 //

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is:", a + "<br>");       // Final value of a
document.write("b is :", b + "<br>");       // Final value of b
document.write("result is:", result + "<br>");  // Final value of result
//.......//

// Q 3 // 

var name = prompt("Please enter your name:");

if (name) {
    alert("Hello, " + name );
} 
//......//

//  Q 5 //

var number = prompt("Please enter a number to display its multiplication table:");

if (!number) {
    number = 5;
} else {
    number = (number); 
}


document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");
//.....//

// Q 6 //


        // Take three subjects' names from the user
        var subject1 = prompt("Enter the name of the first subject:");
        var subject2 = prompt("Enter the name of the second subject:");
        var subject3 = prompt("Enter the name of the third subject:");

        //  Total marks for each subject
        var totalMarksPerSubject = 100;

        var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
        obtainedMarks1 = parseInt(obtainedMarks1); // Convert to integer

        var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
        obtainedMarks2 = parseInt(obtainedMarks2); // Convert to integer
        var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");
        obtainedMarks3 = parseInt(obtainedMarks3); // Convert to integer

        var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        var totalMarks = totalMarksPerSubject * 3;
        var percentage = (totalObtainedMarks / totalMarks) * 100;

        document.write("<h2>Results</h2>");
        document.write("<table border='1'>");
        document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>");
        document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>");
        document.write("</table>");
        document.write("<br>Total Marks: " + totalMarks);
        document.write("<br>Total Obtained Marks: " + totalObtainedMarks);
        document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
   
//.....//


// CHAPTER 9 TO 11 //

// Q 1 //
var city =prompt("enter the name of your city")
if(city==="karachi"){
    alert("Welcome to the city of lights")
}
//.....//

// Q 2 //

var gender =prompt("Whats your gender?")
if(gender==="male"){
    alert("Good Morning Sir.")
}else if (gender === "female") {
    alert("Good Morning Ma’am");
}
//.....//

// Q 3 //
var traffic =prompt("Enter the color of traffic signal")
if(traffic==="Red"){
    alert("Must Stop")
}else if (traffic==="Yellow"){
    alert("Ready To Move")
} else if (traffic === "green") {
    alert("Move Now");
}
//....//

// Q 4 //

        var fuel = prompt("Enter the remaining fuel in your car (in litres):");

               if (fuel < 0.25) {
            alert("Please refill the fuel in your car");
        } else {
            alert("You have enough fuel");
        }
        //....//

        // Q 5 //

         var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}



 if("car" < "cat"){
alert("car is smaller than cat");
}
//.....//


// Q 7 //

var num = 8;
var secretNumber = +prompt("Guess the secret number.");
if (num===secretNumber){
    alert("Bingo Correct!")
}else if (secretNumber=== num+1){
    alert("“Close enough to the correct answer”.")
}
   //......//

   // Q 8 //

   var num2 = +prompt("Enter Number");
   if(num2 % 3 === 0){
    alert("This number is divisble by 3");
   } else {
    alert("This number is not divisble by 3");
   }

   //.......//

   // Q 9 //

   var num3 = +prompt("Enter odd or even Number");
   if(num3 % 2 === 0){
    alert("Even Number");
   } else{
    alert("Odd Number")
   }

   //......//

   // Q 10 //

   var temp = +prompt("Enter temperature")
   if(temp > 40){
    alert("“It is too hot outside.”")
   } else if (temp > 30){
    alert("“The Weather today is Normal.”")
   }else if (temp > 20){
    alert("“Today’s Weather is cool.”")
   }else if (temp > 10){
    alert("“OMG! Today’s weather is so Cool.”")
   }
   //......//

   // Q 11 //

   
        // Prompt the user to enter the first number
        var num1 = prompt("Enter the first number:");
        num1 = parseFloat(num1); // Convert the input to a floating-point number

        // Prompt the user to enter the second number
        var num2 = prompt("Enter the second number:");
        num2 = parseFloat(num2); // Convert the input to a floating-point number

        // Prompt the user to enter the operation
        var operation = prompt("Enter the operation (+, -, *, /, %):");

        // Declare a variable to store the result
        var result;

        // Use if statements to perform the appropriate operation
        if (operation === "+") {
            result = num1 + num2;
        } else if (operation === "-") {
            result = num1 - num2;
        } else if (operation === "*") {
            result = num1 * num2;
        } else if (operation === "/") {
            if (num2 === 0) {
                result = "Error: Division by zero is not allowed";
            } else {
                result = num1 / num2;
            }
        } else if (operation === "%") {
            if (num2 === 0) {
                result = "Error: Modulus by zero is not allowed";
            } else {
                result = num1 % num2;
            }
        } else {
            result = "Invalid operation! Please enter one of +, -, *, /, %.";
        }

        // Display the result in an alert box
        alert("First Number: " + num1 + "\n" +
              "Second Number: " + num2 + "\n" +
              "Operation: " + operation + "\n" +
              "Result: " + result);
   //.....//


// CHAPTER 12 T0 13 //



// Q 1 //

   var input = prompt("Enter a character: ");
var asciiValue = input.charCodeAt(0);

if (asciiValue > 47 && asciiValue < 58) {
    alert("The input is a number.");
} else if (asciiValue > 64 && asciiValue < 91) {
    alert("The input is an uppercase letter.");
} else if (asciiValue > 96 && asciiValue < 123) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is neither a number nor a letter.");
}
//.....//

// Q 2 //

// Accept two integers from the user
var numA = +prompt("Enter the first integer: "); 
var numB = +prompt("Enter the second integer: ");

if (numA > numB) {
    alert(numA + " is larger than " + numB);
} else if (numB > numA) {
    alert(numB + " is larger than " + numA);
} else {
    alert("Both numbers are equal.");
}
//......//

// Q 3 //

var input = prompt("Enter a number:");

var numberC = +input; 

if (numberC > 0) {
    alert("The number is positive.");
} else if (numberC < 0) {
    alert("The number is negative.");
} else if (numberC === 0) {
    alert("The number is zero.");
} 
//......//

// Q 4 //

// Prompt the user to enter a single character
var input = prompt("Enter a single character:");

// Define an array of vowels (both lowercase and uppercase)
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// Ensure the input is exactly one character long
if (input.length === 1) {
    // Check if the character is in the vowels array
    if (vowels.includes(input)) {
        alert(true); // The character is a vowel
    } else {
        alert(false); // The character is not a vowel
    }
} 

// Q 5 //
var correctPassword = 'hafeez123@';

var userPassword = prompt("Please enter your password:");


if (userPassword === null || userPassword === '') {
    alert("Please enter your password");
} else {
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password");
    }
}

//....//

// Q 6 //

var greeting =prompt("Enter hour")
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);
