let str = "Java Script";
const regex = /(\w+)\s+(\w+)/;
console.log(str.replace(regex, "$2, $1")); // "Script, Java"