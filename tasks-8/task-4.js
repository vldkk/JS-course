function validateCardNumber(cardNumber) {
    const regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
};

console.log(validateCardNumber('9999-9999-9999-9999')); // true
console.log(validateCardNumber('1234-5678-9012-3456')); // true
console.log(validateCardNumber('1234-56789012-3456')); // false