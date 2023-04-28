// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height 
// і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано
//  не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
(function () {
    const calcRectangleArea = (width, height) => width * height;

    try {
        const width = prompt('Enter rectangle width:');
        const height = prompt('Enter rectangle height:');

        if (!width || !height) throw new Error('The field is empty! Please enter your data.');
        if (isNaN(width) || isNaN(height)) throw new TypeError('Your data is not a number! Please enter data again.');
        if (width < 0 || height < 0) throw new Error('Data must not be negative');

        const rectangleArea = calcRectangleArea(width, height);
        alert(`Rectangle area: ${rectangleArea}.`);
    } catch (error) {
        alert(`Oh no! ${error.name} occurred: ${error.message}`);
    }
})();