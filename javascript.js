/* task 1 */
let age = readInt("What is your age?");
let isStudent = false;
let favoriteColors = ["Blue", "Red", "Yellow"];

/* task 2   */
var String = '"String"';

console.log(String);

/* task 3 */
var name = readLine("What's your name?");

var res = name+age+String;
if(isStudent || 1) {
    console.log(res);
}

/* task 4-5 */


const animal = "lion";
const animal_input = readLine("Enter your favorite animal");
const color_input = readLine("Enter your favorite color");

if(animal_input == animal) {
    console.log(`awesome ,I like ${animal} too`);
}else {
    console.log(`So you like ${animal_input} , but I like ${animal}`);
}
let i = 0;
for (let e of favoriteColors){
    if(color_input == e) {
        console.log(`Awesome ,I like ${color_input} too`);
        i++; 
    }
}
if (i == 0) console.log(`So you like ${color_input} , but I like ${favoriteColors}`);




/* task 6*/
const number = readInt("Enter a number please :");

if(number > 0) {
    console.log('the number you entered is positive.');
}else if (number < 0) {
    console.log('the number you entered is negative');
}else {
    console.log('the number you entered is null')
}

/* task 7-8-9 */
var input = prompt('Enter a the result of 2+3');
if (input == 5){
    console.log(" your answer is true");
}else {
    console.log(" your answer is false");
}



