function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:?';
    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercase : '';
    allowedChars += includeUppercase ? uppercase : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    console.log(`Allowed characters: ${allowedChars}`);

    if (allowedChars.length === 0) {
        return 'At least one type of character must be included';
    }
    if (length < 4) {
        return 'Password length must be at least 4 characters';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const length = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(length,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

console.log(`Generated password: ${password}`);