// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, робота якого завершується 
// поверненням добутку елементів масиву, якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, 
// якщо хоча б 1 елемент масиву нечисловий.
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(elem => !isNaN(elem))) {
            resolve(arr.reduce((prevParameter, currParameter) => prevParameter * currParameter));
        } else
            reject('Error! Incorrect array!')
    });
}
calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"