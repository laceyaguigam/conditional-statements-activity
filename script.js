// Declare a new variable “myGrade” and assign a number value from 0-100 to it.

let myGrade = 88;

// Write an if/else-if/else statement that displays the letter grade using console.log(...) (A for 90+, B for 80-89, C for 70-79, D for 60-69, F for 59 and below)

myGrade = 88;

if (myGrade >= 90 ) {
    console.log("A");
    if (myGrade >= 80) {
       console.log("B"); 
    }
     else if (myGrade >= 70) {
        console.log("C"); 
     } 
     else if (myGrade >= 60) {
        console.log("D"); 
     }
} else (myGrade <= 59) 
    console.log("F");


 console.log(myGrade);



// Modify the value inside of “myGrade” to test your code.

//my code did not work, it only gave F when it should have shown a B. When I changed the greater than to a less than
// then it showed multiple letter grades


// What should go in your else statement?

//the final grading scale should go into the else statement?

// Write a switch statement that does the same thing as the if/else-if/else statement above. 

myGrade = 88;

switch (myGrade) {
    case 1: (myGrade >= 90 )
    console.log("A")
        break;
    case 2: (myGrade >= 80) 
    console.log("B")
        break;    
    case 3: (myGrade >= 70)
    console.log("C")
        break;
    case 4: (myGrade >= 60)
    console.log("D")
        break;
    case 5: (myGrade <= 59) 
    console.log("F")
        break;
    
}

// Which do you prefer? Why? // Which version of the code looks cleaner/easier to understand to you? Why?

// I like the switch statement because it looks like its more organized when there is more blocks of code
// and its easier to read, the if/else-if/else statements are harder for my brain to process 




// Write a for loop that prints all value from 1 to 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Modify your for loop to make it output an exclamation point for all odd numbers instead of the number.

