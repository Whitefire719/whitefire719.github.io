/*
****LOOPS****
*
*
* Loops are used to execute a block of code multiple times until a condition is met. If no condition is met the loop will 
* loop infinitetly and likely crash your browser!. There are several kinds of loops.
*
*
****FOR LOOPS****
*
* For loops loop through a block of code multiple times until it reaches it's "stop" point. The general syntax for them is the "for"
keyword followed by (starting point, stopping point, and the increment or decrement used whenever a loop loops once,).
*
* Example
*/ 
    for(let i = 0; i < 10; i++) {
        return "Less than 10";
    }
/* In the above eaxmple the loop is set to start at 0, and will contine to run until the condition in the middle is no longer met in this case
* being less than 10. The ++ operator indicates the loop will increase by 1 each time the code block is executed.

* You can also use a for loop to loop backwards through given values.
*
* Example
*/ for(let i = 10; i>= 0; i--) {
/* In this example the loop will start at 10 and conitue to decrement until it reaches 0 as denoted by the -- operator.
}
* 
* For loops can also be used to loop through arrays.
*
* Example
*/ let thisArr = ["Sonic", "Knuckles", "Tails", "Dr. Eggman"]
    for(let i = 0; i < thisArr.length; i++)
/* In the above example the loop will start at the beginning of the array and will continue to loop until it reaches the end of the array
* as denoted by the .length property. Each time the loop is executed it will go to the next element of the array as denoted by the ++ operator.
*
* You can also loop through arrays backwards using a for loop.
*
* Example
*/ for(let i = thisArr.length - 1; i >= 0; i--)
/* In this example, the loop starts at the end of the array and will continue looping until it reaches the beginning of the array. Each time the loop
* is executed it will proceed to the element before it as denoted by the -- operator.
*
*
*
****WHILE LOOPS****
*
* While loops will continue to execute a block of code while a specified condition is true and are denoted using the "while" keyword.
*
* Example

*/ while(i < 5) {
    console.log("The number is " + i);
    i++;
}
/* In the above example, the code will keep executing while i is less than 5. 
*
*
*
****FOR IN LOOPS****
*
* For in loops are used to loop through the properties of objects. 
*
* Example
*
*/ let elementals = {
    fire: "fiery",
    water: "watery",
    air: "airy",
    earth: "earthy"
}

    for(var i in elementals) {
        console.log(i + " : " + elementals[i]);
    }
    
/* In the above example the for in loop is looping through the key value pairs of the elementals object.
i is they key and elementals[i] is the value.
The results of the console.log will be fire: "fiery",
                                        water: "watery",
                                        air: "airy",
                                         earth: "earthy"