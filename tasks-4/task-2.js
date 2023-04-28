// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує 
// модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age 
//     з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
//     в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. 
//     У блоці catch передбачена можливість виведення назви та опису помилки.
(function () {

    function checkAge() {
        let name = prompt('Enter your name:');
        let age = prompt('Enter your age:');
        let status = prompt('Enter your status(admin, moderator, user):');

        if (!name || !age || !status) throw new Error('The field is empty! Please enter your data.');
        if (age < 18 || age > 70) throw new RangeError('Your age is out of range[18..70].');
        if (status !== 'admin' && status !== 'moderator' && status !== 'user') throw new EvalError('You entered uncorrect status! Please enter your status again.');
        if (isNaN(age)) throw new TypeError('Your age is not a number! Please enter you age again.');
        alert(`${status} ${name}, enjoy watching the movie! :)`)
    };
    try {
        checkAge();
    } catch (error) {
        alert(`Oh no! ${error.name} occurred: ${error.message}`);
    }
})();