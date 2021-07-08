/*
****OPERATORS****
*
*
****ASSIGNMENT OPERATORS****
* Assignment operators are used to assign values to variables.
Operator                                           Example                                                    Same As
=  // Assigns a value to a variable	                x = y	                                                  x = y 
+= // adds a value to a variable	                x += y	                                                  x = x + y 
-= // subtracts value from a variable	            x -= y	                                                  x = x - y
*= // multiplies a variable	                        x *= y	                                                  x = x * y
/= // divides a variable	                        x /= y	                                                  x = x / y
%= // assigns a remainder to a variable	            x %= y	                                                  x = x % y
*
*
*
****ARITHMETIC OPERATORS****
* Arithmetic operators perform arithmetic on literal numbers or on variables.
*
*

Operator	        Description
+	                Addition
-	                Subtraction
*	                Multiplication
**	                Exponentiation 
/	                Division
%	                Remainder
++	                Increment
--	                Decrement
*
*
*
****COMPARISON OPERATORS****
*
* Comparison operators are used to test equality between values using the booleans true or false.
*
*
Operator	                Description	
==	                        equal to	
===                         strictly equal(equal value AND data type)
!=                          not equal
!==                         strictly not equal(value AND data type)
>                           greater than
<                           less than
>=                          greater than or equal to
<=                          less than or equal to
*
*
*
****LOGICAL OPERATORS****
*
* Like comparison operators, logical operators test the logic between values or variables using booleans true or false.
*
Operator                    Description
&&                          and
||                          or
!                           not
*
*
*
****TERNARY OPERATOR****
*
* Also known as a conditional operator, the ternary operator assigns a value to a variable based on a condition
*
* SYNTAX: variable = (some condition) ? result1 : result2
* Example
*/ let fast = (speed > 100) ? "very fast":"Too slow"
/* In the example if speed variable is greater than 100, the fast variable will be equal to "very fast"
* If the speed variable is less than 100, the fast variable will be equal to "Too slow"
*
*
*
****UNARY OPERATORS****
*
* Unary operators involve operations that only have one operand. This operand can come before or after the operator. They are more
* efficient than standard function calls and they cannot be overridden, meaning they will function as intended. Examples of unary
* opearators are !(bang), typeof, and -.
*
*
****!(BANG) OPERATOR****
*
* The ! operator is the logical "not" operator. Whenever it is placed in front of anything that results in a boolean value, it will return the opposite
of that boolean.
*
* Example
*/ let truVal = true; 
    if(10 > 5) {
        return !truVal // While the statement 10 > 5 is true and the value of truVal is true, the bang operator in front of truVal
                        // on the return statment means it will return false because it gives the opposite boolean value.
    }
/*
*
****TYPEOF OPERATOR****
*
* The typeof operator returns a string value of the data type of whatever it is called on. NOTE: Because arrays, objects, Date(), and null
* are all considered objects, typeof will return "object" for all of these.
*
*
typeof "Wade"                    // Returns "string"
typeof 7.5                       // Returns "number"
typeof NaN                       // Returns "number"
typeof false                     // Returns "boolean"
typeof [5, 6, 7, 8]              // Returns "object"
typeof {name:'Wade', age:34}     // Returns "object"
typeof new Date()                // Returns "object"
typeof function () {}            // Returns "function"
typeof myCat                     // Returns "undefined" 
typeof null                      // Returns "object"
*
*
*
****UNARY PLUS AND UNARY NEGATION OPERATORS
*
* The unary plus operator precedes its operand and evaluates to its operand but it will attempt to convert it into a number
* if it isn't one already. The unary negation operator precedes its operand and negates it.
*
* Example
*/ 
let x = 1;
let y = -1;
console.log(+x);
// 1
console.log(+y);
// -1

let x = 4;
let y = -x;

console.log(y);
//  -4

let a = '4';
let b = -a;

console.log(b);
//  -4