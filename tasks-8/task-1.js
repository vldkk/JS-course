function upperCase(str) {
    const regex = /^[A-Z]/;
    regex.test(str) ? console.log("String's starts with uppercase character") : console.log("String's not starts with uppercase character");
}

upperCase('regexp'); // "String's not starts with uppercase character"
upperCase('RegExp'); // "String's starts with uppercase character"