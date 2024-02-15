//arrays in typescript 
function print(x: any): void {
    console.log(x);
}

// indices 0   1      2      3      
let arr1: (number | string | boolean | number[])[] = [1, "vicky", true, [2, 3, 4, 5]]; // defining an array 

print(arr1.length); // returns the length of the array 4

print(arr1[2]); // print the element present at the 2nd index 'true' 

arr1.push("96669"); // add '96669' to the end of the list 
print(arr1); // prints the array 

arr1.pop(); // removes the last element of the list 
print(arr1); // prints the list 

arr1.shift(); // removes the first element in the list 
print(arr1); // prints the array 

arr1.unshift(98889); // add '98889' to the start of the list 
print(arr1); // prints the array 

print(arr1.slice(1, 2)); /* prints the elements between the given limits 
starts with the min and ends excluding the maximum limits  output=vicky */
