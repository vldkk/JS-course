const emailRegex = /^[\w\.\-]{3,}@\w+\.\w+$/;
const checkEmail = (email) => console.log(emailRegex.test(email));
checkEmail("Qmail2@gmail.com"); //true