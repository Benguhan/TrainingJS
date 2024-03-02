const myInput = document.getElementById('myInput');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
let age;

submit.onclick = function() {
    age = myInput.value;
    age = Number(age);
    if (age >= 18) {
        result.textContent = `You are ${age} years old you are an adult`;
    } 
    else {
        result.textContent = "You are not an adult";
    }
}

