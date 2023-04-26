// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
(function () {
    function randArray(k) {
        let arr = [];
        for (let i = 0; i < k; i++) {
            const randomNum = Math.floor(Math.random() * 500) + 1;
            arr.push(randomNum);
        }
        console.log(arr);
    };
    randArray(5);
})();
