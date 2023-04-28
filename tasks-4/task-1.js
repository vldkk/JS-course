// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові 
// номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміру за довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
(function () {
    function sumSliceArray(arr, first, second) {
        if (isNaN(first) || isNaN(second)) throw new Error('data is not a number');
        if (first > arr.length || second > arr.length || first < 0 || second < 0) throw new Error(`data is out of range[1..${arr.length}]`);
        return arr[first - 1] + arr[second - 1];
    };

    const arr = [3, 52, -7, 43, 184];

    try {
        console.log(sumSliceArray(arr, 1, 5));
    } catch (error) {
        console.log('Error: ' + error.message);
    }

})();