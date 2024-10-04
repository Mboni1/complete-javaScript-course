let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);
let firstName = "jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'Jm';
let $function = 22;
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

let job1 = "coder";
let job2 = "teacher";

console.log(myFirstJob);


// value and variable
let myCountry = "Rwanda";
let myContinent = "Africa";
let myPopulation = 14;

console.log(myCountry);
console.log(myContinent);
console.log(myPopulation);

//datatypes
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let,const and var
let language = 'kinyarwanda';
const country = "Rwanda";
const continent = 'africa';
const isIsland = false;
isIsland = false;

//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);


console.log(ageJonas + 2, ageSarah / 10, 2 ** 3);
//2**3 means 2to the power of 3 =2*2*2

const firstName = 'jonas';
const lastName = 'claude';
console.log(firstName + '' + lastName);

//assignement operators
let x = 10 + 5;//15
x += 10;//x=x+10=25
x *= 4;//x=x*4=100
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);//true //>,<,>=,<=
console.log(ageSarah >= 18);//true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);//true


//quiz
const rwandaPopulation = 14;//country population
console.log(population / 2);//7millions

polpulation += 1;
console.log(population);

const finlandPopulation = 6;
console.log(rwandaPopulation > finlandPopulation);//true


const averagePopulation = 33;
console.log(rwandaPopulation < averagePopulation);//true

let countryName = ' Rwanda';
let continentName = 'Africa';
let countryPopulation = '14 ';
let countryLanguage = 'Kinyarwanda';
let description = countryName + 'is in'
    + continentName + ', and its' +
    countryPopulation + 'people speak' + countryLanguage;

console.log(description);


// coding challenge

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


//string and tempelates literals
const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "i'm" + firstName + ', a' + (year - birthYear) +
    'years old' + job + '!';
console.log(jonas);

const jonasNew = `i'm ${firstName}, a $
 {year-birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('string with \n\
    multiple\n\ lines');

console.log(`string
    multiple
    lines`);

// test strings and template literals


const description = `${country} is in ${continent}, and its 
${myPopulation} million people speak ${language}`;

// Taking decisions if |else statements
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('sarah can start driving lincense 🚗');
}// true

or

const age = 15;
if (age >= 18) {
    console.log(`sarah can start driving lincense 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another
         ${yearsLeft} years :)`);
}
const birthYear = 1998;
let century;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}
console.log(century);

//code challenge2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;



const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

if (BMIMark > BMIJohn) {
    console.log(`mark's BMI(${BMIMark}) is higher than john's(
${BMIJohn})!`)
} else {
    console.log(`john's BMI (${BMIJohn}) is higher than
         mark's(${BMIMark})!`)
}
//quiz??????

let population = 14;
if (population > 33) {
    console.log(`${Rwanda}'s population is above average`);
} else {
    console.log(
        `${Rwanda}'s population is ${22} million below average`,
    );
}
//Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);// 1991 ,"1991" to onvert string into number
console.log(inputYear + 18);//199118
console.log(Number(inputYear) + 18);//2009

console.log(Number('jonas'));//NaN
console.log(typeof NaN);//number

console.log(String(23), 23);// 23,23 convert number to string

//Type of coercion
console.log('I am ' + 23 + 'years old');// I am 23 years old
console.log('23' - '10' - 3);//10
console.log('23' + '10' + 3);//23103
console.log('23' / '2');//11.5
console.log('23' > '18');//true

let n = '1' + 1; //'11'
n = n - 1;
console.log(n); //10

//quiz
console.log('9' - '5');//4
console.log('19' - '13' + '17');//'617'
console.log('19' - '13' + 17);//23
console.log('123' < 57);// false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

//falsy values and truthy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('claude'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;//falsy values
if (money) {
    console.log("don't spend it all;)");
} else {
    console.log('you shoud get a job !');// you should get a job !
}

const money = 100;//truthy values
if (money) {
    console.log("don't spend it all;)");// don't spend it all;)
} else {
    console.log('you shoud get a job !');
}


let height;// falsy values
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');// Height is UNDEFINED
}


let height = 123;// truthy values
if (height) {
    console.log('YAY! Height is defined');// YAY! Height is defined
} else {
    console.log('Height is UNDEFINED');
}


// equality operators == vs ===

const age = 18;
if (age === 18) console.log('you just became an adult : D(strict)');//you just became an adult:D(strict)

if (age == 18) console.log('you just became an adult: D(loose)');//you just became an adult:D(loose)


const age = '18';
if (age === 18) console.log('you just became an adult : D(strict)');

if (age == 18) console.log('you just became an adult: D(loose)');//you just became an adult:D(loose)

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log('cool 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    cosole.log('Number is not 23 or 7 or 9')
}
if (favourite !== 23) console.log('why not 23');

// quiz to equality operators:== vs ===

const numNeighbours = prompt('How many neighbour countries does your country have?');
console.log(numNeighbours);

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours == 1) {
    console.log('only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border')
} else {
    console.log('No borders')
}

// basicboolean logic:the and, or & not operators

if (language === 'english' && people < 50 && isIsland === false) {
    console.log('you should live in ${country} :) ')
} else {
    console.log('${country} does not meet your criteria:(')
}
// coding challenge#3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);//97.66666  96.333

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');//Dolphins win the trophy
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}
//bonus 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);//103.3333  109

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');//Koalas win the trophy
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');
}
//bonus 2

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);//103.33  103.33

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy!');//Both win the trophy!
}

const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);//96.66  96.66

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('None one wins the trophy😥');//None wins trophy😥
}
// The switch statement

const day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thurday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'sturaday':
    case 'sunday':
        console.log('enjoy the weekend :D')
        break;
    default:
        console.log('not a valid day');
}
if (day === 'monday') {
    console.log('plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend :D')
} else {
    console.log('Not a valid day!');
}


// statements and expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`)// I'm 47 years old Jonas

//The conditional(ternary) operator
const age = 23;
age >= 18 ? console.log('i like to drinkwine ⛽ ') :
    console.log('i like to drink water');//i like to drink water

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);// wine

//or

let drink;
if (age >= 18) {
    drink = 'wine';
} else {
    drink = 'water';
}
console.log(drink);// wine

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);//i like to drink wine

// code challenge

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}
    ,and the total value ${bill + tip}`);
//the bill was 275, the tip was 41.25, and the total value 316.25




// Activating strict mode
'Use strict';

let hasDrivesLicence = false;
const passTest = true;

if (passTest) hasDrivesLicence = true;
if (hasDrivesLicence) cosole.log('i can drive :D');// i can drive :D

// functions

function logger() {
    console.log('My name is Jonas');
}
// calling / running / invoking function

logger(); // My name is Jonas
logger(); // My name is Jonas
logger(); // My name is Jonas

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and
     ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);// Juice with 5 apples and 0 oranges.

const appleJuice = fruitProcessor(2, 4);
console.log(appleJuice);// Juice with 2 apples and 4git oranges.
