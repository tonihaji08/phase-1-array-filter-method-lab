function findMatching(drivers, string) {
    return drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())

}

//function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, string){
    return drivers.filter(drivers => drivers.startsWith(string))

}

//function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName (drivers, string) {
    return drivers.filter( drivers => drivers.name === string)
}