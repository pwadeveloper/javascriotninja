

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $button = document.getElementById("button");

function update(element,content,klass){
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass){
        p.className = klass;
    }
}

$button.addEventListener('click', function() { play(quiz) } , false);



//welcome the user



/*var button = document.getElementById("button");
var rainbow = ["red", "orange", "yellow", "green", "Blue", "indigo", "violet"];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
button.addEventListener("click", change); */


//this is a bloack containing 2 statements
/* var a = "Hello"; {
    alert(a);
}
{
    name = "Heisenberg"; //declare and assing a variable
    name.length;
    alert(name.length);
}
{ //concat name var and a word, eg "Hello"
    var uname = "Mudia David";
    alert("Hello ".concat(uname));
}

var question = "what is Superman's real name?"
var answer = prompt(question);
alert("You answered: " + answer + ", as Superman's Real name.");

var age = 3
if (age < 18) {
    alert("sorry u are not allowed to play this game");
}
n = 12;
if (n % 2 === 0) {
    console.log("n is an even number")
}
else {
    console.log("n is an odd number");
}


y = 5
y % 2 === 0 ? console.log("y is an even number") : console.log("y is an odd number")
//ways to convert a string to an int, 1. multiply it by i
//e.g answer ="5"*1;
//add a + symbol to it e.g answer=+"5";
// or the good old number function Number("23");
// to convert num into string use e.g 3+''; or String(3);
//Lakrlc12!
//If a string starts with a number, the parseInt function will use this number and
//ignore any letters that come afterwards:
//var address = "221B Baker Street"
//<< undefined
//parseInt(address, 10)
//<< 221
//parseFloat() that converts strings into floating point decimal numbers
//!(logical NOT) converts truth to false and vice versa e.g !true; <<false
// logical AND = &&, logical OR = ||  (OR would only giv false if both conditions and opereands are false); -Lazy Evaluation which
//means ignoring other conditions if any of them is false (for AND), or accepting all conditions,
//if any of them are true (For OR).


if (number === 4) {
    alert("You rolled a four");
} else if (number === 5) {
    alert("You rolled a five");
} else if (number === 6) {
    alert("You rolled a six");
} else {
    alert("You rolled a number less than four");
}

switch (number) {
    case 4:
        alert("You rolled a four");
        break;
    case 5:
        alert("you rolled a five");
        break;
    case 6:
        alert("you rolled a six");
        break;
    default:
        alert("ypu rolled a number less than 4");
        break;
}

/*switch(var){
    case n: <--condition
        process to take place if condition is met
        break;
        continue until you get to 
    default: <--more like a null condition
        Process
        break; <-- this ends it all
    } */

/*var bottles = 10;
while (bottles > 0) {
    alert("There were " + " green bottles,hanging on the wall. And if one green bottle should accidentaly fakk, there'd be " + (bottles - 1) + " green bottles hanging on the wall");
    bottles--;
} */

/*var bottles = 11;
while (--bottles) {
    alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidentaly fall, there'd be " + (bottles-1) +" green bottles, hanging on the wall");
} */


/*var bottles = 10;
do {
    alert("There were " + bottles + "and if a bottle falls then we have" + (bottles - 1) + "hanging on the wall");
    bottles--;
} while (bottles > 0); */

/*for (var val = 10 ; val > 0 ; val--) {
    alert("we hv " + val + "  if one is deducted, we the hv " + (val - 1) + " left");
} */

//it can be alternatively written as
/*var val =10; // the bottles are initialized here instead like in the code above
for ( ; val > 0 ;) { // empty init and increment
    alert("we have " + val + " and if one is deducted we hv " +(val-1)+ 'left')
    val--; //increment moved in to code block
} */

/*for (var n=1 ; n<13 ; n++){ //mutiplication table using for loop
    for (var m = 1 ; m < 13 ; m++) {
        console.log(m + " multipllied by " + n + " is " + n*m);
    }
} */
/*
var pizza = ["bef", "chicken", "mushrooms", "ham", "pineapple"];
pizza = pizza.concat(["potatoe", "tatoe"]);
pizza.push("carrots");
for (var i = 0, max = pizza.length; i < max; i++) {
    console.log(pizza[i]);
} */
/*
var quiz = [ //nested array
    ["what is supermans real name", "Clarke Kent"],
    ["What is Wonderwoman's real name", "Diane Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];
var score = 0;

play(quiz);

function play(quiz) {
    for (var i = 0, question, answer, max = quiz.length; i < max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    gameOver();

    function ask(question) {
        return prompt(question); // quiz[i][0] is the ith questions
    }

    function check(answer) {
        if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
            alert("Correct!");
            // increase score by 1
            score++;
        } else {
            alert("Wrong!");
        }
    }

    function gameOver() {

        alert("Game Over, you scored " + score + " points");
    }


} */


quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
    { "question": "Superman", "answer": "Clarke Kent" },
    { "question": "Batman", "answer": "Bruce Wayne" },
    { "question": "Wonder Woman", "answer": "Diana Prince" }
    ]
}

var score = 0;
update($score,score)
play(quiz);


function play(quiz) {
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    gameOver();

    function ask(question) {
       update($question, quiz.question + question); // helps the question to be display in html
        return prompt ("Enter your answer:")
        
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
            update($feedback, "correct", "right");
            // increase score by 1
            score++;
            update($score,score)
        } else {
            update($feedback, "Wrong!","wrong");
        }
    }

    function gameOver() {

        update($question, "Game Over, you scored " + score + " points");
    }


}



/*function square(x) {
    return x * x;
}
    var square = (x) => x * x;

() =>Math.floor * 6 * Math.random + 1;
*/

















/*
for (var i = 0, max = quiz.length; i < max; i++) {
    // get answer from user
    var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question
    // check if answer is correct
    if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
        alert("Correct!");
        // increase score by 1
        score++;
    } else {
        alert("Wrong!");
    }
} alert("Game Over, You Scored  " + count + "Points");
*/

/*
var quiz = [
    ["What is the first meal of the day", "Breakfast"],
    ["What is the Second meal of the day", "Lunch"],
    ["What is the third meal of the day", "Dinner"],
];

var score = 0;
for (var i = 0, max = quiz.length; i < max; i++) {
    // get answer from user
    var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question
    // check if answer is correct
    if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
        alert("Correct!");
        // increase score by 1
        score++;
    } else {
        alert("Wrong!");
    }
} alert("Game Over, You Scored  " + score + " Points");



/*var quiz = [
    ["Name", "Osamudiamen Imasuen"],
    ["statecode number", "SO/16B/3064"],
    ["state of origin", "Edo State"],
];
var score = 0;
for (var i = 0, max = quiz.length; i < max; i++) {
    var answer = prompt(quiz[i][0]);
    if (answer === quiz[i][1]) {;
        ++score;
    }
} */
/*
var name = "Mudia";
function hello() {
    console.log("Hello " + name + "!");
  
} */


/*
function yo() {
    return "oi world";
} */


/*function square(x) {
    return x * x;
}
var square = (x) => x * x;

() =>Math.floor * 6 * Math.random + 1;
*/


/*
function hello(name) {
    if (name === undefined) name = "World!";
    console.log("Hello " + name + "!");'
    alert("Hello " + name + "!");
}
function discount(price, amount) {
    if (amount === undefined) amount = 10;
    return price * (100 - amount) / 100;
}
discount(20);

var a = 1; //global variable
function locala(){
    var a = 3; //local variable
    console.log("a inside function: " + a);
}
locala();// invoke the function
console.log("a outside function: " + a);

b = 2; //this is a global variable
function localb() {
    b = 4; //this overwrites the global variable
    console.log("b inside function: " + b);
}
localb(); //invoke the localb function
console.log("b outside function: " + b);

function localc() {
    c = 5;// creates a new global variable
    console.log("c inside function: " + c);
}
localc();//invoke the local function
console.log("c outside function: " + c);

function locald() {
    var d = 6;//creates a new local variable
    console.log("d inside function: " + d);
}
locald();
console.log("d outside function: " + d);

//variable hoisting, variable declarations are automatically moved to the top of the function's scope
//As if they where defined at the start of the function eg:

function hoist() {
    console.log(a); // at this point it is undefined
    //dummy code
    //more dummy code
    var a = "Hoist me!";
    console.log(a); //now a string
}

//function hoisting
add(2, 3);
function add(x, y) {
    console.log(x + y);
}

subtract(5, 6); // would work also due to same reason as above
 function sub(x, y) {
    console.log(x - y);
}
*/

function pizza(topping, callback) {
    console.log("This is a " + topping + " pizza");
    callback();
}

function cook() {
    console.log("The pizza is cooking");
}

function eat() {
    console.log("I've eaten the pizza!");
}

function sell() {
    console.log("This pizza has been sold");
}

//writing an anonymous function that does what you want
pizza("Ham & pineapple", function() {
    console.log("The pizza has been delivred. ");
}); //note that this function does not have a name and can only be used once, 
//not really a useful way of implementing functions, it is better to name your functions

//the .sort array method sorts arrays in alpgabetical order

/*
function compareNumbers(a,b){
    return a-b;
} */
// to aviod overflow error (which occurs when an array has a very large and
//overflow numbers
/*
number = [1, 3, 42, 4, 2, 5, 6, 3];
number.sort();

function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b){
        return 1;
    } else {
        return 0;
  }
}
*/
/*
function mean(a, b, c) {
    return (a + b + c) / 3;
}
alert(mean(2, 3, 4));
*/

function mean(values, callback) {
    var total = 0;
    for (var i = 0, max = values.length; i < max; i++) {
        if (typeof callback === "function") {
            total += callback(values[i]);
        } else {
            total += values[i];
        }
    }
    return total / max;
}

var colors = ["Red", "Green", "Blue"]
colors.forEach(function(colors, index) {
    console.log("Color at position " + index + " is " + colors);
})

/*for (var i = 0, max = colors.length ; i < max ; i++) {
    console.log("Color at position " + i + " is " + colors[i]);
} */
//alternatively, it can be writen as
/*colors.forEach(function (color,index){
    console.log("Color at position " + index + " is" +color);
}); */
/*
["red", "green", "blue"].map( function (color) {
    return "<p>" + color.toUpperCase() + "</p>";
});
*/

/*[1, 2, 3, 1, 3].reduce(function (prev, curr) {
    return prev + curr;
});*/

sentence = " The bla bla bl abl abla bla"
words = sentence.split(" ");
total = words.reduce(function(prev, current) {
    return prev + current.length;
}, 0);
average = total / words.length;
/*

//using the map(), and reduce() function together
alert([1, 2, 3].map(square).reduce(function(total, x) {
    return x + total;
}));
*/
//also on the map() and reduce() function
var sales = [100, 123, 34];
alert(
    totalAfterTaxSales = sales.map(function(amount) {
        return amount * 1.15 //15% sales tax
    }).reduce(function(prev, current) {
        return prev + current;
    }));

//filter funvtion
var numbers = [12, 17, 16, 15, 11, 234, 12]
numbers.filter(function(number) {
    return number % 2 === 0;
});



/*
var goodbye = function bye() {
    alert("Goodbye World!");
};
*/


function hello(name) {
    if (name === undefined) name = "user";
    alert("Hell0" + name + "Welcome to hackaton");
}

function discount(price, amiunt) {
    if (amiunt === undefined) amiunt = 10; // you can omit this line of code if you always wanna set your discount without having the default discount of 10%9
    return price * (100 - amiunt) / 100;
}
["red", "green", "blue"].map(function(arrayValue) {
    return "<p>" + arrayValue.toUpperCase() + "</p>";
});

["red", "green", "blue"].map(function(arrayValue, index, array) {
    return index + ": " + arrayValue + " (lenght " + array.length + ")";
});

(arrayvalue, index, array) => {index+ ": "+arrayblue+ " (lenght " + array.length +")"}
/*
[1, 2, 3, 4, 5].reduce(function (prev, current) {
    return prev + current;
}, 10);
*/
//-----Objects____------

var superman = {
    name: "Superman",
    "real name": "Clark Kent",
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ["Batman", "Supergirl", "Superboy"],
    fly: function() {
        return "Up, up and away!";
    }
}
var spiderman = {
    name: "Spiderman",
    "real name": "Peter Parker",
    height: 75,
    weight: 321,
    hero: true,
    villain: false,
    allies: ["iron fist", "powerman", "tigress"],
    swing: function() {
        return "Go web go!";
    }
}

spiderman["real" + " " + "name"]

var Batman = {
    name: "Batman",
    "real name": "Bruce Wayne",
    height: 53,
    weight: 65,
    hero: true,
    villain: false,
    allies: ["Spiderman", "Flash", "Wonder Woman"],
    hook: function(){
        return "Relaease grappling hook";
    }
}
/*for (var key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ": " + superman[key]);
    }
}*/


Batman.city = "Gotham"

//nested objects
jla = {

    superman: { realName: "clarke kent" },
    superman: { realName: "clarke kent" },
  greenLantern: { realName: "Hal Jordab" },
    superman: { realName: "clarke kent" },
}


function greet(options) {
    options = options || {};
    greeting = options.greeting || "Hello";
    name = options.name || "Anon";
    age = options.age || 18
    return greeting + "! my name is " + name + " and i am " + age + " years old.";
}

//----JSON----//
var batman = '{"name": "Batman","real name": "Bruce Wayne","height":74,"weight": 210,"hero": true,"villain": false,"allies": ["Robin", "Batgirl","Superman"]}'


var pdf = /.*\.pdf$/; // regular expresion for searching for file expressions this is for pdf

dice = {
    sides: 6,
    roll: () =>   Math.floor(6 * Math.random()) + 1

}
//this is the actual code from the book

/*dice = {
sides: 6,
roll: function(){
return Math.floor(6 * Math.random()) + 1;
}
}*/




///DOM CODES

var newPara = document.createElement('p');
var text = document.createTextNode('Transition 1');
newPara.appendChild(text);

function createElement(tag,text){
    el = document.createElement(tag);
    el.textContent = text;
    return el
}

var anotherPara = createElement("p","Transition 2");

//search box code
var form = document.forms['search'];
var input = form.elements[0];
var button = form.elements[1];
form.action = "/alt/search"


/*

function primes(n) {
    var = notPrime = false;
    for (var x = 0; x < n; n++) {
        if (notPrime === false) {
            console.log(x);
        }
    }
    for (var i = 0; i < x; i++) {
        var y = x % i;
        if (y === 0 && i !== x) {
            notPrime = true;
        }

    }

}

primes();
*/

        function prime(n) {
            for (var x = 2; x < n; x++) {
                if(n % x===0){
                    return console.log(n+ " is not a prime");
                } else{
                    return console.log(n+ " is a prime");
                }
                return n > 1;
                }
        

            /* function isPrime(value) {
                   for(var i = 2; i < value; i++) {
                       if(value % i === 0) {
                           return false;
                       }
                   }
                   return value > 1;
               }  }*/}


             //  arrow(2)=>function1;1

//code to wrie word backward

function muf(word) {
    results=[];
    for (var i = 0; i < word.length; i++) { 
        results.unshift(word[i]);

        }
        var res = results.join(" ");
       console.log(res);

    }

    function cap(word) {
    let=[i,j];
    for (var i = 0; i < word.length; i++) { 
        results.unshift(word[i]);

        }
        var res = results.join(" ");
       console.log(res);

    }