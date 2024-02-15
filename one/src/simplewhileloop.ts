import promptSync from "prompt-sync";

const prompt = promptSync();
let x: number = parseFloat(prompt("please enter a number less than 20"));

while (x < 20) { // looping condition
    console.log(x); // printing the value of x 
    x++; // incrementing the value of x after every iteration 
}
