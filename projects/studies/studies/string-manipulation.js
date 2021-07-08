/*
 * STRING MANIPULATION:
 *
 *0. In Javascript, strings are used to store and manipulate text. A strng can be zero or more characters that are wrapped in quotes.
 /****ACCESSING STRING PROPERTIES****
 * You can access a specific property of a string by using bracket notation.
 SYNTAX: string[index]
 
 Example
 
 */ let exWord = "Wow"
    exWord[2] // Will return w
 
 /*
 * STRING METHODS
 * String methods are used to manipulate strings in a variety of ways.
 ****SLICE METHOD****
 * The slice() method extracts part of a string and returns the extracted part in a new string.
 *It can be used to extract one character or multiple characters.
 SYNTAX: string.slice(start, end)
 
 Example
 */   let str = "Blue, Dog, Cat";
        str.slice(6, 9) // Will return Dog
        
/****SUBSTRING METHOD****
 * The substring() method is the same as slice() with the only difference being that it cannot accept negative indexes.
 * if you leave out the second parameter in the substring() method, it will slice out the rest of the string.
 *  SYNTAX: string.subsstring(start, end)
 
 * Example
 */ let words = "Bird, Bear, Wookie";
        words.substring(6, 10) // Will return Bear
        
/****SUBSTR METHOD****
 * The substr() method is similar to slice(), the only difference being that the second parameter denotes the length of the extracted string.
 * Omitting the second parameter in substr() will also slice out the rest of the string.
 * If you enter the first parameter as a negative it counts from the end of the string to the beginning
 * SYNTAX: substr(start, length of desired extraction)
 * 
 * Example
 */ let strings = "Owl, Ewok, Shark";
        strings.substr(5) // Will return Ewok,Shark
        strings.substr(-5) // Will return Shark
        
/****REPLACE METHOD****
 * The replace method() replaces the specified value in a string with another value in a string.
 * NOTE The replace() method does not change the original string. It returns a new string. It also only replaces the first match.
 * It is case senstive unless specified to be case insensitive /i.
 * SYNTAX: string.replace(word to be replaced, replacement word)
 * 
 * Example
 */ let sentence = "They've taken the hobbits to Rivendell!"
    let newSentence = sentence.replace("Rivendell", "Isengard") // Will return "They've taken the hobbits to Isengard!"
    
/****TOUPPERCASE AND TOLOWERCASE METHODS****
 * The toUpperCase() will convert a string to upper case while toLowerCase() will conver a string to lower case respectively.
 * NOTE These methods will effect all of the characters in a string. If you wish to only iterate on a specific character
 * you can use charAt() and the index of the character.
 * SYNTAX: string.toUpperCase()
 *         string.toLowerCase() 
 * 
 * Example
 */ let text = "use the force!"
    let text2 = text.toUpperCase() // Will return "USE THE FORCE!"
    let bigText = "OH GOD BEES!"
    let bigText2 = bigText.toLowerCase() // Will return "oh god bees!"
    
/****CONCAT METHOD****
 * The concat() method joins two or more strings together. It functions the same as the + operator.
 * SYNTAX: string1.concat("seperator", string to be joined)
 * 
 * Example
 */ let string1 = "Taco";
    let string2 = "Tuesday";
    let concatStr = string1.concat(" ", string2) // Will return "Taco Tuesday"
    
/****TRIM METHOD****
 * The trim() method gets rid of the blank space from both sides of a string.
 * SYNTAX: string.trim()
 * 
 * Example
 */ let example = "        Sir, this is a Wendy's          "
    example.trim() // Will return "Sir, this is a Wendy's"
 
 
 /****CHARAT METHOD****
  * The charAt() method will return a character at the specified index of a string. You can use this in conjunction with toUpperCase()
  * and toLowerCase() to iterate on specific characters in a string.
  * SYNTAX string.charAt(index)
  * 
  * Example
  */ let thisWord = "Encyclopedia"
  thisWord.charAt(4) // Will return y
  
  /****SPLIT METHOD****
   * The split() method will convert a string into an array.
   * SYNTAX: string.split("seperator")
   * 
   * Example
   */ let aString = "This could get messy"
        let arr = aString.split(" ") // Will return ["This", "could", "get", "messy"]