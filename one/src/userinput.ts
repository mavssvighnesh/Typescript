import promptSync from "prompt-sync"; // Importing module
const prompt = promptSync(); // Create prompt instance

let x: string = prompt("please enter a text"); // Taking a text input from user 

// Returns true if x is "hello vighnesh"
if (x === "hello vighnesh") {
    console.log("true vicky 1");
}
// Returns true if x is "vighnesh"
else if (x === "vighnesh") {
    console.log("true vicky2");
}
// Returns false if both conditions fail 
else {
    console.log("false");
}
