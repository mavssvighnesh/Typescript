import promptSync from "prompt-sync";
import process from "process";

const prompt = promptSync();

function print(x: any): void {
    console.log(x);
}

print("This program is to demonstrate a simple calculator");

let a: number | undefined; // Initialize a and b as undefined
let b: number | undefined;

while (true) {
    print("------------MENU-------------");
    print("1. New values\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\n6. Addition\n7. Exit\n");
    let z: string = prompt("Enter any one choice: ");
    switch (z) {
        case "1":
            a = parseFloat(prompt("Please enter a value for a: "));
            b = parseFloat(prompt("Please enter a value for b: "));
            break;
        case "2":
            if (typeof a === "number" && typeof b === "number") {
                print(a - b);
            } else {
                print("Please enter values for a and b first.");
            }
            break;
        case "3":
            if (typeof a === "number" && typeof b === "number") {
                print(a * b);
            } else {
                print("Please enter values for a and b first.");
            }
            break;
        case "4":
            if (typeof a === "number" && typeof b === "number" && b !== 0) {
                print(a / b);
            } else {
                print("Please enter valid values for a and b. (b should not be zero)");
            }
            break;
        case "5":
            if (typeof a === "number" && typeof b === "number" && b !== 0) {
                print(a % b);
            } else {
                print("Please enter valid values for a and b. (b should not be zero)");
            }
            break;
        case "6":
            if (typeof a === "number" && typeof b === "number") {
                print(a + b);
            } else {
                print("Please enter values for a and b first.");
            }
            break;
        case "7":
            process.exit();
        default:
            print("Invalid choice. Please enter a number from 1 to 7.");
    }
}
