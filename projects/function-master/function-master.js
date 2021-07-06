//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return  Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
var results = [];
    for(var value in object) {
        if(typeof object[value] === "string") {
        results.push(object[value]);
         }
   
    }
    return results.join(" ");
}



    

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return "array";
    }
    else return "object"
    }
    


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
   
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var strSplit = string.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].substr(1);
    }
    return strSplit.join(" ");    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// Could have used function here

return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1)+ '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//Could have used function here
return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species)
}
    


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.hasOwnProperty("noises") && object.noises.length > 0) {
    return object.noises.join(" ");
    }
else return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

if(string.includes(word)) {
    return true;
}
else return false;
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   if(object.hasOwnProperty("friends")) {
return object.friends.includes(name);
   }
else return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   // create array of potential friends
    var masterList = [];
    var targetFriends;
        for(let i = 0; i < array.length; i++) {
            const person = array[i];
      // If person.name is equal to name store person's friend list in target var
      //If not then put name in master list of names
                if(person.name === name) {
                   targetFriends = person.friends
                    
                } else {
                    masterList.push(person.name)
                }
                
        }
    // Loop over target friends list and for each target friends name loop over master list and if the names are the same remove name from the master list 
    // Return what is left of the master list 
                
                    for(let i = 0; i < targetFriends.length; i++) {
                        var alreadyFriends = targetFriends[i];
                        if(masterList.includes(alreadyFriends)) {
                            masterList.splice(masterList.indexOf(alreadyFriends), 1)
                        }
                    }
                    return masterList;
               
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
 
    object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    array.forEach(function(property){
        if(object.hasOwnProperty(property)) {
            delete object[property];
        }
    });
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return Array.from(new Set(array))


// for(let i = 0; i < array.length; i++) {
//     var newArr = [];
//     var oldArr = [];
//     if(array[i].includes(array[i])) {
//         oldArr.push(array[i]);
//     }
//     else newArr.push(array[i]);
//     return newArr;
//     }
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}