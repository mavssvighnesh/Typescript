// Standard for loop
// Syntax: for(initialization; condition; increment/decrement)

for(let i = 0; i <= 2; i++) { // for loop with i=0 and i<=2 and incrementing by 1 i++
    console.log(i); // prints the numbers from 0 to 2 
}


// For-in loop
// Looping through the elements like objects keys etc 
// Syntax: for(variable in object)

let people: { [key: string]: any } = {name: "vighnesh", age: 20, job: "senior developer"};
for(let key in people) {
    if (people.hasOwnProperty(key)) { // check if key is a direct property of the object
        console.log(key + ": " + people[key]); // prints out the data present in people
    }
}


// For-of loop
// Syntax: for(variable of object)

let no: number[] = [1, 4, 67, 2, 3]; // defining a list

for(let number of no) {
    console.log(number); // prints out the numbers in the list 
}
