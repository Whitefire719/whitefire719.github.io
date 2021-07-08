/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/****VAR, CONST, LET and HOISTING****
 ****VAR****
 * Var is used in conjunction with a name and the assignment operator to assign the variable a value. In the case of var it can be globally scoped when declared outside of a function
 * or locally scoped when declared inside of a function. Var variables can be used before they are declared because they are hoisted to the top of their scope and initialized when the code is read.
 * Var variables can be reassigned and updated within the same scope. This is also a weakness of var as you may unknowingly reassign it, which can cause errors in your code.
 * Example
 */ var str = "global scope"; // str has been declared on the global scope meaning it can be used anywhere within that window.
 
 
    function someFunction() {
        var word = "local scope" // word has been declared inside of the function meaning it is only available within that function.
    }
    
    console.log(word) // Will result in an error saying word is not defined because it is not available outside of the function
    console.log(str) // Will return "global scope" because str is available on the global scope
    
    
    /****LET****
     * A variable declared with let is only available within the code block it was declared or block scoped.
     * A let variable can be updated within it's scope but it cannot be redeclared. However the same let variable can be defined in a different scope.
     * However, while let declarations are hoisted to the top of their scope they are not initialized, so trying to use one before declaration will result in Reference Error.
     * 
     * Example
     */ let thisWord = "spicy meme" // declaring a let variable
        thisWord = "super spicy meme" // this will still work because you are updating the let variable not redeclaring it.
        
        let someWord = "Super Mario" // declaring a let variable
        let someWord = "Super Luigi" // this will not work because someWord has already been declared in this scope and you cannot redeclare a let variable within the same scope.
        
        let aString = "This is Patrick" // declaring a let variable
        function momsSpaghetti() {
            let aString = "This is Dog" // Can use the same let variable name here because it is a different scope than the previous let variable
            console.log(aString) // This will return "This is Dog" because it is pulling from the local scoped let variable
        }
            console.log(aString) // This will return "This is Patrick" because it is pulling from the let variable on the global scope
            
            
    /****CONST****
     * Variables declared with const maintain constant values and can only be accessed within the block they were declared. They cannot be updated or redeclared.
     * Variables declared with const must also be initialized at the time of declaration. However, while objects declared with const cannot be updated, the properties
     * of those objects can. Const declarations are hoisted to the top but are not initialized so using them before declaration will result in a Reference Error.
     * 
     * Example
     */ const someThing = "Hadouken" // Declaring a const variable
        someThing = "Shoryuken" // This won't work because const someThing has already been declared
        const someThing = "Shinryuken" // This also won't work for the same reason as above
        const obj = { // assigning a const obj some properties. While you cannot change the properties outright you can change the contents of said properties.
            someSaying: "It is what it be",
            someWords: "But not how it do"
        }
        obj.someSaying = "Something motivational" // This will work because you are changing the contents of the property, not the actual property.