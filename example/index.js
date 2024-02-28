//window.alert("alert!");

/*
let age = 22;
let price = 10.99;
let gpa = 2.5;
console.log(`I am ${age} years old`);
console.log(`The price of the book is $${price}`);
console.log(`My GPA is ${gpa}`);
console.log(typeof age);

let firstName = "Bengühan";
let lastName = "Şahin";
console.log(`My name is ${firstName} ${lastName}`);
console.log(typeof firstName);
let email = "bs123@gmail.com";
console.log(`My email is ${email}`);
console.log(typeof email);
let online = true;
console.log(`I am online: ${online}`);
console.log(typeof online);


document.getElementById("p1").textContent = `My name is ${firstName} ${lastName}`;
document.getElementById("p2").textContent = `My age is ${age}`;
document.getElementById("p3").textContent = `I am online: ${online}`;
document.getElementById("p4").textContent = price;

let username;
username = window.prompt("Please enter your username");
console.log(`Your username is ${username}`);
*/

/*
let age = window.prompt("How old are you?");

age = Number(age);

age += 1;
console.log(age, typeof age);
*/

const PI = 3.14;
let radius;
let cirumference;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    cirumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The cirumference of the circle is ${cirumference}`;
}