new Promise(function (resolve, reject) {
    let number = +prompt('Enter the number:');   // Запитуємо у користувача number за допомогою prompt()
    if (!isNaN(number)) {          // Якщо користувач ввів число- викликаємо resolve(number)
        resolve(number);
    } else {                                   // Якщо користувач ввів не число - викликаємо reject()
        reject('Invalid data');
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        let number;
        do {
            number = +prompt('Enter the number:'); // Запитуємо у користувача number, до тих пір, поки він його не введе
        } while (isNaN(number));

        resolve(number);                         // Після вводу числа - викликаємо resolve(number)
    });
}).then(function (result) {
    console.log(result);                             // Вивід number у консоль
});