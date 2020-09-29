// The first century spans from the year 1 up to and including the year 100, The second - from the 
// year 101 up to and including the year 200, etc.
// Task :

// Given a year, return the century it is in.
// Input , Output Examples ::

// centuryFromYear(1705)  returns (18)

year = 1900

function century(year) {
    if(year.toString().length === 2 || year.toString().length === 1){
        return 1;   
    }
    else{
        if(year % 100 === 0){
            return parseInt(year.toString().substring(0, year.toString().length - 2));
        }
        else{
            return parseInt(year.toString().substring(0, year.toString().length - 2)) + 1;   
        }
    }
  }

console.log(century(year));