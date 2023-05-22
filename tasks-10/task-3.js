// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
function mul(...parameters) {
    const numbers = parameters.filter(parameter => typeof parameter === 'number');
    return numbers.length
        ? numbers.reduce((prevParameter, currParameter) => prevParameter * currParameter)
        : 0;
};
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0