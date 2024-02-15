let arr: number[] = [1, 2, 3, 4, 5, 6]; // defining an array 

let arr2: number[] = arr.map((element) => element * 3); // defining a function with the map method to multiply each element by 3 

let arr3: number[] = arr.filter((element) => element % 2 === 0); // returning value if it is divisible by 2

console.log("original array " + arr); // printing the original array 
console.log("array after applying the mapping method " + arr2); // printing the array after the map method
console.log("array after applying the filter method " + arr3); // printing the array after the filter method 
// console.log("array after applying the reduce method " + arr4); // printing the array after the reduce method 
