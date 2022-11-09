// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: "G" "o" "l" "f" "2" "0" "2" "2" 
// b) Verify and explain: My answer is incorrect. I was on the right track understand that built in method .split
//breaks up the string into individual strings. I did not factor in the ("") which places a |,| between the new strings. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: My answer is incorrect. At first glance I thought for a moment that variable "greeter" was undefined, and would
//show up as so in the terminal. But after inspecting the functin a little longer I thought "learn student" with be placed into string interpolation 
//and the output would be the above sentance.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 console.log(multipliedByTwo)

// a) Your answer:[8,10,12,14,16]
// b) Verify and explain: My answer is correct. This is an array in which .map HOF is being appended. It uses number as the argument and 
// the function arrows show each element will be multiplied by 2. The answer is each element in the array being multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: My answer is correct. Here, there is a function with an array of numbers. The HOF .filter is appended to the variable
// onlyOdds. Number is the argument and the function arrows indicate that argument "number" if it's modulo 2 ( it can divide into...)
//bang operator with loose equality to 0. This means that what will be filtered are numbers that are not divisible by 2.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
 console.log(myCodingSkills.languages[0])

// a) Your answer: [Javascript]
// b) Verify and explain: My answer is incorrect. I did attain the correct Javascript, however I placed square brackets around it signifying
//it's an array. I found my answer seeing that this is an object and the console.log is calling on the variable, then the key "languages", then 
//requesting the first index of [0], which is Javascript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: this.student = "George"
// b) Verify and explain: My answer is incorrect. I failed to recognize when there is a new argument "George", it will be passed through
//the parameter (name), and it will display withing the class Learn at the corresponding object. I also did not factor in the whole object would
// be the output as well.
