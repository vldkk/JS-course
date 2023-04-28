// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));  // May
// console.log(showMonthName(14)); // MonthException Incorrect month number
(function () {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    class MonthException {
        constructor(message) {
            this.name = 'MonthException';
            this.message = message;
        }
    }

    const showMonthName = (month) => months[month - 1];

    try {
        const month = prompt('Enter number of month:');

        if (!month) throw new Error('The field is empty! Please enter your data.');
        if (isNaN(month) || !Number.isInteger(+month) || +month < 1 || +month > 12) throw new MonthException('Incorrect month number');

        const nameMonth = showMonthName(month);
        alert(`This month: ${nameMonth}.`);
    } catch (error) {
        alert(`Oh no! ${error.name} occurred: ${error.message}`);
    }
})();