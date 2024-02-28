//Counter Program

const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');
const incrementButton = document.getElementById('incrementButton');
const countLabel = document.getElementById('countLabel');

let count = 0;

incrementButton.onclick = function() {
  count++;
  countLabel.textContent = count;
}

decrementButton.onclick =function() {
    count--;
    if (count < 0) {
        count = 0;
    }
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}