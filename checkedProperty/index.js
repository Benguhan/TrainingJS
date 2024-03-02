const myCheckBox = document.getElementById('myCheckBox');
const visaButton = document.getElementById('visaButton');
const masterCardButton = document.getElementById('masterCardButton');
const payPalButton = document.getElementById('payPalButton');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const cardResult = document.getElementById('cardResult');

mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else {
        subResult.textContent = `You are NOT subscribed!`;
    }

    if (visaButton.checked) {
        cardResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardButton.checked) {
        cardResult.textContent = `You are paying with MasterCard`;
    }
    else if (payPalButton.checked) {
        cardResult.textContent = `You are paying with PayPal`;
    }
    else {
        cardResult.textContent = `You must select payment method`;
    }
}
