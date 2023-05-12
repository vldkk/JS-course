function checkEmail(email) {
    const regex = /^[a-zA-Z0-9]+([_\-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    regex.test(email) ? console.log("Email is correct!") : console.log("Email is not correct!");
};

checkEmail('my_mail@gmail.com'); //"Email is correct!"
checkEmail('#my_mail@gmail.com'); //"Email is not correct!"
checkEmail('my_ma--il@gmail.com'); //"Email is not correct!"