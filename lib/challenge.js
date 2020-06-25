/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber;
myFavoriteNumber = 15;
// console.log("Declared and Assigned value to variable myFavoriteNumber   " + myFavoriteNumber);

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let letVar = 10;
const constVar = "Sachin Ramteke";
var firstVar = "100";
// console.log("printing let, const, var  types variables   " + letVar, +" " + constVar + "  " + firstVar)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let v1 = 12;
v1 = v1 + 3;
// console.log(v1);

v1 = v1 - 3;
// console.log(v1);

v1 = v1 * 3;
// console.log(v1);

v1 = v1 / 7;
// console.log(v1);

v1 = v1 / 2;
// console.log(v1);

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
const firstName = "Sachin";
const lastName = "Ramteke";
const fullName = firstName + " " + lastName;
// console.log(fullName);

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
let hello = 'hello';
let world = 'world';
let message = hello + " " + world
// console.log(message);

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false

//A
5 == 15
console.log(5 == 15);

//B
5 === 5
console.log(5 === 5);

//C
5 !== 15
console.log(5 !== 15);

//D
15 < 5
console.log(15 < 5);

//E
5 > 15
console.log(5 > 15);

//F
5 <= 15
console.log(5 <= 15);

//G
15 >= 25
console.log(15 >= 25);

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

// a _ b;
//console.log("prompt 7");
console.log(a != b);

// c _ d;
//console.log("prompt 7-c:d");
console.log(c > d);

// 'Name' ___ 'Name';
//console.log("prompt 7-Name");
console.log('Name' === 'Name');

// a _ b ___ c;
//console.log("prompt 7-a -b -c");
console.log(a < b < c);

// a _ a ___ d;
//console.log("prompt 7-a -a -d");
console.log(a * a === d);

// e ___ 'Kevin';
//console.log("prompt 7-e-kevin");
console.log(e === 'Kevin');

// 48 ___ '48';
//console.log("prompt 7-48");
console.log(48 == '48');


/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

// a _ b;
// console.log("prompt 8-a-b");
console.log(a === b);

// c _ d;
// console.log("prompt 8-c-d");
console.log(c > d);

// 'Peanut' ___ 'Peanut';
// console.log("prompt 8-peanut");
console.log('Peanut' != 'Peanut');

// a _ b ___ c;
// console.log("prompt 8- a-b-c");
console.log(a > b < c);

// a _ a ___ d;
// console.log("prompt 8- a-a-d");
console.log(a != a == d);

// e ___ 'Jelly Bean';
// console.log("prompt 8- e-jelly bean");
console.log(e !== 'Jelly Bean');

// 48 ___ '48';
// console.log("prompt 8- 48");
console.log(48 != '48');

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

const array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
const array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
const array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log("print array1 " + array1[2]);
console.log("print array2 " + array2[1][1]);
console.log("print array3 " + array3[1][1][1]);

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

const array4 = ['a', 'b', 'c', 'd', 'e'];

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

const thom = ['Thom', 1000, 'Christchurch'];
const karolin = ['Karolin', 16, 'New York'];
const kristyn = ['Kristyn', 5, 'Pittsburgh'];
const cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
