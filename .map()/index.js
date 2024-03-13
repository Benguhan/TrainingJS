const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

console.log(squares); // [1, 4, 9, 16, 25]

function square(element) {
    return Math.pow(element, 2);
}


/*
----------
*/


const dates = ["2024-01-20", "2024-01-21", "2024-01-22"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates); // ["20/01/2024", "21/01/2024", "22/01/2024"]

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}