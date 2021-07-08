/* 
* DATATYPES
****NUMBERS***
* Numbers are any kind of numeric value in Javascript. They are a simple data type which means they are immutable.
* They cannot hold or collect other values, and operations with simple values return new simple values without altering the original value.
* Like other simple data types they are copied by VALUE.

*Example
*/ var num = 5
    var arrNum = [12, 56, 32, 24, 37] // array of numbers
    var sumNum = num + 5 // Will result in 10 because num is copied strictly by value
    
/****STRINGS****
 * In Javascript, strings are used to store and manipulate text. A strng can be zero or more characters that are wrapped in quotes.
 * Numbers can be given string values. Strings are simple data types and are copied by VALUE. You can find the length of a string with the
 * .length property. 
 * 
 * Example
 */ var str = "bork"
    var stringy = "big borks"
    var numString = "22" // a number can be given a string value
    str.length // will return 4
    
/****BOOLEAN****
 * In Javascript, a boolean is one of two values: true or false. Booleans are useful when a conditional requirement has to be met: if x then y.
 * Comparison operators result in booleans, where if something has a "value" then true and if not then false. Booleans are also simple data types
 * and are copied by value.
 * 
 * Example
 */ if(12 > 10) { // Because 12 being greater than 10 is a true statement, the code below it will be executed
     return "Neato Burrito"
 }
    if(12 < 10) { // // Because 12 being less than 10 is a false statement the code below it will not be exectued and instead the else statement will be executed.
        return "That's no good"
    }
    else return "That is false"
    
/****ARRAYS****
 * In Javascript, arrays are used to store multiple values in a single variable. Arrays are denoted by square brackets wrapping multiple values that are seperated by commas. They are considered complex data types 
 * because they are a collection of data that can be dynamically changed and are copied by reference. Arrays are comprised of elements that can be accessed using bracket notation and the index
 * of the element. Arrays can be manipulated and iterated upon using a variety of methods such as .pop() and .push()
 * 
 * Example
 */ var arr = [] // an array literal, can be added to later on if need be
    var numArr = [12, 53, 43, 63, 89] // an array of numbers
    numArr[0] // is the value of 12 since it is the first element of the array
    var strArr = ["pikachu", "gengar", "charizard"] // an array of strings
    numArr.pop() // will return 89 and changes the length of the numArr array
    strArr.push("jigglypuff") // adds "jigglypuff" to the end of the strArr array
    
/****OBJECTS****
 * In Javascript, objects are like arrays in that they are a variable than can contain many values. The values in objects are written in key: value pairs. 
 * Objects are denoted with curly brackets and contain multiple values that can span multiple lines. The key value pairs in object collectively are called properties.
 * You can access properties in an object using either dot notation or bracket notation depending on what information is available to you. Like arrays, objects also 
 * have methods that can be used to manipulate or iterate on an object. Objects are a complex data type as they are a collection of data that can aggregate values
 * and are copied by reference. 
 * 
 * Example
 */ var obj = {} // an object literal
    var someObj = { // an object with several properties
        element1: "fire",
        element2: "water",
        element3: "wind",
        element4: "earth"
        
    }
    someObj.element2 // This will access the element2 key and the value of it can be changed through this 
    Object.keys(someObj) // This is a method that will return of all the keys of an object in an array. ex. ["element1", "element2", "element3", "element4"]
    Object.values(someObj) // This is a method that will return all of the values of an object in an array ex. ["fire", "water", "wind", "earth"]
    
/****FUNCTIONS****
 * Functions are blocks of code stored in a variable that can be called or invoked later on to run said code on an argument or arguments passed into the function. They are useful for when you need to reuse
 * a code block multiple times and are more efficient than writing out the code every time. A function is defined by using the function keyword  and/or a function name and parenthesis. The 
 * parameters of a function are listed inside of the parenthesis. The actual values that will be passed into the function are called arguments. A function can be invoked by using the function's name
 * and passing an argument in the parenthesis. Functions will often end in a return statement where the function stops executing and some kind of output is returned but not always. Functions can
 * be used as variables within other functions, as parameters in other functions, or functions within functions known as a function factory. Like arrays and objects, functions are complex data types
 * and are copied by reference.
 * 
 * Example
 */ function someFunc(array) { // declaring a function and setting a parameter
     if(array.length < 6) {
         return "Aren't you a little short for a stormtrooper"
     }                                                              // code to be executed whenever the function is called
     else return "This deal is getting worse all the time"
 }
    let thisArr = []
    someFunc(thisArr) // invoking the function amd passing thisArr as an argument
    
/****UNEDEFINED****
 * Undefined means that a variable has not been declared or has not been assigned a value. It is a simple data type as it can only ever have one value, undefined.
 * Can also occur if you try to call on variables outside of their scope. Unlike null, undefined occurs usually when a value is unintentionally missing.
 * 
 * Example
 */ var doesNotExist
    console.log(doesNotExist) // will return undefined because the variable has been declared but was never assigned a value
    
/****NULL****
 * null is used when an object's value needs to be intentionally nonexistent. It is treated as false for boolean operations.
 * null is a simple data type as it can only ever be one value which is null.
 * 
 * Example
 */ let noVal = null
 console.log(noVal) // returns null 
 
/***NAN(NOT A NUMBER)****
 * The NaN property stands for "Not-a-Number" It checks whetehr or not a value is a legal number. It uses the same property as the Number.Nan property.
 * It is a variable in the  global scope. NaN is a simple data type as it can only be one of two values. Is a number or isn't a number. It is returned 
 * when a math operation can't result in a real number or a number can't be parsed.
 * 
 * Example
 */ var fooBar = "this string" / 76 // results in NaN as a real number cannot be returned from this operation
 
 
 
 /****INFINITY AND -INFINITY****
  * Infinity is a numeric value that represents positive infinity while -Infinity is a numeric value that represents negative infinity. 
  * Infinity is displayed when a number exceeds the upper limit of floating point numbers: 1.797693134862315E+308.
  * -Infinity is displaed when a number exceeds the lower limit of floating point numbers : -1.797693134862315E+308.
  * 
  * 
  ****SIMPLE AND COMPLEX DATA TYPES****
  * Simple data types include: Numbers, Strings, Booleans, NaN, undefined, and null.
  * Simple data types are immutable meaning they only hold their own value as opposed to multiple values and operations involving simple values return other simple values without changing the original value.
  * They are copied by value which means they are hard copied from one variable to the next.
  * 
  * Complex data types include: Objects, Arrays, and Functions.
  * Complex data types can hold multiple values, have values added to it or taken away from it, and can be an indefinite size.
  * Complex data types are copied by reference which means they are copied with the variable that represents a collection of values. These collections can be updated or changed without changing the variable.
 