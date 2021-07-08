/*
* CONTROL FLOW
*
* Control flow is the order in which the interpreter reads the code. Code runs from the first line in the file to the last line unless the interpeter comes across
* structures that change that flow such as conditional statements or loops. It is important to know the control flow of code in order to write logical code with minimal errors.


****IF, ELSE-IF, AND ELSE STATEMENTS****

* If, Else-if, and Else statements are known as conditional statements and specify which blocks of code are to be executed depending on what conditions are met.

* If statements are used to specify a block of code to be executed if a given condition results in TRUE. If statements go first because of this.

* Else statements are used to specify a block of code to be execute if a given condition results in FALSE. They are last in a conditional statement because of this.

* Else if statements are used to test a new condition if the first condition results in FALSE.  Because they can result in TRUE they follow if statements if there are multiple possible conditions that can result in TRUE.


* Example
*/ let timeOfDay = "Afternoon"
if(timeOfDay === "Morning") { // Because timeOfDay !== "Morning" this block of code is not executed and the next line is read
    return "Good Morning"
}
else if(timeOfDay === "Afternoon") { // Because timeOfDay does equal "Afternoon", this line of code will be executed
    return "Good Afternoon"
}
else return "Good Night" // Because an earlier condition was met this line of code is not executed. However if none of the other conditions were met, this line of code would be executed.

/****SWITCH****
 * 
 * The switch statement is used to perform a variety of actions based on a variety of conditions. It selects one block of code out of many to be executed depending on what condition is met.
 * The switch expression is evaluated once and it is compared to the values of each case. If there is a match, that block of code will be executed. If there is no match, a default code block is executed.
 * Break keywords are needed in each code block of a switch statement so that the code stops running when a condition has been met. The last code block does not need a break.
 * The default keyword in a switch statement tells the interpreter to execute a block of code if there is no match.
 * 
 * 
 * Example
 */ 
    const color = 'Blue'; // Condition to be met for the case is to equal "Blue"
switch (expr) {
  case 'Red': // This does not equal "Blue" so the code is not executed
    console.log('My favorite color is Red.');
    break;
  case 'Silver': // This is also not Blue so it is not returned
  case 'Blue': // This does meed the condition so this code block is executed
    console.log('My favorite color is Blue');
    
    break;
  default: // Because a condition has been met the default code block is not executed.
    console.log(`My favorite color isn't here`);
}


