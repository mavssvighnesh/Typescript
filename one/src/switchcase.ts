import promptSync from "prompt-sync";

const prompt = promptSync();

// Taking a user input for the choice 
let z: number = parseFloat(prompt("enter a number from following 1.96669 \n 2.98889 \n 3.99999"));

// Switch to make a quick skip to the correct block to be executed 
switch (z) {
    case 98889: // case 1 true if value is 98889
        console.log("true 98889");
        break; // breaks the switch condition if the value is true 
    case 96669: // case 2 true if value is 96669
        console.log("true 96669");
        break; // breaks the switch condition if the value is true
    case 99999: // case 3 true if value is 99999
        console.log("true 99999");
        break; // breaks the switch condition if the value is true
}
