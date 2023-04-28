// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
(function () {
    function printNumbers(a, b) {
        let output = '';
        for (let i = a; i <= b; i++) {
            output += (i + ' ').repeat(i - a + 1);
        }
        console.log(output.trim());
    };

    printNumbers(1, 5);
})();

