let a = +prompt("Enter the length a:");
while (isNaN(a) || a <= 0) {
  a = +prompt("Incorrect data. Enter the length a again: ");
}

let b = +prompt("Enter the length b:");
while (isNaN(b) || b <= 0) {
  b = +prompt("Incorrect data. Enter the length b again:");
}

let c = +prompt("Enter the length c:");
while (isNaN(c) || c <= 0) {
  c = +prompt("Incorrect data. Enter the length c adain:");
}

let p = (a + b + c) / 2;
let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
console.log("Площа трикутника: " + area);

if (a * a + b * b === c * c || b * b + c * c === a * a || c * c + a * a === b * b) {
  console.log("Цей трикутник є прямокутним");
} else {
  console.log("Цей трикутник не є прямокутним");
}