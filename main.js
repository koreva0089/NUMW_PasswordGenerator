const passwordBox = document.getElementById("password");
const textLength = document.getElementById("textLength");
const range = document.getElementById("length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const special = document.getElementById("spec");
const buttonGen = document.getElementById("generateBtn");

buttonGen.addEventListener("click", () => {
    let dictionary = "";

    if (lowercase.checked) {
        dictionary += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase.checked) {
        dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers.checked) {
        dictionary += "0123456789";
    }
    if (special.checked) {
        dictionary += "!@#$%^&*(){}[];<>:";
    }

    if (dictionary.length === 0) {
        alert("Check at least one option");
        return;
    }

    let password = "";
    for (let i = 0; i < range.value; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    passwordBox.value = password;
});

range.addEventListener("input", (e) => {
    textLength.innerHTML = e.target.value;
});