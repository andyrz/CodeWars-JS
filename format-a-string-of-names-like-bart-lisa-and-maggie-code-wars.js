// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except 
// for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

 let names = [
     { name: 'Bart' },
     { name: 'Lisa' },
     { name: 'Maggie' },
     { name: 'Homer' }
 ];



function list(names){
    let output = "";
    if(names.length === 1){
        return names[0].name;
    }
    if(names.length === 2){
        return names[0].name + " & " + names[1].name;
    }
    for(let i=0;i < names.length - 1; i++){        
        if(i === names.length - 2){
            return output += names[i].name + " & " + names[i+1].name;
        }
        output += names[i].name + ", ";
    }
    return output;
}


console.log(list(names));