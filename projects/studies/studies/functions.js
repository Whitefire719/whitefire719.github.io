/****FUNCTIONS****
 * Functions are blocks of reusable code stored in a variable that can be called or invoked later on to run said code on an argument or arguments passed into the function. 
 * They are useful for when you need to reuse a code block multiple times and are more efficient than writing out the code each time. 
 * A function is defined by using the function keyword  and/or a function name and parenthesis or they can be defined by using an expression that is stored in a variable. 
 * If declaring a function name it should be something that indicates the purpose of the function.
 * 
 *  The parameters of a function are listed inside of the parenthesis when declaring the function. Their names should be something that helps indicate what will be passed into the function. 
 * The actual values that will be passed into the function are called arguments. 
 * 
 * A function can be invoked by using the function's name and passing an argument into the parenthesis or by using the variable name from a function expression. 
 * Functions will often end in a return statement where the function stops executing and some kind of output is returned but not always. 
 * Functions can be used as variables within other functions, as parameters or arguments in other functions, or within the code blocks of other functions. 
 * Like arrays and objects, functions are complex data types and are copied by reference.
 * 
 * Example
 */ function someFunc(array) { // declaring a function and setting a parameter
     if(array.length <= 6) {
         return "Aren't you a little short for a stormtrooper"
     }                                                              // code to be executed whenever the function is called
     else return "This deal is getting worse all the time"
 }
    let thisArr = ["Endor", "Tattooine", "Naboo"]
    someFunc(thisArr) // invoking the function amd passing thisArr as an argument

    const func = function(num1, num2) { // Here the function is defined with an expression.
      return num1 + num2;               // This function is anonymous because it has not been given a name
    }

  /****Anonymous Functions****
   * Functions can be anonymous meaning they don't have an assigned name but are assigned a variable.
   * You can invoke the function by using the variable name.
   * 
   ****Function Hoisting****
   * Function declarations are hoisted to the top of their scope meaning they can be called before they are declared. However, functions defined using an expression are not hoisted.
   * 
   ****Self-Invoking Functions****
   * A self invoking function is a function expression that is invoked without being called.
   * You have to follow the function keyword with parenthesis and the entire function must be wrapped in parenthesis for this to work. Functon declarations cannot be self invoked.
   * 
   * Example
   */ (function () {
     let z = "These aren't the droids we're looking for"; // Because this function has been wrapped in parenthesis
   })();                                                  // it will invoke itself without needing to be called.
                                                          // This function is also anonymous as it does not have a name
   
  /****Function Properties and Methods****
   * While functions are their own data type, they can be best thought of as objects.
   * They have properties such as .length that will return the number of arguments input whenever
   * the function was invoked or methods such as toString() that will return the function as a string value.
   * 
   ****Arrow Functions****
   Arrow functions do not need the function or return keywords and are not wrapped with curly brackets.
   They are denoted with the equal, greater than symbols together that create an arrow. =>
   This is a quicker way to write a function expression, however they are not hoisted and are not good
   at defining object methods.     

   */ // Instead of 
   var x = function(param1, param2) {
      return param1 * param2;
   }      
   // You can use the arrow function
   const x = (param1, param2) => param1 * param2;   
   
   
   /****CLOSURE AND SCOPE****
    * Closure is when a function definition carries references to variables in it's parent scope. The function definition forms
    * a closure around the environment it was defined in. Whenevr the function is invoked it has access to variables from the parent scope.
    * 
    * Scope is what variables are available in a given space. There is Global scope and local scope. Global scope is outside of a function body
    * and variables declared on a global scope are available anywhere in the window. Local scope is inside of the function body and while the local scope
    * can access the parent scope, the reverse is not true.
    * 
    * Block scope is when a variable is available between curly braces. Only variables declared with LET and CONST are block scoped. Var declared variables ignored curly braces
    * unless they are a part of a function.
    * 
    * Nested scope is when functions are defined within function and form nested scopes for variables. It works the same way with local scopes having access to their parent scopes
    * but not vice versa.
    * 