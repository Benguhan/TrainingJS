
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}


/*

------------

*/


let fruits = ["apple", "orange", "banana", "coconat"];

fruits.forEach(capitalize);
fruits.forEach(display);


function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}