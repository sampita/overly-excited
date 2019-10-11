// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement(theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += theWordArray[i] + " ";
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)



// question 2:
// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
        /*  
            If the current word's place is evenly divisible by 3, add an exclamation point to the end and then concatenate it to `buildMeUp`. */
            buildMeUp += theWordArray[i] + "! ";
        }    
         /*
            Otherwise, just concatenate the word itself.
         */  
            else {
                buildMeUp += theWordArray[i] + " ";
            }
        console.log(buildMeUp)// Print buildMeUp to the console
    }

}

addExcitement(sentence)