// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.






// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.
             //First I creat a variable titled "divide". After the IT statement I pass through "if the number inside it is evenly divisible by three or not."
             //I create three separate expect statements and argue oject 1,2,and 3 .toEqual the outputs of whether the variables are divisible by three.
             //I received a successful failure from jest, showing my variable "divide" is not defined. 
             //I proceed in creating my function using divide, and object as my argument.
             //I choose to use a conditional if statemtent in order to get the desired result of each variable divisible by three or not.
             //I write the if statement using a modulo 3 strictly equal to zero.
             //Next, three returen statements using string interpolation to attach the strings in each respected output.
                        ////////My syntax seems to be just fine, however the test does not pass after a lot of effort. It is displaying
                        //a problem with .toEqual. This has me pretty stumped, the first problem I started and the last to finish.



//////////INPUT: object1,2,3  
                  /////OUTPUT:15 is divisible by three
                          //  0  is divisible by three
                          // -7  is not divisible by three   

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divide", () => {
        it("if the number inside it is evenly divisible by three or not.", () => {
                expect(divide(object1)).toEqual(" is divisible by three")
                expect(divide(object2)).toEqual(" is divisible by three")
                expect(divide(object3)).toEqual(" is not divisible by three")
        })
})


// //TEST RESULTS: Failed    ReferenceError: divide is not defined
//                        // Test Suites: 1 failed, 1 total
//                        // Tests:       1 failed, 1 total



// b) Create the function that makes the test pass.
const divide = (object) => {
        if(object % 3 === 0) {
        return `${object1}"is divisible by three"` 
        return `${object2}"is divisible by three"`
        return `${object3}"is not divisible by three"`
        }
}
//TEST RESULTS: Failed    //Expected: " is divisible by three Received: undefined
                          //Test Suites: 1 failed, 1 total
                          //Tests:       1 failed, 1 total





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
                
                        // // In order to begin testing with jest, I use "capitalNouns" as the future variable. The argument of the
                        // array,"returns an array with all the words capitalized" I pass through the |if| statement. For the expect statement
                        // I use |capitalNouns| an pass the provided variable |randomNouns1|. The strict matcher | .toEqual | will show the 
                        // expected output which is | randomNames1 & randomNames2 | all Capitalized.
                        //The test is a successful failure, showing that my new created variable, | capitalNouns |, is not defined.

                        //These two arrays require to become all capitalized in order to achieve a passing test in Jest.
                                //My idea is to use the method .join to turn the array into a string. Then .toUpperCase to capitalize the 
                                // string. Finally, .split to turn the string back to an array.
                        //When building the function for | capitalNouns | I have run into a difficult scenario. Trying to return
                        //each array using the three methods, .split does not seem to be working. Changing the placement and syntax everywhere, 
                        // .split is not registering. Jest, in the terminal, lets me know that "TypeError: Cannot read properties of undefined (reading 'split')".
                        
                // Input: Variables randomNouns1 & randomNouns2  
                // Output: Both variables "Capitalized".

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

                        describe("capitalNouns", () => {
                                it("returns an array with all the words capitalized.", () => {         
                                        expect(capitalNouns(randomNouns1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
                                        expect(capitalNouns(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango")
                                })
                        })

                        // TEST RESULTS:  Failed         ReferenceError: capitalNouns is not defined
                        //                               Test Suites: 1 failed, 1 total
                        //                               Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

                        const capitalNouns = (array1, array2) => {
                              return array1.join.toUpperCase.split(((randomNouns1)))
                              return array2.join.toUpperCase.split(((randomNouns2)))
                              
                        }
                        
                        // TEST RESULTS:   Failed     TypeError: Cannot read properties of undefined (reading 'split')
                                              
                        //                            Test Suites: 1 failed, 1 total
                        //                            Tests:       1 failed, 1 total






// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

                        //Create variable called "firstV". Pass "logs the index of the first vowel" through the
                        //IF statement. Place provided variables into the expect statements. Running $ yarn jest, 
                        // I acheive a successful failure throught the terminal: ReferenceError: firstV is not defined.
                //To take these three variables that are "strings" and return the index of the first vowel, I immediately think
                //of using a |for loop| to get the correct output. I pass "string" as an argument and set up the syntax for a normal for
                //loop. I choose to use conditional statements for each of the returns. I want the loop to iterate over each individual 
                //variable with strict equality for the vowels. I return the string parameter and attempted to use .join, and indexOf, 
                //with the variable as the arument. I thought to use the built-in accessor .join to create an array, then I'd
                //be able to utilize .indexOf to log the index of the first vowel.
                                //Jest has notified me that there's a type error and cannot read "length".
                                //In the end I have not been able to conjure the correct output, or a Passing test.
        
        
        //INPUT:vowelTester1,2,3
        //OUTPUT: 1,0,2



// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

        describe("firstV", () => {
                  it("logs the index of the first vowel", () => {
                          expect(firstV()).toEqual(1)
                          expect(firstV()).toEqual(0)
                          expect(firstV()).toEqual(2)
        })
      })                         
//                       //  TEST RESULTS:  Failed   ReferenceError: firstV is not defined
//                       //  Test Suites: 1 failed, 1 total
//                       //  Tests:       1 failed, 1 total

//      // b) Create the function that makes the test pass.

     const firstV = (string) => {
        for(let i = 0; i < string.length; i++)
                if(vowelTester1[i] === "a","e","i","o","u")
                return string.join.indexOf(vowelTester1)
                
                if(vowelTester2[i] === "a","e","i","o","u")
                return string.join.indexOf(vowelTester2)
                
                if(vowelTester3[i] === "a","e","i","o","u")
                return string.join.indexOf(vowelTester3)
        }
      
//                 //  TEST RESULTS:  Failed       TypeError: Cannot read properties of undefined (reading 'length')
                                //Test Suites: 1 failed, 1 total
                                //Tests:       1 failed, 1 total