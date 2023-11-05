// write a program that point an error on console that says 'I am an error
console.log("I am an error")

// question-2 Write an program that asks the user to enter thier name and then display it on the console with a welcome message and thier name
user_name="welcome to home"
console.log(user_name)

//question-3 write a program to print 'car' from the given arrar
let arr=['truck','bicycle','rickshaw','car','motorbike']
console.log(arr[3])

//  question 4 -write a progrm to count the lenght of the array given 
let arr1=[1,2,3,4,5,6,7,8,9,10,10,1,2,3,4]
console.log(arr1.length)

// question-5 write a program that asks the user to enter something and then determine and display the data type of the input on the console eg string,number,boolean
// / Ask the user to enter something
const userInput = prompt("Please enter something:");

// Determine the data type of the input
const dataType = typeof userInput;

// Display the data type on the console
console.log(`The data type of the input is: ${dataType}`);



// question-6 write a program to extend as existing animal array with name camel, rabbit,lion and zebra 
// animal =['tiger,elephant,'fish']
let arr2=['camel','rabbit','lion','zebra']
let d=prompt("enter a animal name")
arr2.push(d)
console.log(arr2)

// question-7 create an object that represents your imaginary pet.include properties like name,type,and age display your pets detail on the console.
let obj={
     name: ['cat'],
     type: ['persian'],
     age : 6,
}
console.log(obj)

// question-8 now add a new property to the 'imaginary pet' object and name it 'color set the value of the color property to white.
obj.color='white'
console.log(obj)

// question -9 write a program to check whether a user inputted number is even or odd
let number=parseInt(prompt('enter a number'))
if (number % 2 === 0) {
    console.log(`number is an even number.`);
  }
 
  else  {
    console.log('number is an odd number');
  }

//   question -10 write a program to create a calculator that perform three mathematical operation addition, subtraction and multiplication and by user inputted numbers and opretot and
    // Ask the user to enter the first number
const firstNumber = parseFloat(prompt("Enter the first number:"));

// Ask the user to enter the operator (+, -, or *)
const operator = prompt("Enter the operator (+, -, *):");

// Ask the user to enter the second number
const secondNumber = parseFloat(prompt("Enter the second number:"));

// Check for the operator and perform the corresponding operation
if (operator === "+") {
  result = firstNumber + secondNumber;
} else if (operator === "-") {
  result = firstNumber - secondNumber;
} else if (operator === "*") {
  result = firstNumber * secondNumber;
} else {
  console.log("Invalid operator. Please use +, -, or *.");
  

}

console.log(`Result: ${firstNumber} ${operator} ${secondNumber} = ${result}`);


