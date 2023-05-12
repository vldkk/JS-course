function checkLogin(str) {
    const loginRegex = /^[a-zA-Z][a-zA-Z\d+(\.\d+)?]{1,9}$/;
    const numRegex = /\d+(\.\d+)?/g;
    const isValidLogin = loginRegex.test(str);
    const numbers = str.match(numRegex);
    console.log(numbers);
    return isValidLogin;
};

console.log(checkLogin('ee1.1ret3')); //true 1.1, 3
console.log(checkLogin('ee1*1ret3')); //false 1, 1, 3