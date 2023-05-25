// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне значення затримки delay (в мс)
//  і повертає Promise, який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function (data) {
    console.log(data);
});